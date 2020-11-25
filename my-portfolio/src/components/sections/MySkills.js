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
                <SkillsCard/>
                <SkillsCard/>
                <SkillsCard/>
                <SkillsCard/>
            </div>
  
        </div>
    )
}

export default MySkills;