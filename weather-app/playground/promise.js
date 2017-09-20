var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof a === 'number' && typeof b === 'number'){
        resolve(a + b);
      }else{
        reject('Arguments invalid');
      }
    }, 1500);
  });
};

asyncAdd(3, 5).then((result) => {
  console.log('Result: ', result);
  return asyncAdd(result, 14);
}).then((secondResult) => {
  console.log('Result widh 14 added: ' + secondResult);
}).catch((err) => {
  console.log(err);
});

// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Hey it worked');
//     reject('Unable to fulfill promise');
//   }, 2500);
// });
//
// somePromise.then((message) => {
//   console.log('Message: ' + message);
// }, (errorMessage) => {
//   console.log('Error: ' + errorMessage);
// });
