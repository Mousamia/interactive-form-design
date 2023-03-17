// id function
const ids = (id) => document.getElementById(id);

let classes = (className) => document.getElementsByClassName(className);


const form = ids('form');
let errorMsg = classes("error");
let succsessIcon = classes("success");
let warningIcon = classes("warning");


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userName = ids('username').value;
    const password = ids('password').value;

    vallidation(userName, 0, "username can not be empty");
    vallidation(password, 1, "password can not be empty");
    console.log(errorMsg);


})

const vallidation = (field, serial, msg) => {

    if (field.trim() === "") {
        errorMsg[serial].innerHTML = msg;
        succsessIcon[serial].style.opacity = "0";
        warningIcon[serial].style.opacity = "1";

    }

    else {
        errorMsg[serial].innerHTML = "";
        succsessIcon[serial].style.opacity = "1";
        warningIcon[serial].style.opacity = "0";

    }

}