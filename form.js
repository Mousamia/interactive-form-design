// id function
const elements = (id) =>  {
    return document.getElementById(id);
}

const signUp = elements('signup');
const userName = elements('username');
const password = elements('password');


const errMsg = document.getElementsByClassName("error");

console.log(errMsg);


console.log(signUp);
console.log(userName);
console.log(password);



console.log(signUp);
// signUp.addEventListener('submit', function(){

// })