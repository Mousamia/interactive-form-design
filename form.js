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
    const check1 = vallidation(userName, 0, "username can not be empty");
    const check2 = vallidation(password, 1, "password can not be empty");
    // console.log(check1);
    // console.log(check2);
    // console.log(check1+ check2);

    // if both field are valid it will leadto sign up page
    if( check1+ check2 == 4){
        
        window.location.href = "./sign-up.html";
    }
    
    login(userName, password);
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
        return 2;
    }
}


const loginBtn = document.getElementById('login');
loginBtn.addEventListener("click", function login(userName, password){
    console.log(userName);
    console.log(password);
})


// loaclstroage e info gula rekhe dekhate hobe 
localStorage.getItem('cart');