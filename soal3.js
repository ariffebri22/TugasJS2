function SeleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
    if (typeof nilaiAwal !== "number" || typeof nilaiAkhir !== "number") {
        throw new Error("Nilai harus berupa number");
    }

    if (!Array.isArray(dataArray)) {
        throw new Error("Data harus berupa array");
    }

    if (nilaiAwal >= nilaiAkhir) {
        throw new Error("Nilai akhir harus lebih besar dari nilai awal");
    }

    if (dataArray.length <= 5) {
        throw new Error("Jumlah angka dalam dataArray harus lebih dari 5");
    }

    const results = dataArray.filter((data) => {
        return data > nilaiAwal && data < nilaiAkhir;
    });

    if (results.length === 0) {
        throw new Error("Nilai tidak ditemukan");
    }

    results.sort((a, b) => {
        return a - b;
    });

    console.log(results);
}

try {
    SeleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]);
    SeleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]);
    SeleksiNilai(5, 17, [2, 25, 4]);
    SeleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]);
    SeleksiNilai("a", 10, [2, 25, 4, 14, 17, 30, 8]);
    SeleksiNilai(5, 10, "1, 2, 3, 4, 5");
} catch (err) {
    console.log(err.message);
}
