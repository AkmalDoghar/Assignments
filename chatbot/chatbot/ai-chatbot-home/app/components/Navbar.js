'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaBars, FaUser, FaMoon, FaSun } from 'react-icons/fa';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [showProfile, setShowProfile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const storedEmail = localStorage.getItem("userEmail");
    const storedName = localStorage.getItem("userName") || localStorage.getItem("signupName");

    if (storedTheme === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }

    if (storedEmail) {
      setIsLoggedIn(true);
      setUserEmail(storedEmail);
    }
    if (storedName) setUserName(storedName);
  }, []);


  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");

    if (newTheme) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };


  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    localStorage.removeItem('signupName');
    setIsLoggedIn(false);
    setShowProfile(false);
    router.push('/login');
  };

  return (
    <nav className={`navbar navbar-expand-lg px-4 shadow-lg ${darkMode ? 'navbar-dark bg-gradient bg-purple-dark text-white' : 'navbar-light text-dark'}`}>
      <div className="container-fluid">
        <Link href="/" className="navbar-brand fs-4 fw-bold">🤖 AI ChatBot</Link>

        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <FaBars className={`${darkMode ? 'text-white' : 'text-dark'} glow-icon`} />
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            {['features', 'about', 'contact'].map((page) => (
              <li className="nav-item" key={page}>
                <Link href={`/${page}`} className="nav-link text-capitalize">
                  {page}
                </Link>
              </li>
            ))}

            {!isLoggedIn && (
              <li className="nav-item ms-2">
                <Link href="/login" className={`btn btn-${darkMode ? 'light' : 'dark'} fw-semibold`}>
                  Login
                </Link>
              </li>
            )}

            <li className="nav-item ms-3">
              <button className="btn" onClick={toggleTheme}>
                {darkMode ? <FaSun className="text-warning" /> : <FaMoon className="text-dark" />}
              </button>
            </li>

            {isLoggedIn && (
              <li className="nav-item ms-2 position-relative d-inline-block">
                <button
                  className={`btn ${darkMode ? 'custom-dark' : 'custom-light'}`}
                  onClick={() => setShowProfile(prev => !prev)}
                >
                  <FaUser
                    style={{
                      color: darkMode ? '#0dcaf0' : '#00e6c7',
                      marginRight: '8px',
                      fontSize: '20px',
                    }}
                  />

                </button>

                {showProfile && (
                  <div className={`profile-box ${darkMode ? 'dark' : 'light'}`}>
                    <h6 className="mb-3 border-bottom pb-2">
                      <FaUser style={{ color: darkMode ? '#0dcaf0' : '#00e6c7', marginRight: '8px', fontSize: "20px" }} />
                      User Profile
                    </h6>
                    <p className="mb-2"><strong>Email:</strong> {userEmail}</p>
                    <p className="mb-3"><strong>Password:</strong> ******</p>
                    <button
                      className={`btn btn-sm btn-${darkMode ? 'outline-light' : 'outline-danger'} w-100`}
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                )}

              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
