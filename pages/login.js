import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Use NextAuth.js credentials provider to sign in
    const result = await signIn('credentials', {
      redirect: false, // Prevent redirecting immediately
      email,
      password,
    });

    if (result.error) {
      // Handle login errors
      setError(result.error);
    } else {
      // On success, redirect to the appropriate dashboard
      // Note: This example uses a simple role check,
      // you would get the user's role from the session after a successful sign-in
      const userRole = 'athlete'; // Placeholder for role from authentication
      
      switch (userRole) {
        case 'athlete':
          router.push('/dashboard/athlete');
          break;
        case 'coach':
          router.push('/dashboard/coach');
          break;
        case 'admin':
          router.push('/dashboard/admin');
          break;
        default:
          router.push('/'); // Fallback to homepage
          break;
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-gray-900">Sign in to your account</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="w-full button-primary">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
