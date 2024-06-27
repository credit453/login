document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Here you would integrate with a third-party email service or backend to handle the registration
    console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
    alert('Registration successful!');

    // Redirect to login page
    window.location.href = 'login.html';
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Here you would integrate with a third-party email service or backend to handle the login
    console.log(`Email: ${email}, Password: ${password}`);
    alert('Login successful!');
});
