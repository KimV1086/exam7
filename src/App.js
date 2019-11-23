import React, {Component} from 'react';

import foodImg from './assets/food-img.png';
import drinkImg from './assets/drink-img.png';

class App extends Component {

    state = {

        items: [
            {id: 1, count: 0, name: 'Hamburger', price: 80, image: foodImg},
            {id: 1, count: 0, name: 'Cheeseburger', price: 90, image: foodImg},
            {id: 1, count: 0, name: 'Fries', price: 45, image: foodImg},
            {id: 1, count: 0, name: 'Coffee', price: 70, image: drinkImg},
            {id: 1, count: 0, name: 'Tea', price: 50, image: drinkImg},
            {id: 1, count: 0, name: 'Cola', price: 40, image: drinkImg},
        ],
        totalPrice: 0

    };


    addItemHandler = (id) => {

        const items = [...this.state.items];

        for (let i = 0; i < items.length; i++) {
            if (items[i].id === id) {
                items[i].count++;
            }
        }

        this.setState({items}, this.calcTotalPrice());

    };



    render() {
        return (
            <div>

            </div>
        );
    }
}

export default App;
