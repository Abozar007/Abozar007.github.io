import "./Contact.css";

import {
FaGithub,
FaTelegram,
FaEnvelope,
FaPhone
} from "react-icons/fa";

function Contact(){

    return(
        <section id="contact" className="contact">
        <h2>ارتباط با من</h2>
        <p>
     اگر برای همکاری یا انجام پروژه سوالی دارید،
     خوشحال می‌شوم با من در ارتباط باشید.
        </p>
        <div className="contact-grid">
        <a href="mailto:vakiliabozar3@gmail.com">
        <FaEnvelope/>
        <span>Email</span>
        </a>

        <a
        href="https://github.com/Abozar007"
        target="_blank"
        rel="noreferrer"
        >
        <FaGithub/>
        <span>GitHub</span>
        </a>

        <a
        href="https://t.me/@Abozar007"
        target="_blank"
        rel="noreferrer"
        >
        <FaTelegram/>
        <span>Telegram</span>
        </a>

        <a href="tel:09308957031">
        <FaPhone/>
        <span>Phone</span>
        </a>
        </div>

        </section>

)
}

export default Contact;