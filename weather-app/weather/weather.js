const request = require('request');
const fs = require('fs');

function getWeather(input) {
  request({
    url: 'https://api.darksky.net/forecast/f8f33fa779427bf2eb6b80e7247256d8/' + input.latitude + ',' + input.longitude,
    json: true
  }, (error, response, body) => {
    if(!error && response.statusCode == 200){
      var celsiusTemperature = (((body.currently.temperature - 32) * 5) / 9).toFixed(2),
          date = new Date();
      console.log('Temperature at input address: ' + celsiusTemperature + ' at date:  ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
      fs.writeFileSync('Temperature-graph-file', 'Temperature at required address: ' + celsiusTemperature + '\n');
    }else{
      console.log('Unable to fetch weather');
    }
  });
}

module.exports = {
  getWeather
}
