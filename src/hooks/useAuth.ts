import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const uri = import.meta.env.VITE_API_URL;

interface LoginPayload {
  email: string;
  password: string;
}

interface SignupPayload {
  name: string;
  email: string;
  password: string;
}

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigator = useNavigate()

  const login = async (payload: LoginPayload) => {
    try {
      setLoading(true);
      setError(null);
      const res = await axios.post(uri + '/auth/signin', payload);
      localStorage.setItem('token', res.data.data.token);
      console.log('Login successful:', res.data.data.token);
      navigator('/')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error('Login error:', err.response?.data?.message || err.message);
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const signup = async (payload: SignupPayload) => {
    try {
      setLoading(true);
      setError(null);
      await axios.post(uri + '/auth/signup', payload);
    //   localStorage.setItem('token', res.data.token);
      console.log('Signup successful',);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error('Signup error:', err.response?.data?.message || err.message);
      setError(err.response?.data?.message || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    console.log('Logged out');
    navigator('/auth')
    // Add redirect or cleanup logic if needed
  };

  return {
    login,
    signup,
    logout,
    loading,
    error,
  };
};
