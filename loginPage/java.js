


document.getElementById("login-form").addEventListener("submit", function (e) {

    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Add your authentication logic here
    // For a simple example, you can check if username and password match some predefined values

    if (username === "abhi.21" && password === "4321") {
        alert("Login successful!");
        // You can redirect to another page here or perform other actions
    } else {
        alert("Login failed. Please check your username and password.");
    }
});
