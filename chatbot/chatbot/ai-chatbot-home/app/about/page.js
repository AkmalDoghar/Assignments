import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaInfoCircle, FaRocket, FaUsers } from 'react-icons/fa';

export default function About() {
  return (
    <>
      <Navbar />

      {/* Hero Header */}
      <section className="feature-header">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">About Us</h1>
          <p className="lead mt-3">
            Learn more about our AI chatbot and the team behind the innovation.
          </p>
        </div>
      </section>

      {/* Main Content */}
     <section className="about">
  <div className="container">
    <div className="row g-4">
      <div className="col-md-6">
        <div className="about-box  text-center">
          <FaInfoCircle className="about-icon" />
          <h3>What We Do</h3>
          <p>
            Our AI chatbot helps businesses and users communicate more efficiently using advanced AI models.
            We focus on simplicity, power, and smart responses to make every interaction better.
          </p>
        </div>
      </div>
      <div className="col-md-6">
        <div className="about-box text-center">
          <FaRocket className="about-icon" />
          <h3>Our Mission</h3>
          <p>
            Our mission is to revolutionize the way people interact with technology. We believe in fast,
            intelligent, and helpful communication that feels human and intuitive.
          </p>
        </div>
      </div>
      <div className="col-12">
        <div className="about-box text-center mt-4">
          <FaUsers className="about-icon" />
          <h3>Meet the Team</h3>
          <p>We are a passionate team of developers, designers, and AI enthusiasts working to improve digital conversations.</p>
        </div>
      </div>
    </div>
  </div>
</section>


      <Footer />
    </>
  );
}
