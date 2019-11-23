import React from 'react';

const OrderItem = props => (
    <div className="order-item">
        <span>{props.name}</span>
        <span>x {props.count}</span>
        <span>{props.price} KGS</span>
        <button onClick={props.onRemoveItem}>&times;</button>
    </div>
);

export default OrderItem;
