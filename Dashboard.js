const token = localStorage.getItem('accessToken');
const logoutBtn = document.getElementById('logoutBtn');
logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('accessToken');
  window.location.href = 'login.html';
});

document.addEventListener('DOMContentLoaded', () => {
    if (!token) {
        window.location.href = 'login.html';
        return;
    }
    else {
        document.querySelector('.dashboard').style.display = 'block';
    }
});