"use client";

import { useEffect } from "react";
import "./skills.css";

export default function Skills() {
    useEffect(() => {
        const circles = document.querySelectorAll(".circle");
        circles.forEach((elem) => {
            const dots = parseInt(elem.getAttribute("date-dots"), 10);
            const marked = parseInt(elem.getAttribute("date-percent"), 10);
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
        <section id="skills" className="skills">
            <div className="main-text scroll-scale">
                <span>technical and professional</span>
                <h2>My Skills</h2>
            </div>

            <div className="skill-main">
                {/* Left Side */}
                <div className="skill-left scroll-scale">
                    <h3>Technical Skills</h3>

                    <div className="bar-box">
                        <div className="skill-bar">
                        <div className="info">
                            <p>HTML</p>
                            <p>90%</p>
                        </div>
                        <div className="bar">
                            <span className="html"></span>
                        </div>
                    </div>

                    <div className="skill-bar">
                        <div className="info">
                            <p>CSS</p>
                            <p>84%</p>
                        </div>
                        <div className="bar">
                            <span className="css"></span>
                        </div>
                    </div>

                    <div className="skill-bar">
                        <div className="info">
                            <p>JavaScript</p>
                            <p>69%</p>
                        </div>
                        <div className="bar">
                            <span className="javascript"></span>
                        </div>
                    </div>

                    <div className="skill-bar">
                        <div className="info">
                            <p>React JS</p>
                            <p>64%</p>
                        </div>
                        <div className="bar">
                            <span className="reactjs"></span>
                        </div>
                    </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="skill-right scroll-scale">
                    <h3>Professional Skills</h3>
                    <div className="professional">
                        <div className="box">
                            <div className="circle" date-dots="80" date-percent="90"></div>
                            <div className="text">
                                <big>90%</big>
                                <small>Team Work</small>
                            </div>
                        </div>

                        <div className="box">
                            <div className="circle" date-dots="80" date-percent="65"></div>
                            <div className="text">
                                <big>65%</big>
                                <small>Project Management</small>
                            </div>
                        </div>

                        <div className="box">
                            <div className="circle" date-dots="80" date-percent="80"></div>
                            <div className="text">
                                <big>80%</big>
                                <small>Creativity</small>
                            </div>
                        </div>

                        <div className="box">
                            <div className="circle" date-dots="80" date-percent="70"></div>
                            <div className="text">
                                <big>70%</big>
                                <small>Communication</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
