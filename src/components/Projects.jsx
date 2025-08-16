import React from 'react';
import { motion } from 'framer-motion';

const Projects = ({ animations }) => {
  const { fadeInUp, staggerContainer } = animations;

  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={{ fadeInUp }}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/ai-saas.png')",
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
          />
          <h3>AI SaaS Platform</h3>
          <p>
            A modern AI SaaS platform that empowers users to harness
            the power of AI. Built with Next.js, Tailwind CSS, and
            Framer Motion, this platform offers a seamless experience
            for AI-powered applications.
          </p>
          <div className="project-tech">
            <span>Next.js</span>
            <span>OpenAi</span>
            <span>TailwindCSS</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/social-media.png')",
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
          />
          <h3>Social Media Dashboard</h3>
          <p>
            A comprehensive social media dashboard that provides
            real-time insights and analytics. Built with Next.js,
            Tailwind CSS, and Framer Motion, this platform offers a
            seamless experience for AI-powered applications.
          </p>
          <div className="project-tech">
            <span>Next.js</span>
            <span>OpenAi</span>
            <span>TailwindCSS</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/stopwatch.png')",
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
          />
          <h3>Productivity Timer</h3>
          <p>
            A modern timer app that helps users manage their time
            efficiently. Built with Next.js, Tailwind CSS, and Framer
            Motion, this platform offers a seamless experience for
            AI-powered applications.
          </p>
          <div className="project-tech">
            <span>Next.js</span>
            <span>OpenAi</span>
            <span>TailwindCSS</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Projects;
