"use client";
import { useEffect } from "react";
import { FaCode, FaDesktop, FaMobileAlt } from "react-icons/fa"; // yahan icons import kiye
import "./services.css";

export default function Services() {
  useEffect(() => {
    const circles = document.querySelectorAll(".circle");
    circles.forEach((elem) => {
      const dots = parseInt(elem.getAttribute("data-dots"), 10);
      const marked = parseInt(elem.getAttribute("data-percent"), 10);
      const percent = Math.floor((dots * marked) / 100);
      const rotate = 360 / dots;

      let points = "";
      for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
      }
      elem.innerHTML = points;

      const pointsMarked = elem.querySelectorAll(".points");
      for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add("marked");
      }
    });
  }, []);

  return (
    <section id="services" className="services">
      <div className="main-text scroll-scale">
        <span>What I will do for You</span>
        <h2>Our Services</h2>
      </div>

      <div className="section-services scroll-bottom">
        {/* Service 1 */}
        <div className="service-box">
          <div className="servise-icon">
            <FaCode />
          </div>
          <h3>Web Developer</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eum
            tempora enim ratione nam, culpa voluptatibus sed maiores ullam fugit.
          </p>
          <div className="circle" data-dots="100" data-percent="90"></div>
          <div className="btn-box service-btn">
            <a href="#" className="btn">Read more</a>
          </div>
        </div>

        {/* Service 2 */}
        <div className="service-box">
          <div className="servise-icon">
            <FaDesktop />
          </div>
          <h3>Frontend Developer</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eum
            tempora enim ratione nam, culpa voluptatibus sed maiores ullam fugit.
          </p>
          <div className="circle" data-dots="100" data-percent="75"></div>
          <div className="btn-box service-btn">
            <a href="#" className="btn">Read more</a>
          </div>
        </div>

        {/* Service 3 */}
        <div className="service-box">
          <div className="servise-icon">
            <FaMobileAlt />
          </div>
          <h3>Mobile App Developer</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eum
            tempora enim ratione nam, culpa voluptatibus sed maiores ullam fugit.
          </p>
          <div className="circle" data-dots="100" data-percent="60"></div>
          <div className="btn-box scroll-bar">
            <a href="#" className="btn">Read more</a>
          </div>
        </div>
      </div>
    </section>
  );
}
