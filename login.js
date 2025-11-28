function login() {
    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;

    if (user === localStorage.getItem("user") &&
        pass === localStorage.getItem("pass")) {

        alert("Login successful!");
        window.location = "index.html";

    } else {
        alert("Wrong info!");
    }
}