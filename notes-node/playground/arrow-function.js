var square = x => x*x;

console.log(square(9));

var user = {
  name: 'Gabriel',
  sayHi: () => {
    console.log(arguments);
    console.log('HI, i\'m ' + this.name);
  },
  sayHiAlt () {
    console.log(arguments);
    console.log('HI, i\'m ' + this.name);
  }
};

user.sayHi(4, 5, 6);
