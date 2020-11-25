import React from 'react';
import ProjectCard from '../UI/ProjectCard';
import ProjectDescription from '../UI/ProjectDescription';

const Projects = props =>{

    return (
        
        <div className="section-projects">

          <div className="u-margin-bottom-big u-margin-top-big u-header-primary-centred">
              <h1 className="heading-primary">
                  My Projects
                </h1>
          </div>
          
          <div className="project-content">
            <ProjectDescription/>
            <div className="card-container">
                <ProjectCard/>
            </div>   

          </div>
         
          <div className="project-content">
            <div className="card-container">
              <ProjectCard/>      
            </div>
            <ProjectDescription/>
          </div>
         
        </div>
    )
}

export default Projects;