import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { ArrowRight, Download } from 'lucide-react';
import profileImg from "../image/pic2.jpeg";
import resumePdf from "../image/23P31A0533_Resume.pdf";

export default function Hero() {
  const nameText = "Karri Bhavya Satya Sri";
  
  const lineVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.08, delayChildren: 0.2 } 
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100 } }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <Parallax speed={-10} className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-[128px]" />
        <div className="absolute top-[40%] right-[10%] w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-[128px]" />
      </Parallax>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-4">
              Hi, I'm{' '}
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 inline-block overflow-visible whitespace-nowrap"
                variants={lineVariants}
                initial="hidden"
                animate="visible"
              >
                {nameText.split("").map((letter, index) => (
                  <motion.span key={index} variants={letterVariants} className="inline-block">
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </motion.span>
            </h1>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-2xl sm:text-3xl text-gray-300 font-medium mb-6"
            >
              Full Stack Developer
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 1 }}
              className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Building elegant, efficient, and scalable web applications.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6, type: "spring" }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-500/25"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-full text-gray-300 bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                Contact Me
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-full text-blue-300 border border-blue-500/30 bg-blue-900/10 hover:bg-blue-900/30 transition-colors backdrop-blur-sm"
              >
                Resume
                <Download className="ml-2 h-5 w-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, type: "spring", bounce: 0.4 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full p-2 bg-gradient-to-tr from-blue-500 to-purple-500 shadow-[0_0_50px_rgba(59,130,246,0.3)]">
              <div className="w-full h-full bg-zinc-800 rounded-full overflow-hidden border-4 border-zinc-900 flex items-center justify-center relative">
                <motion.img
                  initial={{ scale: 1.3, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                  src={profileImg}
                  alt="profile"
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Subtle slow spinning glowing ring on top of image */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-t-2 border-r-2 border-transparent border-t-blue-400 border-r-purple-400 opacity-50 mix-blend-screen"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
