import React from 'react';
import Image from '../../asset/images/Wondering.png';
const WhyMe = props =>{
    return(
        <section class="section-whyMe">
          <div className="section-whyMe__image">
            <img src={Image} alt="Wonder image" className="section-whyMe__image"/>
          </div>
          <div class="section-whyMe__left">
            <h1 class="section-whyMe__header u-header-primary-large heading-primary">Why Me</h1>
            <p class="section-whyMe__paragraph u-header-primary-small">
            I am passionate about self-development and continuously
             learn new things I have outstanding problem-solving 
             skills with the ability to work with technical and abstract concepts
              efficiently. 
              I also have extensive knowledge of JavaScript(ES6), React.js, React Native, C++ and C#. 
              I really want to learn and grow within a collaborative organisation. 
              For me it’s not just about coding, it is about problem-solving as a team in an agile way
               to come up with the best solution for the business.
            I love a challenge, and as a self-motivated learner, 
            I really enjoy going above and beyond when it comes to tackling new tasks and learning new skills. 
            I work hard to develop collaboration and team bonding is an essential part of whatever work I am doing. 
            I am looking forward to hear back from you. 
            
            </p>
          </div>
          <div class="section-whyMe__right">
          <p>
          FRONT END DEVELOPER
          UI/UX DESIGNER
        </p>
        <p>
          FRONT END DEVELOPER
          UI/UX DESIGNER
        </p>
        <p>
          FRONT END DEVELOPER
          UI/UX DESIGNER
        </p>
        <p>
        FRONT END DEVELOPER
        UI/UX DESIGNER
      </p>
      <p>
        FRONT END DEVELOPER
        UI/UX DESIGNER
      </p>
      <p>
        FRONT END DEVELOPER
        UI/UX DESIGNER
      </p>
      <p>
      FRONT END DEVELOPER
      UI/UX DESIGNER
    </p>
    <p>
      FRONT END DEVELOPER
      UI/UX DESIGNER
    </p>

   
          </div>
        </section>
    )
}

export default WhyMe;