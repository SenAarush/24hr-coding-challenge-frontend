import React, { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';

interface AuthPageProps {
  mode: 'sign in' | 'sign up';
}

interface IUser {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

const AuthPage: React.FC<AuthPageProps> = ({ mode: initialMode }) => {
  const [mode, setMode] = useState<'sign in' | 'sign up'>(initialMode);
  const [data, setData] = useState<IUser>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [localError, setLocalError] = useState<string | null>(null);

  const { login, signup, loading, error } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (mode === 'sign up') {
      if (data.password !== data.confirmPassword) {
        setLocalError('Passwords do not match');
        return;
      }
      setLocalError(null);
      await signup({
        name: data.name,
        email: data.email,
        password: data.password,
      });
    } else {
      setLocalError(null);
      await login({
        email: data.email,
        password: data.password,
      });
    }
  };

  const toggleMode = () => {
    setMode((prev) => (prev === 'sign in' ? 'sign up' : 'sign in'));
    setData({ name: '', email: '', password: '', confirmPassword: '' });
    setLocalError(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-950 to-gray-800 text-white px-4">
      <h1 className="text-4xl font-bold mb-6">Welcome</h1>
      <div className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-gray-900 text-white rounded-md shadow-lg w-full max-w-md p-6 space-y-4 relative">
          <h2 className="text-xl font-semibold mb-5 capitalize">
            {mode === 'sign in' ? 'Sign In' : 'Sign Up'}
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {mode === 'sign up' && (
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={data.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            )}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={data.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={data.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />

            {mode === 'sign up' && (
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={data.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            )}

            {(localError || error) && (
              <p className="text-red-500 text-sm">{localError || error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-600 hover:bg-purple-700 transition rounded-md py-2 font-semibold capitalize disabled:opacity-50"
            >
              {loading ? 'Please wait...' : mode}
            </button>
          </form>

          <p className="text-center mt-4 text-sm">
            {mode === 'sign in' ? (
              <>
                Don’t have an account?{' '}
                <button onClick={toggleMode} className="text-purple-400">
                  Create one
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button onClick={toggleMode} className="text-purple-400">
                  Login instead
                </button>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
