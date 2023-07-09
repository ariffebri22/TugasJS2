//1. Concat()
//Untuk menggabungkan kedua array
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];

const combinedArray = array1.concat(array2);
// console.log(combinedArray);

//2. toString()
//Untuk mengubah deretan array menjadi string dipisahkan dengan koma
const arrayString = combinedArray.toString();
// console.log(arrayString);

//3. Find()
//Untuk menemukan deretan array sesuai dengan kondisi
let angka = [1, 4, 5, 10, 20, 6, 7, 8, 30, 9, 6, 5, 4];
let angka2 = angka.find(function (e) {
    return e >= 6;
});
// console.log(angka2);

//4. shift()
//Untuk menghapus array index ke [0], lalu array sisanya akan menempati array ke [0]
const hoby = ["Swimming", "Ngoding", "Gaming"];
const firstHoby = hoby.shift();
// console.log(hoby);

//5. unshift()
//Untuk menambahkan value ke array dari index ke [0]
const skill = ["html", "css", "js"];
const skilll = skill.unshift("sass", "webpack");

// console.log(skilll);

//6. push()
//Untuk menambahkan value ke dalam array mulai dari index terakhir
const city = ["paris", "london", "singaparna"];
const cityy = city.push("california", "manila");

// console.log(city);

//7. pop()
//Untuk menghapus value dari array mulai dari index terakhir
const country = ["UK", "US", "IND"];
const countryy = country.pop();

// console.log(country);

//8. Object.create()
//Untuk membuat sebuah object prototipe
const methodMahasiswa = {
    makan(porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama} selamat makan!`);
    },
    main(jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama} selamat bermain!`);
    },
    tidur(jam) {
        this.energi += jam * 2;
        console.log(`Halo ${this.nama} selamat tidur!`);
    },
};

function Mahasiswa(nama, energi) {
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    return mahasiswa;
}

let arif = Mahasiswa("Arif", 10);

//9. Object.keys()
//Untuk membuat sebuah array baru berdasarkan value dari sebuah object
const person = {
    name: "Arif",
    age: 22,
    city: "Cianjur",
};

const keys = Object.keys(person);
// console.log(keys);

//10. Object.values()
//Untuk membuat sebuah array baru berdasarkan properti dari sebuah object
const person1 = {
    name: "Arif",
    age: 23,
    city: "Cianjur",
};

const keys1 = Object.values(person1);
// console.log(keys1);
