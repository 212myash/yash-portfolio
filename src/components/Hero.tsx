import { useEffect, useRef } from "react";
import gsap from "gsap";
import Character2D from "./Character2D";

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();

      timeline
        .from(".hero-small", {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        .from(
          ".hero h1",
          {
            y: 80,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.4"
        )
        .from(
          ".hero h2",
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          ".hero-description",
          {
            y: 25,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".hero-buttons",
          {
            y: 25,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".scroll-indicator",
          {
            opacity: 0,
            duration: 0.8,
          },
          "-=0.2"
        );

      gsap.to(".glow-one", {
        x: 40,
        y: -30,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".glow-two", {
        x: -30,
        y: 30,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      
      {/* LEFT CONTENT */}
      <div className="hero-content">
        <p className="hero-small">HELLO, I'M</p>

        <h1>
          Yash <span>Raj</span>
        </h1>

        <h2>Computer Science Engineer & Developer</h2>

        <p className="hero-description">
          I build modern websites, applications and digital experiences
          with clean code, creative ideas and a passion for technology.
        </p>

        <div className="hero-buttons">

  <a
    href="#projects"
    className="hero-btn hero-work"
  >
    View My Work
  </a>

  <a
    href="/resume.pdf"
    className="hero-btn hero-resume"
    target="_blank"
    rel="noopener noreferrer"
  >
    Download Resume
  </a>

  <a
    href="#contact"
    className="hero-btn hero-contact"
  >
    Contact Me
  </a>

</div>
      </div>

      {/* 2D CHARACTER */}
      <Character2D />

      {/* BACKGROUND GLOWS */}
      <div className="hero-glow glow-one"></div>

      <div className="hero-glow glow-two"></div>

      {/* SCROLL INDICATOR */}
      <div className="scroll-indicator">
        <span></span>
        Scroll Down
      </div>

    </section>
  );
};

export default Hero;