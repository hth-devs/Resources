var database = [
    {
        user:"talha",
        pass:"123"
    },
    {
        user:"ali",
        pass:"321"
    },
    {
        user:"fardeen",
        pass:"000"
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

function isUserValid(userName, password){
    for (var i=0; i< database.length; i++) {
        if(userName === database[i].user && password ===database[i].pass){
           return true;
        } 
    }

    return false;
}

function signIn (userName, password){
    if(isUserValid(userName,password)){
        console.log(newsFeed);
    }
    else{
        alert("username or password is incorrect");
    }
} 

var namePrompt= prompt("Enter the Name");
var passPrompt= prompt("Enter the Password");
signIn(namePrompt,passPrompt);