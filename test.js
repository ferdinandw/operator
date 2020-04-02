const inputAngka1 = () => {
    const number1 = window.prompt('Masukkan Angka Pertama');
    if (isNaN(number1)) {
        window.alert('this is not a number')
        inputAngka1();
    } else {
        angka1 = Number(number1);
        inputAngka2();
    }
}
const inputAngka2 = () => {
    const number2 = window.prompt('Masukkan Angka 2');
    if (isNaN(number2)) {
        window.alert('this is not a number')
        inputAngka2();
    } else {
        angka2 = Number(number2);
        op();
    }
}
const op = () => {
    const operator = window.prompt('Pilih Operator Matematika')
    if (operator == "tambah" || operator == "+" || operator == "plus") {
        hasil = angka1 + angka2;
        console.log(hasil)
    } else if (operator == "kurang" || operator == "-" || operator == "minus") {
        hasil = angka1 - angka2;
        console.log(hasil)
    } else if (operator == "bagi" || operator == "/") {
        hasil = angka1 / angka2;
        console.log(hasil)
    } else if (operator == "kali" || operator == "x" | operator == "*") {
        hasil = angka1 * angka2;
        console.log(hasil)
    } else {
        console.log('Ada Kesalahan Input')
    }
}
inputAngka1();