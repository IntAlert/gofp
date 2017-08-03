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

  generate: (profilePicURL) => {

    return Promise.resolve({
      ok: true,
      image: profilePicURL,
      opengraph: 'http:/www.google.co.uk/'
    })

  }

  
}