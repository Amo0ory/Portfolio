import React from 'react';
// import WebDesingLogo from '../../asset/icons/html-five.svg';
import { ReactComponent as WebDesingLogo } from '../../asset/icons/html-five.svg';
const SkillsCard = props =>{

    return(
        <div class="skills">
            <div class="skills__icon-box">
              <WebDesingLogo fill='#366180'/>
            </div>
                  
            <h1 class="skills__title">Embedded programming</h1>
            <p class="skills__paragraph">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum iusto,
                quis adipisci voluptates consectetur 
                quis adipisci voluptates consectetur
            </p>
        </div>
    )
}

export default SkillsCard;