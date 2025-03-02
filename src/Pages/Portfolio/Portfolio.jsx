import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import portfolioData from '../../portfoliodata'; // Ensure this is correctly imported

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(portfolioData.portfolio || portfolioData); // Adjusting based on JSON structure
  }, []);

  return (
    <div className='portfolio'>
      <h1>My Latest Work</h1>
      <div className="portfolio-container">
        {projects.map((project) => (
          <div key={project.id} className="portfolio-item">
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>

         
            <a href={project.webLink} target="_blank" rel="noopener noreferrer">Live Preview</a>
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
