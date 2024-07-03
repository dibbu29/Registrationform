const form = document.getElementById('registration-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    let errors = [];

    if (username.length < 3) {
        errors.push('Username must be at least 3 characters long');
        document.getElementById('username-error').innerHTML = 'Username must be at least 3 characters long';
    }

    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        errors.push('Invalid email address');
        document.getElementById('email-error').innerHTML = 'Invalid email address';
    }

    if (password.length < 8) {
        errors.push('Password must be at least 8 characters long');
        document.getElementById('password-error').innerHTML = 'Password must be at least 8 characters long';
    }

    if (password!== confirmPassword) {
        errors.push('Passwords do not match');
        document.getElementById('confirm-password-error').innerHTML = 'Passwords do not match';
    }

    if (errors.length > 0) {
        console.log(errors);
        return;
    }

    // If no errors, submit the form
    form.submit();
});