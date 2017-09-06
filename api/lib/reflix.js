const rp = require('request-promise');

module.exports = {

  // generate: (profilePicURL) => {

  //   const options = {
  //     method: 'POST',
  //     uri: 'reflix.co/images/generate',
  //     form: {
  //       profilePicURL
  //     }
  //   }

  //   return rp(options)

  // }

  generate: (upload, story) => {

    const profilePicURL = upload ? upload.url : 'http://127.0.0.1:4200/assets/maxresdefault.jpg';

    return Promise.resolve({
      ok: true,
      image: profilePicURL,
      opengraph: 'http:/www.google.co.uk/'
    })

  }

  
}