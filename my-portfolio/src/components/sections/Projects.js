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
              description=" Developed a Meals app for listing different meals
               along with their recipes and implementing redux states and actions and 
               storing the data in Firebase as the backend"/>
            <div className="card-container">
              <ProjectCard 
              title="Meal app"
              image="pexels-nerfee-mirandilla-3186654.jpg"/>
            </div>   

          </div>
         
          <div className="project-content">
            <div className="card-container">
              <ProjectCard 
              title="Shopaholic app"
              image="pexels-alexander-isreb-1797428.jpg"/>      
            </div>
            <ProjectDescription 
              title="Shopaholic app for those who loves online shopping" 
              description="Developed a Shop app using redux store and firebase 
              to store and fetch the data online."/>
          </div>
         
        </div>
    )
}

export default Projects;