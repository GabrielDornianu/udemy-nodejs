const utils = require('./utils');

it('Should add two numbers', () => {
  var res = utils.add(4, 7);
  if(res != 11){
    throw new Error(`Extected 14 but got ${res}`);
  }
});

it('Should square a number', () => {
  var res = utils.square(4);
  if(res != 16){
    throw new Error(`Expected 16 but got ${res}`);
  }
});
