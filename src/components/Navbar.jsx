import { motion, stagger } from 'framer-motion';

const Navbar = ({ animations }) => {
  const { fadeInUp, staggerContainer } = animations;
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 2, ease: 'easeOut' }}
    >
      <motion.div
        className="logo"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Portfolio
      </motion.div>

      <motion.ul
        className="nav-links"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.li
          variants={fadeInUp}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#home">Home</a>
        </motion.li>

        <motion.li
          variants={fadeInUp}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#projects">Projects</a>
        </motion.li>

        <motion.li
          variants={fadeInUp}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#contact">Contact</a>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
};

export default Navbar;
