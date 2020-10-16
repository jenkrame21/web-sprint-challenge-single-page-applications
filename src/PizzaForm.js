import React, { useState } from 'react';
import Pizza from './Pizza';
import axios from 'axios';
import PizzaFormSchema from '../validation/pizzaFormSchema';

const PizzaForm = (props) => {

    const [pizzaLoverInfo, setPizzaLoverInfo] = useState({
        name: '',
        pizzaSize: ['small', 'medium', 'large', 'x-large'],
        sauce: ['original marinara', 'garlic ranch', 'bbq sauce', 'spinach alfredo'],
        toppings: ['pepperoni', 'cheese only', 'mushroom', 'bacon', 'spinach', 'ham', 'bbq chicken', 'onion,', 'brocolli', 'anchovies', 'extra cheese', 'tomatoes', 'sausage', 'olives', 'pineapple', 'garlic']
    });

    const onSubmit = (event) => {
        event.preventDefault()
        const order = {
            name: pizzaLoverInfo.fName,
            pizzaSize: pizzaLoverInfo.pizzaSize,
            sauce: pizzaLoverInfo.sauce,
            toppings: pizzaLoverInfo.toppings
        }
        postPizzaInfo(order)
        setPizzaLoverInfo({
            name: '',
            pizzaSize: ['small', 'medium', 'large', 'x-large'],
            sauce: ['original marinara', 'garlic ranch', 'bbq sauce', 'spinach alfredo'],
            toppings: ['pepperoni', 'cheese only', 'mushroom', 'bacon', 'spinach', 'ham', 'bbq chicken', 'onion,', 'brocolli', 'anchovies', 'extra cheese', 'tomatoes', 'sausage', 'olives', 'pineapple', 'garlic']
        })
    }

    const postPizzaInfo = (order) => {
        axios.post(`https://reqres.in/`, order)
        .then((res) => {
            console.log(res.data)
            props.setPizzaLovers([...props.pizzaLovers, res.data])
        })
        .catch((err) => {
            console.log(err)
        })
    }


    return (
        <form>
            <label>Name: 
                <input
                    id='name'
                    type='text'
                    value={pizzaLoverInfo.name}
                    name='fName'
                    placeholder='Name'
                    // onChange={onChange}
                />
            </label>
            <label>Pizza Size:
                <input 
                    id='pizzaSize'
                    type=''
                />
            </label>
        </form>
    )

}

export default PizzaForm