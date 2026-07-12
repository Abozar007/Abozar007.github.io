import "./About.css";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="about">

      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
      >

        <h2>درباره من</h2>

        <p>
          من ابوذر وکیلی، توسعه‌دهنده Front-End هستم و با استفاده از
          HTML، CSS، JavaScript و React رابط‌های کاربری مدرن،
          سریع و ریسپانسیو طراحی می‌کنم.
        </p>

        <div className="features">

          <div>
            <FaCheckCircle />
            طراحی Responsive
          </div>

          <div>
            <FaCheckCircle />
            React Development
          </div>

          <div>
            <FaCheckCircle />
            JavaScript ES6+
          </div>

          <div>
            <FaCheckCircle />
            UI/UX Friendly
          </div>

        </div>

      </motion.div>

      <motion.div
        className="about-cards"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
      >

        <div className="card">
          <h3>2+</h3>
          <span>سال یادگیری</span>
        </div>

        <div className="card">
          <h3>20+</h3>
          <span>پروژه</span>
        </div>

        <div className="card">
          <h3>100%</h3>
          <span>علاقه به برنامه‌نویسی</span>
        </div>

      </motion.div>

    </section>
  );
}

export default About;