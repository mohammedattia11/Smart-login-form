
let nameInput = document.getElementById("nameInput");
let emailInput = document.getElementById("emailInput");
let passInput = document.getElementById("passInput");
let loginBtn = document.getElementById("loginBtn");
let dontEmpity = document.getElementById("dontEmpity");

// Reg EX
let regExName = /^[A-Za-z0-9 ]{3,25}$/;
let regExPass =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
let regExEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function regExFunc(e, ex) {
  if (e.test(ex) == true) {
    return true;
  } else {
    return false;
  }
}






if (loginBtn == null) {

}else {

    loginBtn.addEventListener("click" , loginFunc);

function loginFunc() {
    
  if (emailInput.value == "" || passInput.value == "") {
    dontEmpity.classList.replace("d-none", "d-block");
    dontEmpity.innerHTML = "All inputs is required";
    return;
  }

  if (signupList.length < 1) {
    dontEmpity.classList.replace("d-none", "d-block");
    dontEmpity.innerHTML = "You Dont Registratiom Yet";
    console.log("You Dont Registratiom Yet");
  } else if (
    regExFunc(regExPass, passInput.value) &&
    regExFunc(regExEmail, emailInput.value)
  ) {
    for (let i = 0; i < signupList.length; i++) {
      if (
        signupList[i].email == emailInput.value &&
        signupList[i].password == passInput.value
      ) {
        dontEmpity.classList.replace("d-block", "d-none");
        location.href = "home.html";
        return ;
      }
    }
    // dontEmpity.classList.replace ("d-none" , "d-block");
    // dontEmpity.innerHTML = "incorrect email or password" ;
    // console.log("password Wrong");
  } else {
    dontEmpity.classList.replace("d-none", "d-block");
    dontEmpity.innerHTML = "incorrect email or password";
  }
}

}



