document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        document.getElementById('user-name').textContent = user.name;
        document.getElementById('user-email').textContent = user.email;
    } else {
        // Redirect to signin page if no user data found
        window.location.href = 'signin.html';
    }
});
