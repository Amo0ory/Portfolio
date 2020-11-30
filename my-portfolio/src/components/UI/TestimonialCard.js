import React from 'react';
import Image from '../../asset/images/hien.jpeg';
const TestimonialCard = props =>{
    return (
    <div className={`testimonial testimonial-${props.card}`}>
        <div class="testimonial__card">
            <img src={Image} alt="Photo" class="testimonial__photo"/>
            <h2 class="testimonial__name-occupation">Hien Nguyen</h2>
            <p class="testimonial__content">
              {props.text}
            </p>
        </div>
      </div>
    )
}
export default TestimonialCard;