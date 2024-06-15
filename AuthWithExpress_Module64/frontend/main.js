document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const signinForm = document.getElementById('signin-form');

    if (signupForm) {
        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            try {
                const response = await fetch('/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name, email, password, confirmPassword })
                });
                const data = await response.json();
                alert(data.message);
            } catch (err) {
                alert('An error occurred. Please try again.');
            }
        });
    }

    if (signinForm) {
        signinForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            try {
                const response = await fetch('/signin', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password })
                });
                const data = await response.json();
                if (data.success) {
                    localStorage.setItem('user', JSON.stringify(data.data));
                    window.location.href = 'profile.html';
                } else {
                    alert('Signin failed: ' + data.message);
                }
            } catch (err) {
                alert('An error occurred. Please try again.');
            }
        });
    }
});
