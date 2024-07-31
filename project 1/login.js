// script.js

const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate username and password
    if (username === '' || password === '') {
        alert('Please enter both username and password');
        return;
    }

    // Send a request to the server to authenticate the user
    // Replace this with your own authentication logic
    console.log(`Username: ${username}, Password: ${password}`);

    // If authentication is successful, redirect to the dashboard page
    // Replace this with your own redirect logic
    window.location.href = 'dashboard.html';
});