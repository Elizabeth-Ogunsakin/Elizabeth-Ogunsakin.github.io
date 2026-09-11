
import { useState } from 'react';
import { ProjectsSection } from '../../assets/styles';
//import image2 from "../../assets/img/proj1.png"
//import image3 from "../../assets/img/proj2.png"
//import image1 from "../../assets/img/proj3.png"


const projectsData = [
    {
      title: "Maternal Risk Predictor: AI-Powered Maternal Health Risk Assessment",
      category: "Machine Learning",
      // thumbnail: image2, 
      tags: ["Python", "Scikit-learn", "Streamlit", "Healthcare AI"],
      description:
        "A machine learning-powered web application that predicts maternal health risk levels from key health indicators, enabling early risk assessment and supporting clinical decision-making.",
  highlights: [
        "Designed to support early identification of high-risk pregnancies",
    "Developed, evaluated, and deployed a healthcare machine learning model with Streamlit"
      ],
      links: {
        github: "https://github.com/Elizabeth-Ogunsakin/Maternal-Risk-Predictor", 
        live: "https://maternal-risk-predictor.streamlit.app/" 
      }
    },
    {
      title: "Ulcer Meal Recommendation System",
      category: "Machine Learning",
      //thumbnail: image3, 
      tags: ["Python", "Scikit-learn", "XGBoost", "Random Forest"],
      description:
        "A machine learning system that predicts ulcer pain triggers using patient symptoms, medication patterns, and lifestyle factors, then recommends stomach-friendly African meals based on the predicted risk.",

      highlights: [
        "Compared Random Forest and XGBoost models using hyperparameter tuning",
    "Performed feature engineering and multi-label encoding for meals, symptoms, and trigger causes",
    "Built an end-to-end prediction pipeline with personalized meal recommendations"
      ],
      links: {
        github: "https://github.com/Elizabeth-Ogunsakin/ulcer-meal-recommender", 
        //website: "https://huggingface.co/spaces/Aramide/foodie_lens" 
      }
    }
    /*

    {
      title: "UlcerMate: AI-Powered Ulcer Management System",
      category: "Machine Learning",
      //thumbnail: image1, 
      tags: ["Python", "Scikit learn", "ML"],
      description:
        "UlcerMate is an AI-powered app that helps users log meals, symptoms, and medications to identify personal ulcer triggers and detect risk patterns.",
      highlights: [
        "Improved healthcare for ulcer patient",
        "used real data from actual ulcer patients to train the model"
      ],
      links: {
        github: "https://github.com/Adebesin-Aramide/Ulcer_Management_System", 
        // article: "https://medium.com/cassava-leaf-disease" 
      }
    }
      */
  ];


const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = ['all', ...new Set(projectsData.map(project => project.category))];

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <ProjectsSection id="projects">
      <h1>Featured Projects</h1>
      
      <div className="filters">
        {categories.map(category => (
          <button
            key={category}
            className={activeFilter === category ? 'active' : ''}
            onClick={() => setActiveFilter(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-card">
            {/*
            <div className="project-image">
              <img src={project.thumbnail} alt={project.title} />
              <div className="project-overlay">
                <div className="project-links">
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.links.live && (
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
            */}

            <div className="project-content">
              <h3>{project.title}</h3>
              
              <div className="tags">
                {project.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>

              <p>{project.description}</p>

              <div className="highlights">
                {project.highlights.map((highlight, i) => (
                  <div key={i} className="highlight-item">
                    <span className="highlight-icon">✦</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {project.links.article && (
                <a href={project.links.article} className="read-more" target="_blank" rel="noopener noreferrer">
                  Read Article →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </ProjectsSection>
  );
};

export default Projects;