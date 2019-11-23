import React, {Component} from 'react';

import Menu from './components/Menu';
import Order from './components/Order';

import foodImg from './assets/food-img.png';
import drinkImg from './assets/drink-img.png';

class App extends Component {
    state = {
        elements: [
            {id: 1, name: 'Hamburger', price: 80, image: foodImg, count: 0},
            {id: 5, name: 'Coffee', price: 30, image: drinkImg, count: 0},
            {id: 2, name: 'Cheeseburger', price: 90, image: foodImg, count: 0},
            {id: 3, name: 'Tea', price: 20, image: drinkImg, count: 0},
            {id: 6, name: 'Fries', price: 45, image: foodImg, count: 0},
            {id: 4, name: 'Cola', price: 40, image: drinkImg, count: 0},
        ],
        totalPrice: 0
    };


    addElements = (id) => {
        const elements = [...this.state.elements];

        for (let i = 0; i < elements.length; i++) {
            if (elements[i].id === id) {
                elements[i].count++;
            }
        }

        this.setState({elements}, this.calcResult());
    };

    removeElements = (id) => {
        const elements = [...this.state.elements];

        for (let i = 0; i < elements.length; i++) {
            if (elements[i].id === id) {
                elements[i].count--;
            }

            if (elements[i].count < 0) {
                elements[i].count = 0;
            }
        }

        this.setState({elements}, this.calcResult());
    };

    calcResult = () => {
        const elements = [...this.state.elements];
        let totalPrice = 0;

        for (let i = 0; i < elements.length; i++) {
            if (elements[i].count) {
                let itemPrice = elements[i].count * elements[i].price;
                totalPrice += itemPrice;
            }
        }

        this.setState({totalPrice});
    };

    render() {
        let orderTxt = null;

        if (this.state.totalPrice > 0) {
            orderTxt = (
                <div className="order-inner">
                    {this.state.elements.map(order => {
                        if (order.count) {
                            return (
                                <Order
                                    key={order.id}
                                    name={order.name}
                                    count={order.count}
                                    price={order.price}
                                    onRemoveItem={this.removeElements.bind(this, order.id)}
                                />
                            )
                        }
                        return null;
                    })}
                    <div className="order-item total">
                        <span>Total price:</span>
                        <span>{this.state.totalPrice} KGS</span>
                    </div>
                </div>
            )
        } else {
            orderTxt = (
                <div className="order-inner">
                    <p>Order is empty!</p>
                    <p>Please add some elements!</p>
                </div>
            )
        }

        return (
            <div className="container">
                <div className="order">
                    <h3 className="module-title">Order details</h3>
                    {orderTxt}
                </div>
                <div className="menu">
                    <h3 className="module-title">Menu</h3>
                    <div className="menu-elements">
                        {this.state.elements.map(item => (
                            <Menu
                                key={item.id}
                                name={item.name}
                                price={item.price}
                                image={item.image}
                                onAddItem={this.addElements.bind(this, item.id)}
                            />
                        ))}

                        <h2 className="menu-total-price">{this.state.totalPrice} KGS</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
