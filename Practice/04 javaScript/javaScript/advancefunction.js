// 1.Closures  2.Currying  3.Compose



// Closures
const first = ()=>{
    const greet = 'hi';
    const second = () =>{
        const name = "Boss";
        alert(greet);
    }
    return second;
}
const newF = first();
newF();


// Currying
const mul = (a,b)=>a*b;
const curredMul = (a)=> (b)=> a*b;
const mulBy5= curredMul(5);


// Compose
const newCompose = (f,g) =>(a)=> f(g(a));

const sum = (num) => num + 1;