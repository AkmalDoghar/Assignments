import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaComments, FaBolt, FaCode, FaLock } from 'react-icons/fa';

export default function Features() {
  const features = [
    {
      icon: <FaComments />,
      title: 'Smart Conversations',
      desc: 'Understands context and delivers human-like responses.'
    },
    {
      icon: <FaBolt />,
      title: 'Fast & Lightweight',
      desc: 'Built with performance in mind, fast and reliable.'
    },
    {
      icon: <FaCode />,
      title: 'Easy Integration',
      desc: 'Easily integrates into your website or platform.'
    },
    {
      icon: <FaLock />,
      title: 'Secure & Private',
      desc: 'All interactions are secure and encrypted.'
    }
  ];

  return (
    <>
      <Navbar />

      {/* Hero Header */}
      <section className="feature-header">
        <div className="container">
          <h1 className="display-4 fw-bold">Features</h1>
          <p className="lead mt-3">
            Explore the powerful features that make our chatbot smarter and more effective.
          </p>
        </div>
      </section>

      {/* Feature Cards */}
      <section className=" py-5">
        <div className="container">
          <div className="row">
            {features.map((f, i) => (
              <div className="col-md-6 col-lg-3 mb-4" key={i}>
                <div className="card  h-100  text-center  p-3">
                  <div className="fs-1 mb-3">{f.icon}</div>
                  <h5 className="fw-bold">{f.title}</h5>
                  <p className="mt-2">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
