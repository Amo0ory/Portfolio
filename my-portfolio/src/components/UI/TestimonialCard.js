import React from 'react';

const TestimonialCard = props =>{
    return (
    <div className={`testimonial testimonial-${props.card}`}>
        <div class="testimonial__card">
            <img src="img/Amer.jpg" alt="Photo" class="testimonial__photo"/>
            <h2 class="testimonial__name-occupation">Chris</h2>
            <p class="testimonial__content">
              Lorem ipsum dolor sit amet, 
              consectetur adipisicing elit. Exercitationem rerum dolores est magnam sunt nobis earum quo delectus, 
              beatae necessitatibus debitis libero illo pariatur accusamus
               labore veniam adipisci! Consectetur, rem!
            </p>
        </div>
      </div>
    )
}
export default TestimonialCard;