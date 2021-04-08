self.addEventListener('message', (event) => {
  console.log(event.data);

  const file = event.data;

  const reader = new FileReader();

  reader.onload = (event) => {
    console.log(event.target.result);

    self.postMessage(event.target.result)
  }

  reader.readAsText(file);
});
