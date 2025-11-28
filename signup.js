function signup() {
    let user = document.getElementById("newUser").value;
    let pass = document.getElementById("newPass").value;
    localStorage.setItem("user", user);
    localStorage.setItem("pass", pass);
    alert("Account created!");
    window.location = "login.html";
}