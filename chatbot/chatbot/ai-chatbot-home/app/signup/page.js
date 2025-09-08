'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import Footer from '../components/Footer';

export default function Signup() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert('Please fill in all fields');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      // Save to localStorage
      localStorage.setItem('userName', name);
      localStorage.setItem('userEmail', email);
      localStorage.setItem('isLoggedIn', 'true');

      alert('Account created successfully!');
      router.push('/login');
    } catch (error) {
      setError(error.message);
      console.error('Signup error:', error.message);
    }
  };

  return (
    <>
      <section className="text-center py-5 login-section">
        <div className="container">
          <h1 className="login-title">Signup</h1>
          <p className="login-subtitle lead mt-3">Create your account to get started.</p>
        </div>
      </section>

      <section className=" text-white py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="form-box p-4">
                <form onSubmit={handleSubmit}>
                  {/* Full Name */}
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  {/* Password */}
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  {error && <div className="alert alert-danger">{error}</div>}

                  {/* Submit */}
                  <button type="submit" className="btn btn-primary w-100 mb-3">Signup</button>

                  <div className="text-center">
                    <span>Already have an account? </span>
                    <a href="/login" className="text-info">Login</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
