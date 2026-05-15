import React, { useState } from 'react';
import Toast from './Toast';
import '../styles/login-form.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      return;
    }

    setToastMessage(`Welcome back, ${email}!`);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);

    // Reset form
    setEmail('');
    setPassword('');
    setRemember(false);
  };

  return (
    <>
      <div className="glass-card">
        <div className="brand-bar">
          <div className="brand-logo">L</div>
          <div>
            <h1>Logij</h1>
            <p>Secure access with style</p>
          </div>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="password-field">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Toggle password visibility"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <div className="actions-row">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              Remember me
            </label>
            <a href="#forgot" className="link">
              Forgot?
            </a>
          </div>

          <button type="submit" className="button primary">
            Sign In
          </button>

          <div className="divider">OR</div>

          <button type="button" className="button secondary">
            Continue with Google
          </button>
        </form>

        <p className="signup-text">
          New here? <a href="#signup">Create an account</a>
        </p>
      </div>

      <Toast show={showToast} message={toastMessage} />
    </>
  );
}

export default LoginForm;
