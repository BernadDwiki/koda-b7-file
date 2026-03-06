const {createInterface} = require("node:readline/promises");
const { ambilInputReadFile, ambilInputWriteFile, ambilInputAppendFile, ambilInputUnlinkFile } = require('./fsInput.js')

async function menu() {
    let exit = false
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout
    })
    do {
        console.log("======================")
        console.log("Selamat Datang di Menu")
        console.log("Silahkan pilih dari dibawah ini:")
        console.log("1. Baca File")
        console.log("2. Buat File")
        console.log("3. Append File")
        console.log("4. Hapus File")
        console.log("0. Exit")

        try {
            const input = await rl.question("Masukkan pilihan anda: ")
            if (input === '0') {
                exit = true
                rl.close()
                console.log("🙏 Selamat tinggal 🙏")
                return
            }
            switch (input) {
                case "1":
                    await ambilInputReadFile(rl)
                    break;
                case "2":
                    await ambilInputWriteFile(rl)
                    break;
                case "3":
                    await ambilInputAppendFile(rl)
                    break;
                case "4":
                    await ambilInputUnlinkFile(rl)
                    break;
                default:
                    console.log("pilihan anda masih dalam tahap perkembangan\n")
                    break;
            }
        } catch (err) {
            console.log("Terjadi error:", err.message)
        }
    } while (!exit)
}

menu()