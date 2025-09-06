import { motion } from "framer-motion";

//import { styles } from "../styles";
//import { staggerContainer } from "../utils/motion";
import { useTranslation } from "react-i18next";

const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

const SectionWrapper = (Component, idName) =>
  function HOC() {
    useTranslation(); 
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          
        </span>

        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
