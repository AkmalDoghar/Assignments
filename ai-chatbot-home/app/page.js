'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';

export default function Home() {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Ensure code runs on client
    if (typeof window !== 'undefined') {
      const userEmail = localStorage.getItem('userEmail');

      if (!userEmail) {
        router.replace('/login'); // Redirect to login if not logged in
      } else {
        setIsChecking(false); // Stop checking if user is logged in
      }
    }
  }, [router]);

  if (isChecking) {
    return null; // Or show a loader while checking login
  }

  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </>
  );
}
