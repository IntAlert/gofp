const rp = require('request-promise');

module.exports = {

  generate: (profilePicURL, story, redirect, title, description) => {


    const payload = { 
      "content": {
        "story": story,
        "image": profilePicURL
      },
      "opengraph": {
        "title": title,
        "description": description
      },
      "redirect": redirect
    }

    const options = {
      method: 'POST',
      uri: 'http://go.reflix.co/images/generate/56',
      body: payload,
      headers: {
        "content-type": "application/json",
        token: "e304b6d64fe9ac5b88ed3fc37a7093b2"
      },
      json:true
    }

    return rp(options);

  }
  
}