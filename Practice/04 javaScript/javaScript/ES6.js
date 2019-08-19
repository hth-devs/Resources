//1.Destructuring      2.Object properties   3.Templete String 4.Default arguments  5.symbols


//Destructuring
const obj ={
    name : "Hanan",
    age : 25,
    student : true
}

const {name,age}= obj;
let {student}= obj;

// Object properties 
const a = 'simon';
const b= 24;
const c = {};

const obj ={
    a,
    b,
    c
}

// Tamplete String
const lol = 'love';
const str = `Hello my ${lol}`;