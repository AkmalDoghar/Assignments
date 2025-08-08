// components/HeroSection.jsx
import { useRouter } from 'next/navigation';

export default function HeroSection() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/chat'); // new chat agent page
  };
  return (
    <section className="hero-section text-white d-flex align-items-center" style={{ background: 'linear-gradient(to right, #43b5b9, #030a0aff)' }}>
      <div className="container text-center py-5">
        <h1 className="display-3 fw-bold mb-3">AI ChatBot</h1>
        <p className="lead mb-4">Revolutionize your customer service with smart conversations.</p>
        <button onClick={handleClick} className="btn btn-lg btn-outline-light px-4 glow-btn">Get Started</button>
      </div>
    </section>
  );
}
