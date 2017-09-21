const expect = require('expect');

const utils = require('./utils');

it('Should add two numbers', () => {
  var res = utils.add(4, 7);

  expect(res).toBe(11).toBeA('number');
});

it('Should square a number', () => {
  var res = utils.square(4);

  expect(res).toBe(16).toBeA('number');
});

it('Should expect some values', () => {
  // expect({name: 'Gabi'}).toEqual({name: 'Gabi'});
  // expect([2, 3, 4]).toExclude(3);
  expect({
    name: 'Gabi',
    age: 22,
    location: 'Ro'
  }).toInclude({
    age: 22
  });
});
