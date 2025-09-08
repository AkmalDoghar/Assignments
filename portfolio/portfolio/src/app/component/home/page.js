"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./home.css";

export default function HomeSection() {
    const words = ["Web Developer", "Frontend Developer", "Mobile App Developer"];
    const [currentWord, setCurrentWord] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const current = words[wordIndex];
        let typingSpeed = isDeleting ? 80 : 120;

        const type = setTimeout(() => {
            if (!isDeleting && charIndex < current.length) {
                // Type karna
                setCurrentWord(current.substring(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            } else if (isDeleting && charIndex > 0) {
                // Delete karna
                setCurrentWord(current.substring(0, charIndex - 1));
                setCharIndex(charIndex - 1);
            } else if (!isDeleting && charIndex === current.length) {
                // Thoda ruk kar delete start karo
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && charIndex === 0) {
                // Agle word pe move
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % words.length);
            }
        }, typingSpeed);

        return () => clearTimeout(type);
    }, [charIndex, isDeleting, wordIndex, words]);

    return (
        <section id="home" className="home">
            <div className="home-content scroll-scale">
                <h1>Hi! I'm <span>M.Akmal</span></h1>

                <div className="change-text">
                    <h3>
                        And I'm <span className="typing">{currentWord}|</span>
                    </h3>
                </div>

                <p>
                    I'm a Frontend Developer. I'll help you to build beautiful websites with great user experiences.
                </p>

                <div className="info-box">
                    <div className="email-info">
                        <h5>Email :</h5>
                        <span>84pakarmy@gmail.com</span>
                    </div>
                    <div className="behance-info">
                        <h5>Behance :</h5>
                        <span>behance.net/Akmal</span>
                    </div>
                </div>

                <div className="btn-box">
                    <a href="#" className="btn1">Download CV</a>
                    <a href="#" className="btn2">Hire Me </a>
                </div>

                <div className="social-icon">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                    <a href="https://github.com/AkmalDoghar" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/muhammad-akmal-1549522ab/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="https://www.instagram.com/muhammadakmal1225/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                </div>
            </div>

            <div className="home-image scroll-scale">
                <div className="img-box">
                    <Image
                        src="/Akmal 1.png"
                        alt="Akmal"
                        width={600}  // zyada width
                        height={900} // proportional height
                        className="home-image"
                    />
                </div>


                {/* Liquid Shape 1 */}
                <div className="liquid-shape">
                    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="100%" id="blobSvg">
                        <path fill="#12f7ff">
                            <animate attributeName="d" dur="20000ms" repeatCount="indefinite" values="
                M425.5,302Q430,354,398,402.5Q366,451,308,446Q250,441,204.5,424.5Q159,408,110,383.5Q61,359,54,304.5Q47,250,79.5,210Q112,170,140,139Q168,108,209,78.5Q250,49,288.5,83Q327,117,381.5,130Q436,143,428.5,196.5Q421,250,425.5,302Z;
                M425.5,299.5Q421,349,379.5,375.5Q338,402,294,425.5Q250,449,210,419Q170,389,123,369.5Q76,350,46,300Q16,250,53.5,204Q91,158,120.5,117.5Q150,77,200,40Q250,3,304.5,31.5Q359,60,394.5,103Q430,146,430,198Q430,250,425.5,299.5Z;
                M445.5,302Q430,354,386.5,382Q343,410,296.5,451.5Q250,493,194.5,467.5Q139,442,115.5,391.5Q92,341,72.5,295.5Q53,250,80,209Q107,168,134.5,132.5Q162,97,206,69Q250,41,303,53.5Q356,66,380.5,113Q405,160,433,205Q461,250,445.5,302Z;
                M407.5,295.5Q408,341,386,394Q364,447,307,440.5Q250,434,205,420Q160,406,124,374.5Q88,343,90,296.5Q92,250,67,190Q42,130,94.5,100.5Q147,71,198.5,76.5Q250,82,309,64Q368,46,408.5,90.5Q449,135,428,192.5Q407,250,407.5,295.5Z;
                M460,301Q426,352,393.5,397Q361,442,305.5,453Q250,464,204,436.5Q158,409,108,385Q58,361,38.5,305.5Q19,250,64,209.5Q109,169,140,141.5Q171,114,210.5,82Q250,50,290,80.5Q330,111,389.5,123Q449,135,471.5,192.5Q494,250,460,301Z;
                M441,298Q416,346,390.5,397.5Q365,449,307.5,468.5Q250,488,206.5,444.5Q163,401,99,387.5Q35,374,50.5,312Q66,250,88.5,210Q111,170,123.5,111Q136,52,193,46Q250,40,312,37Q374,34,384,100.5Q394,167,430,208.5Q466,250,441,298Z;
                M425.5,302Q430,354,398,402.5Q366,451,308,446Q250,441,204.5,424.5Q159,408,110,383.5Q61,359,54,304.5Q47,250,79.5,210Q112,170,140,139Q168,108,209,78.5Q250,49,288.5,83Q327,117,381.5,130Q436,143,428.5,196.5Q421,250,425.5,302Z;">
                            </animate>
                        </path>
                    </svg>
                </div>

                {/* Liquid Shape 2 (duplicate for effect) */}
                <div className="liquid-shape">
                    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="100%" id="blobSvg">
                        <path fill="#12f7ff">
                            <animate attributeName="d" dur="20000ms" repeatCount="indefinite" values="
                M425.5,302Q430,354,398,402.5Q366,451,308,446Q250,441,204.5,424.5Q159,408,110,383.5Q61,359,54,304.5Q47,250,79.5,210Q112,170,140,139Q168,108,209,78.5Q250,49,288.5,83Q327,117,381.5,130Q436,143,428.5,196.5Q421,250,425.5,302Z;
                M425.5,299.5Q421,349,379.5,375.5Q338,402,294,425.5Q250,449,210,419Q170,389,123,369.5Q76,350,46,300Q16,250,53.5,204Q91,158,120.5,117.5Q150,77,200,40Q250,3,304.5,31.5Q359,60,394.5,103Q430,146,430,198Q430,250,425.5,299.5Z;
                M445.5,302Q430,354,386.5,382Q343,410,296.5,451.5Q250,493,194.5,467.5Q139,442,115.5,391.5Q92,341,72.5,295.5Q53,250,80,209Q107,168,134.5,132.5Q162,97,206,69Q250,41,303,53.5Q356,66,380.5,113Q405,160,433,205Q461,250,445.5,302Z;
                M407.5,295.5Q408,341,386,394Q364,447,307,440.5Q250,434,205,420Q160,406,124,374.5Q88,343,90,296.5Q92,250,67,190Q42,130,94.5,100.5Q147,71,198.5,76.5Q250,82,309,64Q368,46,408.5,90.5Q449,135,428,192.5Q407,250,407.5,295.5Z;
                M460,301Q426,352,393.5,397Q361,442,305.5,453Q250,464,204,436.5Q158,409,108,385Q58,361,38.5,305.5Q19,250,64,209.5Q109,169,140,141.5Q171,114,210.5,82Q250,50,290,80.5Q330,111,389.5,123Q449,135,471.5,192.5Q494,250,460,301Z;
                M441,298Q416,346,390.5,397.5Q365,449,307.5,468.5Q250,488,206.5,444.5Q163,401,99,387.5Q35,374,50.5,312Q66,250,88.5,210Q111,170,123.5,111Q136,52,193,46Q250,40,312,37Q374,34,384,100.5Q394,167,430,208.5Q466,250,441,298Z;
                M425.5,302Q430,354,398,402.5Q366,451,308,446Q250,441,204.5,424.5Q159,408,110,383.5Q61,359,54,304.5Q47,250,79.5,210Q112,170,140,139Q168,108,209,78.5Q250,49,288.5,83Q327,117,381.5,130Q436,143,428.5,196.5Q421,250,425.5,302Z;">
                            </animate>
                        </path>
                    </svg>
                </div>
            </div>
        </section>
    );
}
