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

            <ProjectDescription 
              title="Meal APP  made with food in mind take a look and enjoy" 
              description=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Laborum quas molestias reiciendis aliquid officia ipsa,
               enim reprehenderit ipsam at, doloremque facilis qui 
               praesentium tenetur consectetur, possimus eum cupiditate ex? 
               Voluptatum."/>
            <div className="card-container">
              <ProjectCard image="pexels-nerfee-mirandilla-3186654.jpg"/>
            </div>   

          </div>
         
          <div className="project-content">
            <div className="card-container">
              <ProjectCard image="pexels-alexander-isreb-1797428.jpg"/>      
            </div>
            <ProjectDescription 
              title="Meal APP  made with food in mind take a look and enjoy" 
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Laborum quas molestias reiciendis aliquid officia ipsa,
               enim reprehenderit ipsam at, doloremque facilis qui 
               praesentium tenetur consectetur, possimus eum cupiditate ex? 
               Voluptatum."/>
          </div>
         
        </div>
    )
}

export default Projects;