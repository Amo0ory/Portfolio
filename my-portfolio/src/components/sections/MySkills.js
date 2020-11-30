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
                title={'WEB DESIGN'} 
                icon={'WebDesign'} 
                text=' A picture is worth a thousand words.
                 This is more than just an overused phrase 
                 when it comes to website desing. I have built two projects namely: Natours and Trillo using HTML and sass only.
                 you can check them out in my Github now'/>
                <SkillsCard 
                title={'WEB DEVELOPMENT'} 
                icon={'WebDev'} 
                text= "Great web design without functionality is like a sport's car with no engine. Working with react has been a blessing hence i have designed this website using React JS framework and i have another project i built using React called Indecision App. check it out in my github"/>
                <SkillsCard 
                title={'MOBILE APP'} 
                icon={'Arduino'} 
                text='"Not having a mobile app is like being closed every Thursday".
                I have Extensive knowledge in app develoment and created Reusable react presentation and container components. I also have
                good understanding and usage of states and props. Additionaly, I have solid experience of react/redux development using Babel, Web pack, isomorphic fetches, ES6, NPM.
                '/>
                <SkillsCard 
                title={'UI/UX DESIGN'} 
                icon={'Adobe'}
                text=' "a great product is not just a collection of features. It is how it all works together". I have solid understanding of UI/UX design using Adobe XD, I have designed few websites using adobe XD before starting building the website using ReactJS'/>
            </div>
  
        </div>
    )
}

export default MySkills;