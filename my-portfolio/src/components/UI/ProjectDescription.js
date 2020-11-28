import React from 'react';

const ProjectDescription = props =>{

    return(
        <div className="project-description">

        <h1 className="project-description__heading">
          {props.title}
        </h1>

        <p className="project-description__paragraph">
         {props.description}
        </p>

      </div>
    )
}

export default ProjectDescription;