import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let valid = true;

    setEmailError(false);
    setPasswordError(false);

    if (!email.trim() || !emailRegex.test(email)) {
      setEmailError(true);
      valid = false;
    }
    if (!password.trim()) {
      setPasswordError(true);
      valid = false;
    }
    if (valid) {
      alert('Login successful!');
      navigate('/dashboard');
    }
  }

  return (
    <div className="login-wrapper">
      <form className="login-card" onSubmit={handleSubmit}>
        <div className="login-logo">InkWave</div>

        <div className="form-group">
          <input
            type="email"
            className={`form-input${emailError ? ' error' : ''}`}
            placeholder="Email Address"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          {emailError && <span className="error-msg show">Please enter a valid email address.</span>}
        </div>

        <div className="form-group">
          <div className="input-icon-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              className={`form-input${passwordError ? ' error' : ''}`}
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <span className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? 'Hide' : 'Show'}
            </span>
          </div>
          {passwordError && <span className="error-msg show">Password is required.</span>}
        </div>

        <button type="submit" className="btn-primary">Login</button>

        <div className="text-center">
          <span className="card-excerpt">Don't have an account? <a href="#" className="btn-tag">Register</a></span>
        </div>
      </form>
    </div>
  );
}
