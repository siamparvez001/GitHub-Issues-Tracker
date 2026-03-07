document.getElementById("login-btn").addEventListener("click", function(){

    // 1. Get the username
    const usernameInput = document.getElementById("input-username")
    const username = usernameInput.value;
    console.log(username);

    // 2. Get ta password
    const passwordInput = document.getElementById("input-password")
    const password = passwordInput.value;
    console.log(password);

    // 3. match username and password
    if(username === "admin" && password === "admin123"){

        // 3-1 true :::>> alert >> homepage
        alert("Login Success");
        window.location.assign("/homepage.html")
    }
    else{

        // 3-2 false :::>> alert >> return
        alert("login failed");
        return;
    }
});