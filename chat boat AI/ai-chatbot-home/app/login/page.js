'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "@/lib/firebase"; // ✅ Path sahi ho yah check kar lena
import Footer from '../components/Footer';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', email);
      router.push('/');
    } catch (error) {
      setError('Invalid email or password');
      console.error('Login error:', error.message);
    }
  };

  return (
    <>
      <section className="text-center py-5 login-section">
        <div className="container">
          <h1 className="login-title">Login</h1>
          <p className="login-subtitle lead mt-3">Welcome back! Please login to continue.</p>
        </div>
      </section>

      <section className=" text-white py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="form-box p-4">
                <form onSubmit={handleLogin}>
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

                  <button type="submit" className="btn btn-primary w-100 mb-3">Login</button>

                  <div className="text-center">
                    <span>Don't have an account? </span>
                    <a href="/signup" className="text-info">Sign up</a>
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
