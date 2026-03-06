const { readFileExample, writeFileExample, appendFileExample, unlinkFileExample } = require('./fsPromises.js')
const path = require("node:path");

const BASE_DIR = '/home/bernaddwiki/Documents/latihan/';

async function ambilInputReadFile(rl) {

  try {
    const input = await rl.question('Masukkan nama file yang ingin dibaca: ');
    const targetPath = path.join(BASE_DIR, input);
    const hasil = await readFileExample(targetPath)
    return hasil
  } catch (err) {
    console.error(err);
}}

async function ambilInputWriteFile(rl) {
  try {
    const namaFile = await rl.question('Masukkan nama file yang ingin dibuat: ');
    const isiFile = await rl.question('Masukkan isi text yang ingin dibuat: ');

    const targetPath = path.join(BASE_DIR, namaFile);

    console.log(`Menyimpan ke: ${targetPath}`);

    const hasil = await writeFileExample(targetPath, isiFile)
    return hasil
  } catch (err) {
    console.error("Terjadi kesalahan:", err.message);
}}

async function ambilInputAppendFile(rl) {

  try {
    const namaFile = await rl.question('Masukkan nama file yang ingin diappend: ');
    const isiFile = await rl.question('Masukkan isi text yang ingin diappend: ');
    const targetPath = path.join(BASE_DIR, namaFile);
    const hasil = await appendFileExample(targetPath, isiFile)
    return hasil
  } catch (err) {
    console.error(err);
}}

async function ambilInputUnlinkFile(rl) {
  try {
    const namaFile = await rl.question('Masukkan nama file yang ingin dihapus: ');
    const targetPath = path.join(BASE_DIR, namaFile);
    const hasil = await unlinkFileExample(targetPath)
    return hasil
  } catch (err) {
    console.error(err);
}}

module.exports = {
  ambilInputReadFile,
  ambilInputWriteFile,
  ambilInputAppendFile,
  ambilInputUnlinkFile
};
