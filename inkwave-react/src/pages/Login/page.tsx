// inkwave-react/src/pages/Login/page.tsx
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
    <div className="flex justify-center items-center min-h-[calc(100vh-200px)] py-10 px-5 bg-[#f8f9fa]">
      <form
        className="bg-white p-10 rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.08)] w-full max-w-[400px] flex flex-col gap-5"
        onSubmit={handleSubmit}
      >
        {/* Logo */}
        <div className="text-center font-serif text-3xl font-bold text-[#1a1a2e] mb-2">InkWave</div>

        {/* Email field */}
        <div className="flex flex-col gap-1.5 w-full">
          <input
            type="email"
            className={`px-4 py-3 border rounded-lg text-base outline-none transition-colors duration-300 ${
              emailError ? 'border-[#e94560]' : 'border-[#e0e0e0] focus:border-[#1a1a2e]'
            }`}
            placeholder="Email Address"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          {emailError && (
            <span className="text-[#e94560] text-xs">Please enter a valid email address.</span>
          )}
        </div>

        {/* Password field */}
        <div className="flex flex-col gap-1.5 w-full">
          <div className="relative flex items-center">
            <input
              type={showPassword ? 'text' : 'password'}
              className={`w-full px-4 py-3 border rounded-lg text-base outline-none transition-colors duration-300 ${
                passwordError ? 'border-[#e94560]' : 'border-[#e0e0e0] focus:border-[#1a1a2e]'
              }`}
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <span
              className="absolute right-4 cursor-pointer text-[#888888] text-sm select-none"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </span>
          </div>
          {passwordError && (
            <span className="text-[#e94560] text-xs">Password is required.</span>
          )}
        </div>

        <button
          type="submit"
          className="px-6 py-3 rounded-full font-semibold bg-[#e94560] text-white hover:bg-[#d83550] transition-colors duration-300 cursor-pointer"
        >
          Login
        </button>

        <div className="text-center text-sm text-[#888888]">
          Don't have an account?{' '}
          <a href="#" className="bg-[#eef0f5] text-[#4a4a6a] px-3 py-1 rounded-full text-sm font-semibold hover:bg-[#e94560] hover:text-white transition-colors duration-300">
            Register
          </a>
        </div>
      </form>
    </div>
  );
}
