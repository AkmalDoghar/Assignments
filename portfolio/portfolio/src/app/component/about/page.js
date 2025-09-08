"use client";
import Image from "next/image";
import "./about.css"; // CSS ko alag file me rakha hai

export default function About() {
  return (
    <section id="about" className="about">
      {/* Left Side Image with blobs */}
      <div className="img-about scroll-scale">
        <Image
          src="/Akmal 2.png" // public folder ke andar image rakho
          alt="About Me"
          width={350}
          height={350}
          priority
        />
        <div className="info-about-1">
          <span>5+</span>
          <p>Years of Experience</p>
        </div>
        <div className="info-about2">
          <span>50+</span>
          <p>Projects Complete</p>
        </div>
        <div className="info-about3">
          <span>150+</span>
          <p>Happy Clients</p>
        </div>
      </div>

      {/* Right Side Content */}
      <div className="about-content scroll-scale">
        <span>Let me introduce myself</span>
        <h2>About Me</h2>
        <h3>A story of good</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          consequuntur vel incidunt culpa provident perspiciatis labore soluta
          laborum aperiam voluptas odio molestias exercitationem odit, rerum hic
          eius dignissimos! Omnis, totam!
        </p>

        <div className="btn-box">
          <a href="#" className="btn">
            Read More!
          </a>
        </div>
      </div>
    </section>
  );
}
