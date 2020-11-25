import React from 'react';

import AboutMe from './sections/AboutMe';
import WhyMe from './sections/WhyMe';
import Projects from './sections/Projects';
import MySkills from './sections/MySkills';
import Testimonials from './sections/Testimonials';

const Main = props =>{

return(
    <div>
     <AboutMe/>
     <WhyMe/>
     <Projects/>
     <MySkills/>
     <Testimonials/>
    </div>
)
}

export default Main;
