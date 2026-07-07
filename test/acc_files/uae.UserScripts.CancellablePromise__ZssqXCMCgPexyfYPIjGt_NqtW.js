function createCancellablePromise(promiseFactory) {
  let isCancelled = false;
  
  const wrappedPromise = new Promise((resolve, reject) => {
    promiseFactory
      .then(value => {
        if (!isCancelled) resolve(value);
      })
      .catch(error => {
        if (!isCancelled) reject(error);
      });
  });

  return {
    promise: wrappedPromise,
    cancel: () => {
      isCancelled = true;
    }
  };
}

window.createCancellablePromise = createCancellablePromise;
