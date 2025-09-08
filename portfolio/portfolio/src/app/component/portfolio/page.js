"use client";

import { useState, useEffect } from "react";
import { FiExternalLink } from "react-icons/fi";
import "./portfolio.css";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState([]);

  const projects = [
    { id: 1, category: "product", img: "/images/image1.jpeg", title: "Web Developer" },
    { id: 2, category: "inter", img: "/images/image3.jpeg", title: "Web Developer" },
    { id: 3, category: "inter", img: "/images/image2.jpeg", title: "Web Developer" },
    { id: 4, category: "inter", img: "/images/image6.jpeg", title: "Web Developer" },
    { id: 5, category: "product", img: "/images/image5.jpeg", title: "Web Developer" },
    { id: 6, category: "web", img: "/images/image4.jpeg", title: "Web Developer" },
  ];

  // Filter ke baad state update
  useEffect(() => {
    const results =
      activeFilter === "all"
        ? projects
        : projects.filter((p) => p.category === activeFilter);

    // thoda delay taake animation trigger ho
    setFilteredProjects([]);
    setTimeout(() => setFilteredProjects(results), 100);
  }, [activeFilter]);

  return (
    <section id="portfolio" className="portfolio">
      <div className="main-text scroll-scale">
        <span>What I will do for you</span>
        <h2>Latest Projects</h2>
      </div>

      <div className="container">
        {/* Filter Buttons */}
        <div className="fillter-buttons scroll-scale">
          {["all", "product", "inter", "web"].map((filter) => (
            <button
              key={filter}
              className={`button ${activeFilter === filter ? "active" : ""}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter === "all" && "All"}
              {filter === "product" && "Product"}
              {filter === "inter" && "Interacting"}
              {filter === "web" && "Web App"}
            </button>
          ))}
        </div>

        {/* Portfolio Gallery */}
        <div className="portfolio-gallery scroll-bottom">
          {filteredProjects.map((project) => (
            <div key={project.id} className="port-box show">
              <div className="port-image">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="port-content">
                <h3>{project.title}</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum blanditiis fugit quia culpa.
                </p>
                <a href="#">
                  <FiExternalLink />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
