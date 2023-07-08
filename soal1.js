//1. Concat()
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];

const combinedArray = array1.concat(array2);
// console.log(combinedArray);

//2. toString()
const arrayString = combinedArray.toString();
// console.log(arrayString);

//3. Find()
let angka = [1, 4, 5, 10, 20, 6, 7, 8, 30, 9, 6, 5, 4];
let angka2 = angka.find(function (e) {
    return e >= 6;
});
// console.log(angka2);

//4. shift()
const hoby = ["Swimming", "Ngoding", "Gaming"];
const firstHoby = hoby.shift();
// console.log(hoby);

//5. unshift()
const skill = ["html", "css", "js"];
const skilll = skill.unshift("sass", "webpack");

// console.log(skilll);

//6. push()
const city = ["paris", "london", "singaparna"];
const cityy = city.push("california", "manila");

// console.log(city);

//7. pop()
const country = ["UK", "US", "IND"];
const countryy = country.pop();

// console.log(country);

//8. Object.create()
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
const person = {
    name: "Arif",
    age: 22,
    city: "Cianjur",
};

const keys = Object.keys(person);
// console.log(keys);

//10. Object.values()
const person1 = {
    name: "Arif",
    age: 22,
    city: "Cianjur",
};

const keys1 = Object.values(person1);
// console.log(keys1);
