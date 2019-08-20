'Avengers'.padStart(10);


// Object.Values
// Object.entrries
// Object.keys


const obj = {
    user1 : "Talha",
    user2 : "Usama",
    user3 : "admin"
}

Object.values(obj).forEach(element => {
    console.log(element);
});
Object.entries(obj).forEach(element => {
    console.log(element);
});
Object.keys(obj).forEach(element => {
    console.log(element, obj[element]);
});