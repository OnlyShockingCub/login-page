// Login functionality
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === localStorage.getItem('username') && password === localStorage.getItem('password')) {
        localStorage.setItem('isLoggedIn', true);
        window.location.href = 'dashboard.html'; // Redirect to dashboard after successful login
    } else {
        alert('Invalid username or password');
    }
});

// Sign-up functionality
document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;

    localStorage.setItem('username', newUsername);
    localStorage.setItem('password', newPassword);
    alert('Sign up successful! You can now log in.');
    window.location.href = 'login.html'; // Redirect to login page after sign-up
});

// Check if the user is logged in on the dashboard page
if (!localStorage.getItem('isLoggedIn')) {
    window.location.href = 'login.html'; // Redirect to login page if not logged in
}

// Log out functionality on dashboard
document.getElementById('logout-button').addEventListener('click', function () {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'login.html'; // Redirect to login page after logout
});
