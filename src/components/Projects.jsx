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
        Featured Projects
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <a
          href="https://github.com/Rajan0828/Unmanned-Amphibious-Robot"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="project-image"
              style={{
                backgroundImage: "url('/projects/UAR.png')",
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            />
            <h3>Unmanned Amphibious Robot</h3>
            <p>
              A Landing Page for my thesis project entitled Unmanned
              Amphibious Robot, a flood-response bi-motor robot that
              exhibits human and human help gesture detection through
              machine learning.
            </p>
            <div className="project-tech">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript</span>
            </div>
          </motion.div>
        </a>

        <a
          href="https://github.com/Rajan0828/CineFind"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="project-image"
              style={{
                backgroundImage: "url('/projects/CineFind.png')",
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            />
            <h3>CineFind</h3>
            <p>
              CineFind is a clean and responsive movie search web app
              that lets users browse and discover films using an
              external API. It includes features for searching,
              viewing basic movie details, and navigating results with
              an intuitive UI. Built with React, it focuses on
              simplicity, real-time search, and an engaging user
              experience.
            </p>
            <div className="project-tech">
              <span>React.js</span>
              <span>Vite</span>
              <span>Javascript</span>
              <span>CSS3</span>
              <span>Appwrite</span>
            </div>
          </motion.div>
        </a>

        <a
          href="https://github.com/Rajan0828/Craft-Connect"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="project-image"
              style={{
                backgroundImage: "url('/projects/Craft Connect.png')",
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            />
            <h3>Craft Connect</h3>
            <p>
              Craft Connect is a freelance web application that
              enables users to easily manage project listings through
              a clean and intuitive interface. It offers full CRUD
              functionality, allowing users to create new freelance
              opportunities, edit existing listings, and delete
              projects as needed. The app is designed to help
              freelancers and clients to find and connect with each
              other.
            </p>
            <div className="project-tech">
              <span>React.js</span>
              <span>Vite</span>
              <span>Javascript</span>
              <span>CSS3</span>
              <span>JSON Server</span>
            </div>
          </motion.div>
        </a>

        <a
          href="https://github.com/Rajan0828/8-By-The-Street-Coffee-Shop"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="project-image"
              style={{
                backgroundImage: "url('/projects/8bts.png')",
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            />
            <h3>8 By The Street Coffee Shop - Landing Page </h3>
            <p>
              A modern and inviting landing webpage designed for 8 By
              The Street Coffee Shop, a real coffee shop located in
              Las Piñas. The page highlights the shop’s cozy
              atmosphere, signature beverages, and location details.
              The goal is to attract local customers by giving them a
              quick, visually appealing overview of what the shop
              offers and how to visit.
            </p>
            <div className="project-tech">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Javascript</span>
            </div>
          </motion.div>
        </a>

        <a
          href="https://github.com/Rajan0828/Note-Lab"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="project-image"
              style={{
                backgroundImage: "url('/projects/Note Lab.png')",
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            />
            <h3>Note Lab</h3>
            <p>
              NoteLab is a lightweight and elegant note-taking web app
              built for quick ideas and focused writing. It allows
              users to create, edit, and delete notes in a clean
              distraction-free interface. Additionally, you can search
              through your notes using the search bar.
            </p>
            <div className="project-tech">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Javascript</span>
            </div>
          </motion.div>
        </a>

        <a
          href="https://github.com/Rajan0828/Subscription-Tracker"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="project-image"
              style={{
                backgroundImage:
                  "url('/projects/Subscription Tracker.png')",
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            />
            <h3>Subscription Tracker</h3>
            <p>
              Subscription Tracker is a simple backend system that
              helps users monitor and manage all of their active
              subscriptions in one place. It allows users to add
              services (like Netflix, Spotify, etc.), set renewal
              dates, and track monthly or yearly costs. This app is
              designed to help people stay on top of their recurring
              expenses and make smarter budgeting decisions.
            </p>
            <div className="project-tech">
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
              <span>JWT</span>
              <span>Arcjet</span>
              <span>bcrypt</span>
              <span>RESTful API</span>
            </div>
          </motion.div>
        </a>
      </motion.div>

      <motion.h2
        style={{ marginTop: '6rem' }}
        variants={{ fadeInUp }}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        Quick Builds
      </motion.h2>

      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <a
          href="https://github.com/Rajan0828/Atmos-Watch"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="project-image"
              style={{
                backgroundImage: "url('/projects/Atmos Watch.png')",
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            />
            <h3>Atmos Watch</h3>
            <p>
              A modern smartwatch-style weather app designed with a
              sleek smartwatch-inspired interface. Provides real-time
              weather updates, forecasts, and alerts in a compact,
              intuitive UI that feels like glancing at your wrist.
              Perfect for users who want quick, stylish, and
              accessible weather information.
            </p>
            <div className="project-tech">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Javascript</span>
              <span>API Integration</span>
            </div>
          </motion.div>
        </a>

        <a
          href="https://github.com/Rajan0828/Rock-Paper-Scissor-Game"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="project-image"
              style={{
                backgroundImage:
                  "url('/projects/Rock-Paper-Scissors Game.png')",
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            />
            <h3>Rock-Paper-Scissors Game</h3>
            <p>
              Retro Rock-Paper-Scissors Game is a fun, neon-inspired
              retro arcade version of the classic Rock-Paper-Scissors
              game. Features multiple game modes (Race to 3, 5, or 7),
              real-time score tracking, and a visually immersive retro
              design with glowing buttons and a retro font. Reset and
              start new games seamlessly while enjoying the
              arcade-style vibes.
            </p>
            <div className="project-tech">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Javascript</span>
            </div>
          </motion.div>
        </a>

        <a
          href="https://github.com/Rajan0828/FocusBurst"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="project-image"
              style={{
                backgroundImage: "url('/projects/Focus Burst.png')",
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            />
            <h3>Focus Burst</h3>
            <p>
              A sleek and intuitive Pomodoro timer designed to boost
              productivity and focus. Features customizable work and
              break intervals, preset timers, and a clean, minimal UI
              that highlights your workflow. Perfect for anyone
              looking to manage time efficiently and stay on task.
            </p>
            <div className="project-tech">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Javascript</span>
            </div>
          </motion.div>
        </a>

        <a
          href="https://github.com/Rajan0828/Wit-Forger"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="project-image"
              style={{
                backgroundImage: "url('/projects/Wit Forger.png')",
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            />
            <h3>Wit Forger </h3>
            <p>
              Wit Forger is a life quotes generator that delivers
              inspiring, thought-provoking, and motivational quotes at
              the click of a button. Discover wisdom from various
              authors and categories to uplift your day or spark
              reflection.
            </p>
            <div className="project-tech">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Javascript</span>
              <span>API Integration</span>
            </div>
          </motion.div>
        </a>

        <a
          href="https://github.com/Rajan0828/Word-Wiz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="project-image"
              style={{
                backgroundImage: "url('/projects/Word Wiz.png')",
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            />
            <h3>Word Wiz</h3>
            <p>
              A sleek and modern web dictionary app that lets users
              search for English words and instantly get definitions,
              part of speech, phonetic spelling, syllable count,
              example sentences, and pronunciation audio. Built with
              HTML, CSS, and JavaScript, integrating DictionaryAPI and
              Datamuse API for a complete vocabulary experience.
            </p>
            <div className="project-tech">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Javascript</span>
              <span>API Integration</span>
            </div>
          </motion.div>
        </a>

        <a
          href="https://github.com/Rajan0828/SimpleCalc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="project-image"
              style={{
                backgroundImage: "url('/projects/SimpleCalc.png')",
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            />
            <h3>SimpleCalc</h3>
            <p>
              A straightforward and user-friendly calculator app that
              handles basic arithmetic operations like addition,
              subtraction, multiplication, and division. Designed with
              a clean, minimal interface for quick and easy
              calculations. Perfect for everyday use and learning
              purposes.
            </p>
            <div className="project-tech">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Javascript</span>
            </div>
          </motion.div>
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Projects;
