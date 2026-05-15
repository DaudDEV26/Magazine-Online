// src/pages/Login/page.tsx
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

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
    if (!email.trim() || !emailRegex.test(email)) { setEmailError(true); valid = false; }
    if (!password.trim()) { setPasswordError(true); valid = false; }
    if (valid) { alert('Login successful!'); navigate('/dashboard'); }
  }

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-200px)] py-10 px-5 bg-[#f8f9fa] dark:bg-[#0f0f1a] transition-colors duration-300">
      <form
        className="bg-white dark:bg-[#1a1a2e] p-10 rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.12)] w-full max-w-[420px] flex flex-col gap-5 transition-colors duration-300"
        onSubmit={handleSubmit}
      >
        <div className="text-center font-serif text-3xl font-bold text-[#1a1a2e] dark:text-white mb-2">InkWave</div>
        <h2 className="text-center text-lg font-semibold text-[#4a4a6a] dark:text-[#c0c0d0]">Welcome back</h2>

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[#4a4a6a] dark:text-[#c0c0d0]">Email Address</label>
          <input
            type="email"
            className={`px-4 py-3 border rounded-lg text-base outline-none bg-white dark:bg-[#0f0f1a] text-[#1a1a2e] dark:text-white transition-colors duration-200 ${emailError ? 'border-[#e94560]' : 'border-[#e0e0e0] dark:border-[#3a3a5a] focus:border-[#e94560]'}`}
            placeholder="you@example.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          {emailError && <span className="text-[#e94560] text-xs">Please enter a valid email address.</span>}
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-[#4a4a6a] dark:text-[#c0c0d0]">Password</label>
            <a href="#" className="text-xs text-[#e94560] hover:underline">Forgot password?</a>
          </div>
          <div className="relative flex items-center">
            <input
              type={showPassword ? 'text' : 'password'}
              className={`w-full px-4 py-3 border rounded-lg text-base outline-none bg-white dark:bg-[#0f0f1a] text-[#1a1a2e] dark:text-white transition-colors duration-200 ${passwordError ? 'border-[#e94560]' : 'border-[#e0e0e0] dark:border-[#3a3a5a] focus:border-[#e94560]'}`}
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <span className="absolute right-4 cursor-pointer text-[#888888] text-sm select-none" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? 'Hide' : 'Show'}
            </span>
          </div>
          {passwordError && <span className="text-[#e94560] text-xs">Password is required.</span>}
        </div>

        <button type="submit" className="px-6 py-3 rounded-full font-semibold bg-[#e94560] text-white hover:bg-[#d83550] transition-colors duration-200 cursor-pointer">
          Login
        </button>

        <p className="text-center text-sm text-[#888888] dark:text-[#a0a0b8]">
          Don't have an account?{' '}
          <Link to="/register" className="text-[#e94560] font-semibold hover:underline">Register</Link>
        </p>
      </form>
    </div>
  );
}
