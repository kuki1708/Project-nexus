// script.js

const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const date = document.querySelector('#date').value;
    const password = document.querySelector('#password').value;
    const confirmPassword = document.querySelector('#confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Send data to server or perform other actions
    console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
});

inputs.forEach((input) => {
    input.addEventListener('focus', () => {
        input.classList.add('focused');
    });

    input.addEventListener('blur', () => {
        input.classList.remove('focused');
    });
});