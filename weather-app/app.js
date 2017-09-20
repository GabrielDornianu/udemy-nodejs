const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

var encodedAddress = encodeURIComponent(argv.address);

console.log(encodedAddress);

var geocodeUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodedAddress;

axios.get(geocodeUrl).then((response) => {
  if(response.data.status === 'ZERO_RESULTS'){
    throw new Error('Unable to find that address');
  }

  var lat = response.data.results[0].geometry.location.lat;
  var lng = response.data.results[0].geometry.location.lng;
  var weatherUrl = 'https://api.darksky.net/forecast/f8f33fa779427bf2eb6b80e7247256d8/' + lat + ',' + lng;
  console.log(response.data.results[0].formatted_address);

  return axios.get(weatherUrl);
}).then((response) => {
  var temperature = response.data.currently.temperature;
  var apparentTemperature = response.data.currently.apparentTemperature;
  console.log(apparentTemperature);
}).catch((e) => {
  if(e.code === 'ENOTFOUND'){
    console.log('Unable to connect to API servers');
  }else{
    console.log(e.message);
  }
});

// geocode.geocode(argv.address, (errorMessage, results) => {
//   if(errorMessage){
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(results, undefined, 2));
//     weather.getWeather(results);
//   }
// });
