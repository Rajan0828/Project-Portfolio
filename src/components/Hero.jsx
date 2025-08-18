import { motion } from 'framer-motion';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const codeString = `const profile = {
  name: "Rajan Mole Macaraig",
  role: "Web Developer",
  location: "Philippines",
  skills: [
    "React.js",
    "Tailwind CSS",
    "JavaScript (ES6+)",
    "Framer Motion",
    "HTML5",
    "CSS3"
  ],
  projects: [
    {
      name: "Portfolio Website",
      stack: ["React", "Tailwind", "Framer Motion"],
      description: "Personal portfolio showcasing projects and skills."
    },
    {
      name: "UI Animations",
      stack: ["Framer Motion", "CSS"],
      description: "Smooth animated components and transitions."
    }
  ],
  contact: {
    email: "your.email@example.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername"
  }
};

export default profile;
`;

const Hero = ({ animations }) => {
  const { fadeInUp, staggerContainer } = animations;

  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="hero-badge">
            <span>🤝 Greetings, I'm</span>
          </motion.div>
          <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            Rajan Macaraig
          </motion.h1>
          <motion.h2 className="hero-subtitle" variants={fadeInUp}>
            Creative Frontend Web Developer
          </motion.h2>

          <motion.p className="hero-description" variants={fadeInUp}>
            I’m a licensed Electronics and Communications Engineer
            based in Manila, Philippines, eager to build a strong
            career in web development. I specialize in frontend
            development, passionate about creating responsive,
            efficient, and user-friendly web applications. I thrive on
            learning new technologies and expanding my skills across
            modern web development stacks, bringing both technical
            rigor and creativity to every project.
          </motion.p>

          <motion.div
            className="cta-buttons"
            variants={staggerContainer}
          >
            <motion.a
              href="#projects"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>

            <motion.a
              href="#contact"
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
          <motion.div
            className="social-links"
            variants={staggerContainer}
          >
            <motion.a
              href="https://github.com/Rajan0828"
              target="__blank"
            >
              <i className="fab fa-github"></i>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/rajan-mole-macaraig-05541a37b/"
              target="__blank"
            >
              <i className="fab fa-linkedin"></i>
            </motion.a>
            <motion.a
              href="https://www.facebook.com/rajanmole15/"
              target="__blank"
            >
              <i className="fab fa-facebook"></i>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="code-display">
            <SyntaxHighlighter
              customStyle={{
                margin: 0,
                padding: '2rem',
                height: '100%',
                borderRadius: '20px',
                background: 'rgba(30,41,59,0.8)',
                backdropFilter: 'blur(10px)',
                marginBottom: 50,
              }}
              language="typescript"
              style={vscDarkPlus}
            >
              {codeString}
            </SyntaxHighlighter>
          </div>

          <motion.div
            className="floating-card"
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="card-content">
              <span className="card-icon">💻</span>
              <span className="card-text">
                Currently working on something...
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
