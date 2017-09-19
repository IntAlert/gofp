"use strict"
let azure = require('azure-storage'),
    path = require('path'),
		uuid = require('node-uuid'),
        Jimp = require('jimp'), 
        fileType = require('file-type'),
        Duplex = require('stream').Duplex;  


let _requestsQueue = []

const blobName = (file) => {
    let name = file.fieldname + '-' + uuid.v4() + path.extname(file.originalname)
    file.blobName = name
    return name
}

const defaultSecurity = 'blob'

class MulterResizeAzureStorage {

    constructor (opts) {
        this.containerCreated = false
        this.containerError = false

        let missingParameters = []
        if (!opts.azureStorageConnectionString) missingParameters.push("azureStorageConnectionString")
        if (!opts.azureStorageAccessKey) missingParameters.push("azureStorageAccessKey")
        if (!opts.azureStorageAccount) missingParameters.push("azureStorageAccount")
        if (!opts.containerName) missingParameters.push("containerName")

        if (missingParameters.length > 0) {
          throw new Error('Missing required parameter' + (missingParameters.length > 1 ? 's' : '') + ' from the options of MulterAzureStorage: ' + missingParameters.join(', '))
        }

        this.containerName = opts.containerName

        this.blobService = azure.createBlobService(
            opts.azureStorageAccount,
            opts.azureStorageAccessKey,
            opts.azureStorageConnectionString)

        let security = opts.containerSecurity || defaultSecurity

        this.blobService.createContainerIfNotExists(this.containerName, { publicAccessLevel : security }, (err, result, response) => {
            if (err) {
                this.containerError = true
                throw new Error('Cannot use container. Check if provided options are correct.')
            }

            this.containerCreated = true

            _requestsQueue.forEach(i => this._removeFile(i.req, i.file, i.cb))
            _requestsQueue = []
        })
    }

    _handleFile(req, file, cb) {

        if (this.containerError) {
            cb(new Error('Cannot use container. Check if provided options are correct.'))
        }

        if (!this.containerCreated) {
            _requestsQueue.push({ req: req, file: file, cb: cb })
            return
        }
					


        const blob = blobName(file);
        const writeStream = this.getWriteStream(blob, cb);


        streamToBuffer(file.stream).then(uploadBuffer => {
            Jimp.read(uploadBuffer, (err, image)=>{

                let type = fileType(uploadBuffer);
    
                // Resize this image
                image
                .exifRotate()
                .scaleToFit(850, 530)
                    //lower the quality by 90%
                    .quality(99)
                    .getBuffer(type.mime, (err, buffer)=>{
                        bufferToStream(buffer).pipe(writeStream);
                    });

            });
        })

                

				
					

    }

    getWriteStream(blob, cb) {

        const writeStream = this.blobService.createWriteStreamToBlockBlob(this.containerName, blob, (err, azureBlob) => {
            if (err) {
                return cb(err)
            }

            this.blobService.getBlobProperties(this.containerName, blob, (err, result, response) => {
                if (err) {
                    return cb(err)
                }

                const url = this.blobService.getUrl(this.containerName, blob)
                cb(null, {
                    container: result.container,
                    blob: blob,
                    blobType: result.blobType,
                    size: result.contentLength,
                    etag: result.etag,
                    metadata: result.metadata,
                    url: url
                })
            })
        });

        return writeStream;
    }

    _removeFile(req, file, cb) {
        if (this.containerError) {
            cb(new Error('Cannot use container. Check if provided options are correct.'))
        }

        if (file.blobName) {
            this.blobService.deleteBlob(this.containerName, file.blobName, cb)
        } else {
            cb(null)
        }
    }
}



function bufferToStream(buffer) {  
  let stream = new Duplex();
  stream.push(buffer);
  stream.push(null);
  return stream;
}

function streamToBuffer(stream) {  
    return new Promise((resolve, reject) => {
      let buffers = [];
      stream.on('error', reject);
      stream.on('data', (data) => buffers.push(data));
      stream.on('end', () => resolve(Buffer.concat(buffers)))
    })
  }  

/**
 * @param {object}      [opts]
 * @param {string}      [opts.azureStorageConnectionString]
 * @param {string}      [opts.azureStorageAccessKey]
 * @param {string}      [opts.azureStorageAccount]
 * @param {string}      [opts.containerName]
 * @param {string}      [opts.containerSecurity]                'blob' or 'container', default: blob
 */
module.exports = function (opts) {
    return new MulterResizeAzureStorage(opts)
}
