import "./PortfolioModal.css";

import {
FaGithub,
FaExternalLinkAlt,
FaTimes
} from "react-icons/fa";

function PortfolioModal({

project,

onClose

}){

return(

<div className="modal">

<div className="modal-content">

<button
className="close"
onClick={onClose}
>

<FaTimes/>

</button>

<img
src={project.image}
alt={project.title}
/>

<h2>{project.title}</h2>

<p>{project.description}</p>

<div className="tech">

{

project.technologies.map((item,index)=>(

<span key={index}>

{item}

</span>

))

}

</div>

<div className="links">

<a href={project.github}>

<FaGithub/>

GitHub

</a>

<a href={project.demo}>

<FaExternalLinkAlt/>

Demo

</a>

</div>

</div>

</div>

)

}

export default PortfolioModal;