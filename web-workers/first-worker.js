function slow() {
  let result = 0;

  for (let i = 0; i < 1000000000; i += 1) {
    result += i;
  }

  return result;
}

self.addEventListener('message', (event) => {
  console.log(event.data);

  const result = slow();

  self.postMessage(result);
});
