import React from 'react';
import SkillsCard from '../UI/SkillsCard';

const MySkills = props =>{
    return(
        <div className="section-skills">
            <div class="u-margin-bottom-small u-header-primary-centred">
                <h1 class="heading-primary">
                   My skills
                 </h1>
            </div>

            <div className='MySkill-section-card'>
                <SkillsCard 
                title={'Embedded programming'} 
                icon={'WebDesign'} 
                text=' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum iusto,
                quis adipisci voluptates consectetur 
                quis adipisci voluptates consectetur'/>
                <SkillsCard 
                title={'WEB DEVELOPMENT'} 
                icon={'WebDev'} 
                text=' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum iusto,
                quis adipisci voluptates consectetur 
                quis adipisci voluptates consectetur'/>
                <SkillsCard 
                title={'MOBILE APP'} 
                icon={'Arduino'} 
                text=' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum iusto,
                quis adipisci voluptates consectetur 
                quis adipisci voluptates consectetur'/>
                <SkillsCard 
                title={'UI/UX DESIGN'} 
                icon={'Adobe'}
                text=' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum iusto,
                quis adipisci voluptates consectetur 
                quis adipisci voluptates consectetur'/>
            </div>
  
        </div>
    )
}

export default MySkills;