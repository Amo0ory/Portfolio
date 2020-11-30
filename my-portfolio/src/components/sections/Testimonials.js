import React from 'react';
import TestimonialCard from '../UI/TestimonialCard';
import { ReactComponent as GitHubLogo } from '../../asset/icons/github.svg';
import {ReactComponent as Gmail} from '../../asset/icons/mail4.svg';
import {ReactComponent as Facebook} from '../../asset/icons/facebook2.svg';
import {ReactComponent as Instagram} from '../../asset/icons/instagram.svg';
import {ReactComponent as LinkedIn} from '../../asset/icons/linkedin.svg';
import {ReactComponent as Phone} from '../../asset/icons/phone.svg';

const Testimonials = props =>{

    return(
        <section class="section-testimonial  ">
            <div class="u-margin-bottom-big">
                <h1 class="heading-primary">
                Testimonial
                </h1>
            </div>

            <div class="testimonial-container">
                <TestimonialCard
                 text="Lorem ipsum dolor sit amet, 
                 consectetur adipisicing elit. Exercitationem rerum dolores est magnam sunt nobis earum quo delectus, 
                 beatae necessitatibus debitis libero illo pariatur accusamus
                  labore veniam adipisci! Consectetur, rem!"
                 card={'1'}/>
                <TestimonialCard 
                text="I've known Amer for several years and had the opportunity
                to mentored Amer to develop an application for our service. 
                During the process, Amer demonstrated willingness to learn, 
                ability to effectively apply knowledge to practice and commitment teamwork and delivery. 
                His attitude towards dealing with complex issues and uncertainty is exemplary and Amer is always enthusiastic,
                genuine and approachable. I commend Amer's capabilities and work ethics 
               and would recommend him to any organizations and teams."
                card={'0'}/>
                <TestimonialCard 
                text="Lorem ipsum dolor sit amet, 
                consectetur adipisicing elit. Exercitationem rerum dolores est magnam sunt nobis earum quo delectus, 
                beatae necessitatibus debitis libero illo pariatur accusamus
                 labore veniam adipisci! Consectetur, rem!"
                card={'2'}/>
            </div>

            <div id='connect' className="contact-section u-margin-top-extra-big">
                <h1 className="connect-with-me">Connect with me</h1>
                <div className="contact-icons">
                <a href="https://github.com/Amo0ory?tab=repositories" >
                    <GitHubLogo fill='#1B3140' width={20} className="contact-icons__items"/>
                </a>
                <a href="https://www.facebook.com/amer.alomayri">
                    <Facebook fill='#1B3140' width={20} className="contact-icons__items"/>
                </a>
                <a href="https://www.instagram.com/amo0oy_94/">
                    <Instagram fill='#1B3140' width={20} className="contact-icons__items"/>
                </a>
                <a href="https://www.linkedin.com/in/amer-alomayri/">
                    <LinkedIn fill='#1B3140' width={20} className="contact-icons__items"/>
                </a>
               

                </div>
            </div>
        </section>
    )
}

export default Testimonials;