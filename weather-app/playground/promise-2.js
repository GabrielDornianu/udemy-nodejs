const request = require('request');

var geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {

    var encodedAddress = encodeURIComponent(address);
    // console.log(encodeURIComponent(address));

    request({
      url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodedAddress,
      json: true
    }, (error, response, body) => {
      if(error){
        reject('There was an error in the request');
      }else if(body.status === "ZERO_RESULTS"){
        reject('Empty JSON object');
      }else if(body.status === "OK"){
        resolve(body.results[0].geometry.location);
      }
    });

  });
};

geocodeAddress('617010').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
  console.log('Error: ' + errorMessage);
});
