import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML5', level: 90, color: 'bg-orange-500' },
  { name: 'CSS3', level: 85, color: 'bg-blue-500' },
  { name: 'JavaScript', level: 85, color: 'bg-yellow-400' },
  { name: 'React JS', level: 80, color: 'bg-cyan-400' },
  { name: 'Node.js', level: 75, color: 'bg-green-500' },
  { name: 'Express.js', level: 75, color: 'bg-gray-400' },
  { name: 'MongoDB', level: 70, color: 'bg-green-600' },
  { name: 'C', level: 80, color: 'bg-blue-600' },
  { name: 'Java', level: 75, color: 'bg-red-500' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 }
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            Technologies and languages I use to build robust and scalable applications.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-zinc-900 border border-white/5 rounded-2xl p-6 hover:border-blue-500/30 transition-all flex flex-col justify-center items-center group relative overflow-hidden"
            >
              <div className={`absolute -inset-2 opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300 ${skill.color}`} />
              <div className="relative text-center w-full">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">{skill.name}</h3>
                <div className="w-full bg-zinc-800 rounded-full h-2 mb-1 overflow-hidden">
                  <motion.div 
                    className={`h-2 rounded-full ${skill.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
