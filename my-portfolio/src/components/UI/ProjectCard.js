import React from 'react';
import { ReactComponent as GitHubLogo } from '../../asset/icons/github.svg'

const ProjectCard= props =>{

    return(
        <div className="project-card">
            <img src="img/profile-image.jpg" alt="" className="project-card__photo"/>
           
            <h2 className="project-card__title">Meal app</h2>                  
            <ul className="list">
                <li className="list__item">JS</li>
                <li className="list__item">ReactJS</li>
                <li className="list__item">CSS</li>
            </ul>
            <div className="project-card__btn">
                
                     <a href="https://github.com/Amo0ory?tab=repositories" className=" btn btn__medium btn__align">
                       
                        <p className="p"> Go To</p>
                        <GitHubLogo fill='#ffff' width={20} className="github_logo"/>
                        <span className="project_arrow">&rarr;</span>
                        </a>
                
            </div>
        </div>    
    )

}

export default ProjectCard;