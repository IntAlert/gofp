import { Component, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BadgeBuilderService } from '../badge-builder.service';

const URL = '/api/';


@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css']
})
export class ImageUploaderComponent {

  
  uploadForm : FormGroup;
  service: BadgeBuilderService

  fileChosen: Boolean = false;
  @ViewChild("fileInput") fileInput;


   // We are passing an instance of the FormBuilder to our constructor
  constructor(fb: FormBuilder, service: BadgeBuilderService){
    // Here we are using the FormBuilder to build out our form.
    this.uploadForm = fb.group({
      // We can set default values by passing in the corresponding value or leave blank if we wish to not set the value. For our example, we’ll default the gender to female.
      'file' : [null, Validators.required]
    })

    this.service = service
    
  }


  // submitForm(e: Event) {
  //   var target: HTMLInputElement = e.target as HTMLInputElement;
  //   if (target.files.length) {
  //     this.upload(target.files[0]);
  //   }
  // }

  fileChange(e: Event) {
    let fi = this.fileInput.nativeElement;
    this.fileChosen = (fi.files && !!fi.files.length)
    this.service.registerFileChosen()
  }

  submitForm(): void {
    let fi = this.fileInput.nativeElement;
    if (fi.files && fi.files[0]) {
        let fileToUpload = fi.files[0];
        this.upload(fileToUpload);
    } else {
      console.log('no files')
    }
  }

  upload(img: File) {
    // var formData: FormData = new FormData();
    // formData.append("image", img, img.name);

    // var xhr = new XMLHttpRequest();
    // xhr.upload.addEventListener("progress", (ev: ProgressEvent) => {
    //   //You can handle progress events here if you want to track upload progress (I used an observable<number> to fire back updates to whomever called this upload)
    // });
    // xhr.open("POST", URL);
    // xhr.send(formData);

    // TODO need callback

    this.service.registerUploadStart()
    setTimeout(() => {
      this.service.registerUploadComplete()
      setTimeout(() => {
        this.service.registerPreviewReady()
      }, 1000)
    }, 1000)
  }
  

}
