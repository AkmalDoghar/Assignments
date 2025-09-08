import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <section className="text-center py-5">
        <div className="container">
          <h1 className="contact display-4 fw-bold">Contact Us</h1>
          <p className="lead mt-3">We&#39;d love to hear from you. Send us a message below!</p>

        </div>
      </section>

      {/* Contact Form */}
      <section className="  py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form className="form-box ">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Your full name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="you@example.com" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="5" placeholder="Your message here..." required></textarea>
                </div>
                <button type="submit" className="btn btn-light w-100">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
