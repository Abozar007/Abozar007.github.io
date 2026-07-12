import "./Skills.css";

import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaLanguage,
  FaFileWord,
  FaFileExcel,
  FaFilePowerpoint
} from "react-icons/fa";

const skills = [
  {
    icon: <FaHtml5 />,
    title: "HTML5",
    percent: 90,
    color: "#E44D26"
  },
  {
    icon: <FaCss3Alt />,
    title: "CSS3",
    percent: 90 ,
    color: "#264DE4"

  },
  {
    icon: <FaJs />,
    title: "JavaScript",
    percent: 65 ,
    color: "#F7DF1E"
  },
  {
    icon: <FaReact />,
    title: "React",
    percent: 80 ,
    color: "#61DAFB"
  },
  {
    icon: <FaLanguage />,
    title: "English",
    percent: 70 ,
    color: "#22C55E"
  },
  {
    icon: <FaFileWord />,
    title: "Word",
    percent: 90 ,
    color: "#2B579A"
  },
  {
    icon: <FaFileExcel />,
    title: "Excel",
    percent: 80 ,
    color: "#217346"
  },
  {
    icon: <FaFilePowerpoint />,
    title: "PowerPoint",
    percent: 85 ,
    color: "#D24726"
  }
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>مهارت‌های من</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div className="skill-card"  
          initial={{
            opacity:0,
            y:40
            }}
            whileInView={{
            opacity:1,
            y:0
            }}
            transition={{
            delay:index*.12,
            duration:.5
            }}
            viewport={{
            once:true
            }}>
            <div className="skill-top">

              <div className="icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>

              <h3>{skill.title}</h3>
              <span>{skill.percent}%</span>
            </div>

            <div className="progress">
              <div
                className="progress-fill"
                style={{
                  width: `${skill.percent}%`,
                  background: skill.color
                }}
              ></div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Skills;