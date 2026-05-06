import { motion } from 'framer-motion';
import { Mail, Heart } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <footer id="contact" className="bg-zinc-950 pt-24 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-10">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <a 
            href="mailto:karribhavyasatyasri@gmail.com"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-500/25 mb-16"
          >
            Say Hello <Mail className="ml-2 h-5 w-5" />
          </a>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-20 text-left">
            <motion.a whileHover={{ scale: 1.05, y: -5 }} href="mailto:karribhavyasatyasri@gmail.com" className="p-6 rounded-2xl bg-zinc-900 border border-white/5 hover:border-blue-500/50 transition-colors flex flex-col items-center justify-center text-center group">
              <Mail className="h-8 w-8 mb-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-sm text-gray-400 break-all">karribhavyasatyasri@gmail.com</p>
            </motion.a>
            <motion.a whileHover={{ scale: 1.05, y: -5 }} href="https://github.com/bhavyasatyasri200" target="_blank" rel="noreferrer" className="p-6 rounded-2xl bg-zinc-900 border border-white/5 hover:border-purple-500/50 transition-colors flex flex-col items-center justify-center text-center group">
              <Github className="h-8 w-8 mb-4 text-gray-400 group-hover:text-purple-400 transition-colors" />
              <h3 className="font-semibold mb-1">GitHub</h3>
              <p className="text-sm text-gray-400">View Repositories</p>
            </motion.a>
            <motion.a whileHover={{ scale: 1.05, y: -5 }} href="https://www.linkedin.com/in/bhavya-satya-sri-k-07674a292/" target="_blank" rel="noreferrer" className="p-6 rounded-2xl bg-zinc-900 border border-white/5 hover:border-blue-500/50 transition-colors flex flex-col items-center justify-center text-center group">
              <Linkedin className="h-8 w-8 mb-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
              <h3 className="font-semibold mb-1">LinkedIn</h3>
              <p className="text-sm text-gray-400">Let's Connect</p>
            </motion.a>
          </div>
        </motion.div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Karri Bhavya Satya Sri. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 flex items-center">
            Built from scratch with <Heart className="h-4 w-4 mx-1 text-red-500" /> & React
          </p>
        </div>
      </div>
    </footer>
  );
}
