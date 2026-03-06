// Using fs.promises (Node.js 10.0.0+)
const fs = require('fs').promises;

async function readFileExample(namaText) {
  try {
    const data = await fs.readFile(namaText, 'utf8');
    console.log(data);
  } catch (err) {
    console.error('Error reading file:', err);
  }
}

async function writeFileExample(namaFile, isiFile) {
  try {
    const data = await fs.writeFile(namaFile, isiFile)
    console.log('File berhasil ditulis!');
  } catch (err) {
    console.error('Error write file:', err);
  }
}

async function appendFileExample(namaFile, isiFile) {
  try {
    const data = await fs.appendFile(namaFile, isiFile)
    console.log('Data ditambahkan!');
  } catch (err) {
    console.error('Error append file:', err);
  }
}

async function unlinkFileExample(namaFile) {
  try {
    const data = await fs.unlink(namaFile)
    console.log('File dihapus!');
  } catch (err) {
    console.error('Error unlink file:', err);
  }
}


module.exports = {
  readFileExample,
  writeFileExample,
  appendFileExample,
  unlinkFileExample
};