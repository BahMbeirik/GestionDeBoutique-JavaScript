const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const vide = document.getElementById("login-vide");



// Login
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if ((username === "bahah" && password === "12345678")||(username === "Ethmane" && password === "12345678")) {
        alert("You have successfully logged in.");
        self.location="navbar.html";
    }else if(username === "" || password ===""){
        vide.style.opacity = 1;
        loginErrorMsg.style.display = "none";
        vide.style.display = "block";
    }else{
        loginErrorMsg.style.opacity = 1;
        vide.style.display = "none";
        loginErrorMsg.style.display = "block";
    }
})

