import "./Hero.css";
import { motion } from "framer-motion";


function Hero() {
  return (
    <section id="home" className="hero">

      <motion.div
        className="hero-text"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: .8 }}
      >

        <p className="hello">سلام </p>

        <h1>
           <span>ابوذر وکیلی</span> 
        </h1>
        
        <p className="hello">هستم </p>

        <br />
        <h2>Front-End Developer</h2>


        <div className="buttons">

          <a href="#portfolio">
            مشاهده نمونه کارها
          </a>

          <a href="#contact" className="outline">
            تماس با من
          </a>

        </div>

      </motion.div>

   <motion.div
  className="hero-image"
  initial={{ opacity: 0, scale: .8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
>

  <div className="circle">

    <img
      src={"/me1.jpg"}
      alt="Abozar vakili"
    />

    <span className="tag html">HTML</span>

    <span className="tag css">CSS</span>

    <span className="tag js">JavaScript</span>

    <span className="tag react">React</span>

  </div>

</motion.div>

    </section>
  );
}

export default Hero;