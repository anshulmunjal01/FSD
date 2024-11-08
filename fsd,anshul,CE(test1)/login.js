function validate() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username !== "admin" || password !== "admin") {
        alert("Invalid username or password.");
        return false;
    }
    else{
        return true;
    }
};
