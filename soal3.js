function SeleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
    if (typeof nilaiAwal !== "number" || typeof nilaiAkhir !== "number") {
        return console.log("Nilai harus berupa number");
    }

    if (!Array.isArray(dataArray)) {
        return console.log("Data harus berupa array");
    }

    if (nilaiAwal >= nilaiAkhir) {
        return console.log("Nilai akhir harus lebih besar dari nilai awal");
    }

    if (dataArray.length <= 5) {
        return console.log("Jumlah angka dalam dataArray harus lebih dari 5");
    }

    const results = dataArray.filter(function (data) {
        return data > nilaiAwal && data < nilaiAkhir;
    });

    if (results.length === 0) {
        return console.log("Nilai tidak ditemukan");
    }

    results.sort(function (a, b) {
        return a - b;
    });

    console.log(results);
}

SeleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]);
SeleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]);
SeleksiNilai(5, 17, [2, 25, 4]);
SeleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]);
SeleksiNilai("a", 10, [2, 25, 4, 14, 17, 30, 8]);
SeleksiNilai(5, 10, "not an array");
