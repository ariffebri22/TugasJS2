const names = ["Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn", "Deirdre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"];

function searchName(keyword, limit, callback) {
    const results = names
        .filter(function (name) {
            return name.toLowerCase().includes(keyword.toLowerCase());
        })
        .slice(0, limit);

    if (results.length > 0) {
        callback(results);
    } else {
        callback("Names not found");
    }
}

function showNames(names) {
    console.log(names);
}

searchName("an", 3, showNames);
