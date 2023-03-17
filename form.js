// id function
const ids = (id) => document.getElementById(id);

let classes = (className) => document.getElementsByClassName(className);


const form = ids('form');
let errorMsg = classes("error");
console.log(errorMsg[0]);
console.log(errorMsg[1]);




form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userName = ids('username').value;
    console.log(userName);
    if(userName == ""){
        errorMsg[0].innertext = ` <span> username can not be empty</span>`
        errorMsg[0].classList.add = "block";
    }

})