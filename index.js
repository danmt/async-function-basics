const callbackFn = callback => {
  setTimeout(() => {
    callback(null, "notificar");
  }, 2000);
};

callbackFn((error, valor) => {
  if (error) {
    console.error(error);
  } else {
    console.log(valor);
  }
});

const errorPromiseFactory = ms =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("error");
    }, ms);
  });

const promiseFnFactory = (ms, message) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, ms);
  });

const promiseFn_1 = promiseFnFactory(2000, "promesa 1 termino");
const promiseFn_2 = promiseFnFactory(3000, "promesa 2 termino");
const promiseFn_3 = errorPromiseFactory(4000);

Promise.all([promiseFn_1, promiseFn_2, promiseFn_3])
  .then(value => {
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  });
