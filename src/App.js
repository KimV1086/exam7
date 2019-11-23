import React, {Component} from 'react';

import Menu from './components/Menu';
import Order from './components/Order';

import foodImg from './assets/food-img.png';
import drinkImg from './assets/drink-img.png';

class App extends Component {
    state = {
        items: [
            {id: 1, name: 'Hamburger', price: 80, image: foodImg, count: 0},
            {id: 5, name: 'Coffee', price: 50, image: drinkImg, count: 0},
            {id: 2, name: 'Cheeseburger', price: 90, image: foodImg, count: 0},
            {id: 3, name: 'Tea', price: 30, image: drinkImg, count: 0},
            {id: 6, name: 'Fries', price: 45, image: foodImg, count: 0},
            {id: 4, name: 'Cola', price: 40, image: drinkImg, count: 0},
        ],
        totalPrice: 0
    };


    addItems = (id) => {
        const items = [...this.state.items];

        for (let i = 0; i < items.length; i++) {
            if (items[i].id === id) {
                items[i].count++;
            }
        }

        this.setState({items}, this.calcResult());
    };

    calcResult = () => {
        const items = [...this.state.items];
        let totalPrice = 0;

        for (let i = 0; i < items.length; i++) {
            if (items[i].count) {
                let itemPrice = items[i].count * items[i].price;
                totalPrice += itemPrice;
            }
        }

        this.setState({totalPrice});
    };

    removeItems = (id) => {
        const items = [...this.state.items];

        for (let i = 0; i < items.length; i++) {
            if (items[i].id === id) {
                items[i].count--;
            }

            if (items[i].count < 0) {
                items[i].count = 0;
            }
        }

        this.setState({items}, this.calcResult());
    };


    render() {
        let orderList = null;

        if (this.state.totalPrice > 0) {
            orderList = (
                <div className="order-inner">
                    {this.state.items.map(order => {
                        if (order.count) {
                            return (
                                <Order
                                    key={order.id}
                                    name={order.name}
                                    count={order.count}
                                    price={order.price}
                                    onRemoveItem={this.removeItems.bind(this, order.id)}
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
            orderList = (
                <div className="order-inner">
                    <p>Order is empty!</p>
                </div>
            )
        }

        return (
            <div className="container">
                <div className="order">
                    <h3 className="module-title">Order details</h3>

                    {orderList}
                </div>
                <div className="menu">
                    <h3 className="module-title">Menu</h3>
                    <div className="menu-items">
                        {this.state.items.map(item => (
                            <Menu
                                key={item.id}
                                name={item.name}
                                price={item.price}
                                image={item.image}
                                onAddItem={this.addItems.bind(this, item.id)}
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
