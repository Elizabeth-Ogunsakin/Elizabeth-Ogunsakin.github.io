import { ExperienceSection } from '../../assets/styles';

const experienceData = [
   {
    role: "Data Analytics Instructor",
    company: "Curators University",
    duration: "Jan 2026 - Present",
    tags: ["Data Analytics", "SQL", "Database Management", "Machine Learning"],
    description: "Delivered practical training in data analytics, database concepts, and machine learning foundations, helping learners develop skills for data-driven problem solving.",
    achievements: [
      "Trained learners in data analytics workflows, including Excel, SQL, data cleaning, and visualization techniques.",
        "Introduced database management concepts, relational databases, and SQL querying for effective data storage and retrieval.",
        "Taught foundational machine learning concepts, including predictive modeling workflows and model evaluation techniques.",
        "Designed practical exercises and projects to help learners apply analytical approaches to real-world datasets."
    ],
  },  

   {
    role: "Data Science & Machine Learning Tutor",
    company: "3MTT DeepTech_Ready Program",
    duration: "Sep 2025 - Dec 2025",
    tags: ["Machine Learning", "Deep Learning", "Computer Vision", "Artificial Intelligence"],
    description: "Mentored learners in developing practical machine learning skills, from data preprocessing and exploratory analysis to building and evaluating predictive AI models.",
    achievements: [
      "Delivered training on machine learning workflows, including data preparation, feature engineering, model development, and performance evaluation.",
        "Guided learners through supervised and unsupervised learning algorithms such as regression, classification, clustering, and dimensionality reduction.",
        "Introduced deep learning concepts and neural network fundamentals, preparing learners for advanced AI applications.",
        "Supported learners in applying machine learning techniques to solve real-world problems using Python-based tools."
    ],
  },
  /*

  {
    role: "Data Science Tutor",
    company: "DeepTech_Ready Program",
    duration: "Sept 2024 - Present",
    tags: ["Computer Vision", "GenAI", "RAG", "LLM"],
    description: "Fostered an engaging learning environment to enhance understanding and application of advanced AI topics",
    achievements: [
      "Provided comprehensive tutoring on computer vision concept",
      "Educated learners on generative AI, focusing on the RAG"
    ],
    // links: [
    //   { text: "Research Details", url: "#" }
    // ]
  },
  {
    role: "Junior Data Scientist",
    company: "Pariti",
    duration: "Nov 2024 - April 2025",
    tags: ["EDA", "NLP", "LLM"],
    description: "Built an LLM-based recruitment chatbot, automated email processes with Zapier",
    achievements: [
      "Developed a chatbot using LLM to assist users with recruitment inquiries",
      "Worked on Large Language Models to improve the process of matching job seekers and vacancies (model selection, finetuning, deployment)",
      "Automated email workflows with Zapier"
  
    ],
    // links: [
    //   { text: "ML Collective Overview", url: "#" }
    // ]
  },
  /*
  {
    role: "Data Science Intern",
    company: "Pariti",
    duration: "Aug 2024 - Nov 2024",
    tags: ["LLM", "Embeddings", "KPI"],
    description: "Analyzed large datasets, built KPI dashboards, and applied machine learning models to support data-driven business decisions.",
    achievements: [
      "Analyzed and interpreted large datasets",
      "Developed and maintained KPI dashboards",
      "Applied machine learning models to address the business needs"
    ],
    // links: [
    //   { text: "Cakasa Engineering Services", url: "#" }
    // ]
  },
  /*
  {
    role: "AI/ML Intern",
    company: "Strategies and Yields Limited (SYL)",
    duration: "June 2024 - Nov 2024",
    tags: ["Machine Learning", "Data Science"],
    description: "Developed responsive websites and optimized web applications.",
    achievements: [
      "Contributed to the development of Qknows, a chatbot designed to meet the specific needs of Africans, enhancing user engagement and functionality.",
      "Taught data science concepts to students enrolled in the company’s academy",
      "Worked with a diverse development team"
    ],
    // links: [
    //   { text: "Credo Projects", url: "#" }
    // ]
  }*/
];

const Experience = () => {
  return (
    <ExperienceSection id="experience">
      <h1>Experience</h1>
      <div className="experience-grid">
        {experienceData.map((exp, index) => (
          <div key={index} className="experience-card">
            <h3 className="role">{exp.role}</h3>
            <div className="company">{exp.company}</div>
            <div className="duration">{exp.duration}</div>
            <div className="tags">
              {exp.tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
            <p className="description">{exp.description}</p>
            <ul className="achievements">
              {exp.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
            {exp.links && (
              <div className="links">
                {exp.links.map((link, i) => (
                  <a key={i} href={link.url}>{link.text}</a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </ExperienceSection>
  );
};

export default Experience;