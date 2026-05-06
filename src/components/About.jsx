import { motion } from 'framer-motion';
import { GraduationCap, Award, Code2, ExternalLink } from 'lucide-react';

const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Aditya College of Engineering and Technology",
    score: "8.88 CGPA",
    period: "2023 - Present"
  },
  {
    degree: "Intermediate MPC",
    institution: "Aditya Junior College",
    score: "9.76 CGPA",
    period: "2021 - 2023"
  },
  {
    degree: "10th Class",
    institution: "Prasanth English Medium School",
    score: "597 / 600",
    period: "2020-2021"
  }
];

const certifications = [
  { name: "Red Hat Certified System Administrator (RHCSA)", link: "https://drive.google.com/file/d/1SaNyF3nEw-JSVu3yvzNXlNgFipWblQXA/view?usp=sharing" },
  { name: "IT Specialist: HTML & CSS - Certiport", link: "https://drive.google.com/file/d/1RVSc9iWwm0P6lovEAa3eC0fGSt3omFoX/view?usp=sharing" },
  { name: "CLA: Programming Essentials in C - Cisco", link: "https://drive.google.com/file/d/16A7Y1-IyaiKqnIsjxzi8XeRPO4MNQeA2/view?usp=sharing" },
  { name: "JavaScript - Cisco", link: "https://drive.google.com/file/d/1w5i_Td3RqnyAol6MEO3i5kzA0nh-TXYZ/view?usp=sharing" },
  { name: "Java Certificate - Oracle", link: "https://drive.google.com/file/d/13yhP6SO40Aefe-LoKX_0MFw7KaMLsO4W/view?usp=sharing" },
  { name: "SQL (Intermediate) - HackerRank", link: "https://drive.google.com/file/d/1e7GoQnIUHnhqKZfpcGl1rhh0Fg3HgK-d/view?usp=sharing" }
];

const profiles = [
  { name: "LeetCode", description: "Solved 200+ problems", link: "https://leetcode.com/u/satya35/" },
  { name: "GeeksforGeeks", description: "Solved 150+ problems", link: "https://www.geeksforgeeks.org/profile/karribhavyasatyasri" },
  { name: "CodeChef", description: "Solved 350+ problems", link: "https://www.codechef.com/users/bhavya_2006" },
  { name: "HackerRank", description: "Profile", link: "https://www.hackerrank.com/profile/satya2006" }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-zinc-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-zinc-800/50 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                My Story
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Passionate full stack developer with expertise in modern web technologies. I specialize in creating elegant, efficient, and scalable applications. Currently pursuing B.Tech in Computer Science, I combine academic knowledge with hands-on experience to deliver exceptional digital solutions.
              </p>
            </div>

            <div className="bg-zinc-800/50 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Code2 className="mr-2 text-blue-400" /> Coding Profiles
              </h3>
              <div className="space-y-3">
                {profiles.map((profile, i) => (
                  <motion.a
                    whileHover={{ scale: 1.02, x: 5 }}
                    key={i}
                    href={profile.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-between items-center group p-3 bg-zinc-800/80 border border-white/5 hover:border-blue-500/50 hover:bg-zinc-800/100 rounded-xl transition-colors shadow-sm"
                  >
                    <span className="font-medium group-hover:text-blue-400 transition-colors flex items-center gap-2">
                      {profile.name}
                      <ExternalLink className="w-3 h-3 opacity-30 group-hover:opacity-100 text-blue-400 transition-opacity" />
                    </span>
                    <span className="text-sm text-gray-400">{profile.description}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
            >
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <GraduationCap className="mr-2 text-purple-400" /> Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, i) => (
                  <div key={i} className="relative pl-6 border-l-2 border-zinc-700">
                    <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[7px] top-2 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                      <h4 className="text-lg font-medium">{edu.degree}</h4>
                      <span className="text-sm text-purple-400 font-mono mt-1 sm:mt-0">{edu.period}</span>
                    </div>
                    <p className="text-gray-400">{edu.institution}</p>
                    <p className="text-sm text-blue-300 mt-1 font-medium">Score: {edu.score}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="pt-4"
            >
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Award className="mr-2 text-blue-400" /> Certifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert, i) => (
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    key={i}
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 bg-zinc-800/80 border border-purple-500/10 rounded-xl hover:border-purple-500/60 hover:bg-zinc-800 transition-all group shadow-sm flex flex-col justify-between"
                  >
                    <p className="text-sm font-medium text-gray-300 group-hover:text-purple-300 transition-colors">
                      {cert.name}
                    </p>
                    <div className="mt-5 flex items-center text-xs text-purple-400/50 group-hover:text-purple-400 font-semibold tracking-wide uppercase">
                      View Certificate <ExternalLink className="w-3 h-3 ml-1.5" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
