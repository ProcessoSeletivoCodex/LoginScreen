const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username-input');

window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const usernameFromUrl = urlParams.get('username');

    if (usernameFromUrl) {
        usernameInput.value = usernameFromUrl;
    }
});


loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = usernameInput.value;

    if (username.trim() !== '') {
        window.location.href = `welcome.html?username=${encodeURIComponent(username)}`;
    }
});
