import React from 'react';

const Order = props => (
    <div className="order-item">
        <span>{props.name}</span>
        <span>x {props.count}</span>
        <span>{props.price} KGS</span>
        <button onClick={props.onRemoveItem}>&times;</button>
    </div>
);

export default Order;
