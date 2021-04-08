importScripts('./node_modules/jszip/dist/jszip.min.js');


self.addEventListener('message', (event) => {
  const zip = new JSZip();
  console.log(event.data);

  const file = event.data;

  const reader = new FileReader();

  reader.onload = async (event) => {
    zip.file(file.name, event.target.result);

    const result = await zip.generateAsync({
      type: 'blob',
      compression: 'DEFLATE',
      compressionOptions: {
        level: 9
      }
    });

    self.postMessage(result);
  }

  reader.readAsBinaryString(file);
});
