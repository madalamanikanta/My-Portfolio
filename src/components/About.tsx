import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <motion.section
      ref={ref}
      id="about"
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'linear-gradient(45deg, #f3f4f6 0%, #ffffff 100%)',
            'linear-gradient(45deg, #ffffff 0%, #f3f4f6 100%)'
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
      />
      <div className="container mx-auto px-4 relative">
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <motion.div
            variants={itemVariants}
            className="w-full md:w-1/3 flex justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="w-64 h-64 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
                <svg className="w-32 h-32 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="w-full md:w-2/3 backdrop-blur-sm bg-white/50 p-8 rounded-2xl shadow-lg"
          >
            <motion.h3
              variants={itemVariants}
              className="text-3xl font-semibold mb-6 text-gray-800"
            >
              Hello, I'm Madala Manikanta , 
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className="text-gray-700 mb-6 leading-relaxed text-lg"
            >
              I'm a passionate web developer with expertise in building modern, responsive web applications. 
              I specialize in front-end technologies like React, TypeScript, and Tailwind CSS, as well as 
              back-end technologies like Node.js and Express.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-gray-700 mb-6 leading-relaxed text-lg"
            >
              With a strong foundation in computer science and a keen eye for design, I create seamless 
              user experiences that are both functional and visually appealing. I'm constantly learning 
              and exploring new technologies to stay at the forefront of web development.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex gap-6 mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                Download CV
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
              >
                My Skills
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;