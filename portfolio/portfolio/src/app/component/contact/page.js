"use client";
import "./contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="main-text scroll-scale">
        <span>ask me question</span>
        <h2>Contact me</h2>
      </div>

      <form action="#" className="scroll-bottom">
        <input type="text" placeholder="Your name" required />
        <input type="email" placeholder="Your Email" required />
        <input type="text" placeholder="Your Address" />
        <input type="tel" placeholder="Phone Number" />
        <textarea cols="30" rows="10" placeholder="Your Message"></textarea>

        <div className="btn-box formBtn">
          <button type="submit" className="btn"> Message</button>
        </div>
      </form>
    </section>
  );
}
