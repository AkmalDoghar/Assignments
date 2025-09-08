import HomePage from "./component/home/page";
import About from "./component/about/page";
import Services from "./component/services/page";
import Skills from "./component/skills/page";
import Portfolio from "./component/portfolio/page";
import Contact from "./component/contact/page";

export default function Home() {
  return (
    <>
     <section id="home">
        <HomePage />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
