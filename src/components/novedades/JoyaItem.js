import React from 'react';


const JoyaItem = (props) => {
    const {title, description, image, price} = props;
    
return (
    
    
    
    <div className="joyas-">
        
        <div className='caja-img'><img src={ image}/></div>
        <div className='item1'><h2>{title}</h2></div>
        <div className='text-description'><p>{description}</p></div>
        <div className='text-precio' >{`$ ${price}`}</div>
        
    </div>

);
}
export default JoyaItem;