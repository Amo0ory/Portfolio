import React from 'react';
import Image from "../../asset/images/Genius.png";
const AboutMe = props =>{

    return(
        <section class="section-about">

        <div>
          <img src={Image} alt="Amer"  className="section-about__image" />
         

        </div>
        <div class="section-about__left">
            <h1 class="section-about__greeting u-header-primary-medium">
                Hello,
              </h1>
              <h1 class="section-about__introduction u-header-primary-medium ">I am Amer Alomayri</h1>
              <p class="section-about__passion">
              Aspiring young engineer seeking wonders in the world of technology, 
              a self-motivated learner who enjoys going above and beyond when it comes to tackling new tasks and learning new skills.
               Strong written and verbal communication with effective leadership qualities. 
               I have extensive knowledge of programming in different software languages. 
              Love programming apps that have real-world applications. 
              </p>

              <a href="#"class="section-about__btn btn btn__big">Lets Talk <span>&rarr;</span> </a>
        </div>
        <div class="section-about__right"> 

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

export default AboutMe;