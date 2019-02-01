function timeout(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(delay);
    }, delay);
  });
}

//on lance deux Promise asynchrone
// et on est notifié quand les deux sont terminees

(async () => {
   const delays = await Promise.all([
    timeout(Math.floor(Math.random() * 1001)),
    timeout(Math.floor(Math.random() * 1001)),
   ]);

   console.log(delays[0], delays[1]);
})()
