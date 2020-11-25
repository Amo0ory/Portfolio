import React from 'react';
import TestimonialCard from '../UI/TestimonialCard';
import { ReactComponent as GitHubLogo } from '../../asset/icons/github.svg';
import {ReactComponent as Gmail} from '../../asset/icons/gmail.svg';

const Testimonials = props =>{

    return(
        <section class="section-testimonial  ">
            <div class="u-margin-bottom-big">
                <h1 class="heading-primary">
                Testimonial
                </h1>
            </div>

            <div class="testimonial-container">
                <TestimonialCard card={'1'}/>
                <TestimonialCard card={'0'}/>
                <TestimonialCard card={'2'}/>
            </div>

            <div className="contact-section u-margin-top-extra-big">
                <h1 className="connect-with-me">Conect with me</h1>
                <div className="contact-icons">
                    <Gmail fill='#ffff' width={20} className="contact-icons__items"/>
                    <GitHubLogo fill='#ffff' width={20} className="contact-icons__items"/>
                    <GitHubLogo fill='#ffff' width={20} className="contact-icons__items"/>
                    <GitHubLogo fill='#ffff' width={20} className="contact-icons__items"/>
                    <GitHubLogo fill='#ffff' width={20} className="contact-icons__items"/>
                    <GitHubLogo fill='#ffff' width={20} className="contact-icons__items"/>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;