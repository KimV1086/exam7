import React from 'react';

const MenuItem = props => (
    <div className="menu-item" onClick={props.onAddItem}>
        <div className="menu-item__img">
            <img src={props.image} alt={props.name}/>
        </div>
        <div className="menu-item__txt">
            <h4 className="menu-item__title">{props.name}</h4>
            <span>Price: {props.price} KGS</span>
        </div>
    </div>
);

export default MenuItem;
