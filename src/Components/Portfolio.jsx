import { useState } from "react";
import "./Portfolio.css";
import projects from "../data/projects";
import PortfolioModal from "./PortfolioModal";

function Portfolio() {

  const [selectedProject, setSelectedProject] = useState(null);

  return (

    <section className="portfolio" id="portfolio">

      <h2>نمونه کارهای من</h2>

      <div className="portfolio-grid">

        {projects.map((project) => (

          <div
            className="project-card"
            key={project.id}
          >

            <img
              src={project.image}
              alt={project.title}
            />

            <div className="overlay">

              <button
                onClick={() =>
                  setSelectedProject(project)
                }
              >
                مشاهده جزئیات
              </button>

            </div>

            <div className="project-info">

              <h3>{project.title}</h3>

              <span>{project.category}</span>

            </div>

          </div>

        ))}

      </div>

      {selectedProject && (

        <PortfolioModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      )}

    </section>

  );

}

export default Portfolio;