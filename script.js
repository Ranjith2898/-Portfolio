function sayHello() {
    const name = document.getElementById("name").value;
    if (name) {
        alert(`Hello, ${name}! Thank you for visiting my profile.`);
    } else {
        alert("Please enter your name first.");
    }
}
