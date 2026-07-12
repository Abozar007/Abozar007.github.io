import { useState } from "react";
import {FaBars, FaTimes, FaCode} from "react-icons/fa";

import "./Navbar.css";

function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <header className="navbar">

      <div className="logo">
        <FaCode />
        <span>Abozar vakili</span>
      </div>

      <nav className={menu ? "nav active" : "nav"}>

        <a href="#home" onClick={() => setMenu(false)}>خانه</a>

        <a href="#about" onClick={() => setMenu(false)}>درباره من</a>

        <a href="#skills" onClick={() => setMenu(false)}>مهارت‌ها</a>

        <a href="#portfolio" onClick={() => setMenu(false)}>نمونه کارها</a>

        <a href="#contact" onClick={() => setMenu(false)}>تماس</a>

      </nav>

      <div
        className="menu"
        onClick={() => setMenu(!menu)}
      >
        {menu ? <FaTimes /> : <FaBars />}
      </div>

    </header>
  );
}

export default Navbar;