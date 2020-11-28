import React from 'react';

// import WebDesingLogo from '../../asset/icons/html-five.svg';
import { ReactComponent as WebDesingLogo } from '../../asset/icons/html-five.svg';
import {ReactComponent as WebDev} from '../../asset/icons/react.svg';
import {ReactComponent as Phone} from '../../asset/icons/developer_mode-24px.svg';
import {ReactComponent as IOS} from '../../asset/icons/apple.svg';
import {ReactComponent as Adobe} from '../../asset/icons/adobe.svg';

const SkillsCard = props =>{

    let Icon;
    switch (props.icon){
        case 'WebDesign':
              Icon = <WebDesingLogo fill='#366180'/>;
              break;
        case 'WebDev':
              Icon =  <WebDev fill='#366180'/>;
              break;
        case 'Arduino':
              Icon =<Phone fill="#366180" height={40} width={30}/>
              break;
        case 'Adobe':
            Icon = <Adobe fill="#366180" height={30}/>
            break;
        // default:
        //     return  Icon = <h1>No skills available</h1>
    }
   
    return(
        <div class="skills">
            <div class="skills__icon-box">
                {Icon}
            </div>
                  
            <h1 class="skills__title">{props.title}</h1>
            <p class="skills__paragraph">
               {props.text}
            </p>
        </div>
    )
}

export default SkillsCard;