var database = [
    {
        user:"talha",
        pass:"123"
    }
];

var newsFeed = [
    {
        user: "Hanan",
        timeline: "JavaScript is gona be awesome"
    },
    {
        user: "Usama",
        timeline: "React is Coool"
    },
    {
        user: "Kashif",
        timeline: "DOM is little tough. But i will do it.."
    }
];

function signIn (userName, password){
    if(userName === database[0].user && password ===database[0].pass){
        console.log(newsFeed);
    }
    else{
        alert("username or password is incorrect");
    }
} 

var namePrompt= prompt("Enter the Name");
var passPrompt= prompt("Enter the Password");
signIn(namePrompt,passPrompt);