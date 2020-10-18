import React from 'react';

const PortfolioItemPage = (props)=>(

    <div>
    <h1>A thing i have done </h1>
    <p> my item is {props.match.params.id}</p>
    </div>
);


export default PortfolioItemPage;