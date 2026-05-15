// src/pages/Register/page.tsx
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

interface FormErrors {
  name: boolean;
  email: boolean;
  password: boolean;
  confirm: boolean;
}

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({ name: false, email: false, password: false, confirm: false });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newErrors: FormErrors = {
      name:     !name.trim(),
      email:    !email.trim() || !emailRegex.test(email),
      password: password.length < 6,
      confirm:  confirm !== password || confirm.length === 0,
    };
    setErrors(newErrors);
    if (!newErrors.name && !newErrors.email && !newErrors.password && !newErrors.confirm) {
      alert('Account created successfully!');
      navigate('/login');
    }
  }

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3 border rounded-lg text-base outline-none bg-white dark:bg-[#0f0f1a] text-[#1a1a2e] dark:text-white transition-colors duration-200 ${
      hasError ? 'border-[#e94560]' : 'border-[#e0e0e0] dark:border-[#3a3a5a] focus:border-[#e94560]'
    }`;

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-200px)] py-10 px-5 bg-[#f8f9fa] dark:bg-[#0f0f1a] transition-colors duration-300">
      <form
        className="bg-white dark:bg-[#1a1a2e] p-10 rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.12)] w-full max-w-[440px] flex flex-col gap-5 transition-colors duration-300"
        onSubmit={handleSubmit}
      >
        <div className="text-center font-serif text-3xl font-bold text-[#1a1a2e] dark:text-white mb-2">InkWave</div>
        <h2 className="text-center text-lg font-semibold text-[#4a4a6a] dark:text-[#c0c0d0]">Create your account</h2>

        {/* Full Name */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[#4a4a6a] dark:text-[#c0c0d0]">Full Name</label>
          <input
            type="text"
            className={inputClass(errors.name)}
            placeholder="John Doe"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          {errors.name && <span className="text-[#e94560] text-xs">Name is required.</span>}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[#4a4a6a] dark:text-[#c0c0d0]">Email Address</label>
          <input
            type="email"
            className={inputClass(errors.email)}
            placeholder="you@example.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          {errors.email && <span className="text-[#e94560] text-xs">Please enter a valid email.</span>}
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[#4a4a6a] dark:text-[#c0c0d0]">Password</label>
          <div className="relative flex items-center">
            <input
              type={showPassword ? 'text' : 'password'}
              className={inputClass(errors.password)}
              placeholder="Min. 6 characters"
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
          {errors.password && <span className="text-[#e94560] text-xs">Password must be at least 6 characters.</span>}
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[#4a4a6a] dark:text-[#c0c0d0]">Confirm Password</label>
          <div className="relative flex items-center">
            <input
              type={showConfirm ? 'text' : 'password'}
              className={inputClass(errors.confirm)}
              placeholder="Re-enter your password"
              value={confirm}
              onChange={e => setConfirm(e.target.value)}
            />
            <span
              className="absolute right-4 cursor-pointer text-[#888888] text-sm select-none"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? 'Hide' : 'Show'}
            </span>
          </div>
          {errors.confirm && <span className="text-[#e94560] text-xs">Passwords do not match.</span>}
        </div>

        <button
          type="submit"
          className="px-6 py-3 rounded-full font-semibold bg-[#e94560] text-white hover:bg-[#d83550] transition-colors duration-200 cursor-pointer"
        >
          Create Account
        </button>

        <p className="text-center text-sm text-[#888888] dark:text-[#a0a0b8]">
          Already have an account?{' '}
          <Link to="/login" className="text-[#e94560] font-semibold hover:underline">Login</Link>
        </p>
      </form>
    </div>
  );
}
