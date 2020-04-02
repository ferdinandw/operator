const number1 = window.prompt('Masukkan Angka Pertama', "");
if (isNaN(number1)){
    window.alert('this is not a number')
}
else{
    // const angka1 = Number (number1);
    const number2 = window.prompt('Masukkan Angka 2');
    number2 = parseInt(number2);
    if (isNaN(number2)){
        window.alert('this is not a number')
    }
    else{
        const angka2 = Number (number2);
    }
}
// const angka1 = Number (number1);
// const number2 = window.prompt('Masukkan Angka 2');
// const angka2 = Number (number2);

const operator = window.prompt ('Pilih Operator Matematika')

if (operator == "tambah" || operator =="+" || operator=="plus"){
    hasil = angka1 + angka2;
    console.log(hasil)
} else if (operator == "kurang" || operator=="-" || operator=="minus"){
    hasil = angka1 - angka2;
    console.log(hasil)
} else if (operator == "bagi" || operator=="/"){
    hasil = angka1/angka2;
    console.log(hasil)
} else if (operator == "kali" || operator=="x" | operator=="*"){
    hasil = angka1*angka2;
    console.log(hasil)
} else {
    console.log('Ada Kesalahan Input')
}