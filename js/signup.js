let nameInputSignUp = document.getElementById("nameInputSignUp");
let emailInputSignUp = document.getElementById("emailInputSignUp");
let passInputSignUp = document.getElementById("passInputSignUp");
let signupBtn = document.getElementById("signupBtn");


// Reg EX
let regExNameSignUp = /^[A-Za-z0-9 ]{3,25}$/;
let regExPassSignUp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
let regExEmailSignUp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function regExFunc(e, ex) {
    if (e.test(ex) == true) {
      return true;
    } else {
      return false;
    }
  }


let signupList;
if (localStorage.getItem("listUser") == null) {
  signupList = [];
} else {
  signupList = JSON.parse(localStorage.getItem("listUser"));
}

if (signupBtn == null) {

}else {
    signupBtn.addEventListener("click" , signupFunc);


function signupFunc() {
    let signupObject = {
      name: nameInputSignUp.value,
      email: emailInputSignUp.value,
      password: passInputSignUp.value,
    };
  
    for (let i = 0; i < signupList.length; i++) {
      if (signupList[i].email === passInputSignUp.value) {
        dontEmpity.classList.replace("d-none", "d-block");
        dontEmpity.innerHTML = "email already exists";
        return;
      }
    }
  
    if (
      passInputSignUp.value == "" ||
      emailInputSignUp.value == "" ||
      nameInputSignUp.value == ""
    ) {
      dontEmpity.classList.replace("d-none", "d-block");
      dontEmpity.innerHTML = `All inputs is required`;
    } else if (
        
      regExFunc(regExPassSignUp, passInputSignUp.value) &&
      regExFunc(regExEmailSignUp, emailInputSignUp.value) &&
      regExFunc(regExNameSignUp, nameInputSignUp.value) 
    ) {

        for(let i = 0 ; i<signupList.length ; i++) {
            if (signupList[i].email == emailInputSignUp.value) {
                dontEmpity.classList.replace("d-none", "d-block");
                dontEmpity.innerHTML = `email already exists`;
                return
            }
        }

      signupList.push(signupObject);
      localStorage.setItem("listUser", JSON.stringify(signupList));
      signupBtn.setAttribute("href", "index.html");
      dontEmpity.classList.replace("d-block", "d-none");
      location.href = "index.html";
    } else if (
      regExFunc(regExPassSignUp, passInputSignUp.value) == false ||
      regExFunc(regExEmailSignUp, emailInputSignUp.value) == false ||
      regExFunc(regExNameSignUp, nameInputSignUp.value) == false
    ) {
      dontEmpity.classList.replace("d-none", "d-block");
      dontEmpity.innerHTML = `Your name 
          or password
          or email is error`;
    }
  
  }
}
