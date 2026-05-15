const loginForm = document.getElementById('loginForm');
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click', () => {
  const isHidden = passwordInput.type === 'password';
  passwordInput.type = isHidden ? 'text' : 'password';
  togglePassword.textContent = isHidden ? 'Hide' : 'Show';
});

loginForm.addEventListener('submit', event => {
  event.preventDefault();
  const email = loginForm.email.value.trim();
  const password = loginForm.password.value.trim();
  if (!email || !password) {
    return;
  }

  const message = document.createElement('div');
  message.className = 'toast-message';
  message.textContent = `Welcome back, ${email}!`; 
  document.body.appendChild(message);
  setTimeout(() => message.classList.add('visible'), 10);
  setTimeout(() => message.classList.remove('visible'), 2600);
  setTimeout(() => message.remove(), 3000);
});
