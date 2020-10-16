import React from 'react';

export default function PizzaForm(props) {

    const { values, disabled, submit, change, errors } = props

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    };

    const onChange = (evt) => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    };

    return (
        <form className="pizza-form container" onSubmit={onSubmit}>
            <h1>Build Your Own Pizza</h1>
            <h2>Name: </h2>
            <label>Type your Name 
                {/* Text Field */}                
                <input
                    id='name'
                    type='text'
                    value={values.name}
                    name='name'
                    placeholder='Name'
                    onChange={onChange}
                />
            </label>
            <h2>Pizza Size: </h2>
            <label>Choose a Size
                {/* Dropdown */}
                <select onChange={onChange} value={values.pizzaSize} name='pizzaSize'>
                    <option value=''>-- Select a Size --</option>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                    <option value='x-large'>X-Large</option>
                </select>
            </label>
            <h2>Sauce: </h2>
            <label>Original Marinara
                {/* Radio Button */}
                <input
                    type='radio'
                    name='sauce'
                    value='original marinara'
                    checked={values.sauce === 'original marinara'}
                    onChange={onChange}
                />
            </label>
            <label>Garlic Ranch
                {/* Radio Button */}
                <input
                    type='radio'
                    name='sauce'
                    value='garlic ranch'
                    checked={values.sauce === 'garlic ranch'}
                    onChange={onChange}
                />
            </label>
            <label>BBQ Sauce
                {/* Radio Button */}
                <input
                    type='radio'
                    name='sauce'
                    value='bbq sauce'
                    checked={values.sauce === 'bbq sauce'}
                    onChange={onChange}
                />
            </label>
            <label>Spinach Alfredo
                {/* Radio Button */}
                <input
                    type='radio'
                    name='sauce'
                    value='spinach alfredo'
                    checked={values.sauce === 'spinach alfredo'}
                    onChange={onChange}
                />
            </label>
            <h2>Toppings:</h2>
            <label>Pepperoni
                {/* Checkbox */}
                <input
                    type="checkbox"
                    name="pepperoni"
                    checked={values.pepperoni}
                    onChange={onChange}
                />
            </label>
            <label>Mushroom
                {/* Checkbox */}
                <input
                    type="checkbox"
                    name="mushroom"
                    checked={values.mushroom}
                    onChange={onChange}
                />
            </label>
            <label>Bacon
                {/* Checkbox */}
                <input
                    type="checkbox"
                    name="bacon"
                    checked={values.bacon}
                    onChange={onChange}
                />
            </label>
            <label>Spinach
                {/* Checkbox */}
                <input
                    type="checkbox"
                    name="spinach"
                    checked={values.spinach}
                    onChange={onChange}
                />
            </label>
            <label>Ham
                {/* Checkbox */}
                <input
                    type="checkbox"
                    name="ham"
                    checked={values.ham}
                    onChange={onChange}
                />
            </label>
            <label>BBQ Chicken
                {/* Checkbox */}
                <input
                    type="checkbox"
                    name="bbqChicken"
                    checked={values.bbqChicken}
                    onChange={onChange}
                />
            </label>
            <label>Onion
                {/* Checkbox */}
                <input
                    type="checkbox"
                    name="onion"
                    checked={values.onion}
                    onChange={onChange}
                />
            </label>
            <label>Brocolli
                {/* Checkbox */}
                <input
                    type="checkbox"
                    name="brocolli"
                    checked={values.brocolli}
                    onChange={onChange}
                />
            </label>
            <label>Anchovies
                {/* Checkbox */}
                <input
                    type="checkbox"
                    name="anchovies"
                    checked={values.anchovies}
                    onChange={onChange}
                />
            </label>
            <label>Extra Cheese
                {/* Checkbox */}
                <input
                    type="checkbox"
                    name="extraCheese"
                    checked={values.extraCheese}
                    onChange={onChange}
                />
            </label>
            <label>Tomatoes
                {/* Checkbox */}
                <input
                    type="checkbox"
                    name="tomatoes"
                    checked={values.tomatoes}
                    onChange={onChange}
                />
            </label>
            <label>Sausage
                {/* Checkbox */}
                <input
                    type="checkbox"
                    name="sausage"
                    checked={values.sausage}
                    onChange={onChange}
                />
            </label>
            <label>Olives
                {/* Checkbox */}
                <input
                    type="checkbox"
                    name="olives"
                    checked={values.olives}
                    onChange={onChange}
                />
            </label>
            <label>Pineapple
                {/* Checkbox */}
                <input
                    type="checkbox"
                    name="pineapple"
                    checked={values.pineapple}
                    onChange={onChange}
                />
            </label>
            <label>Garlic
                {/* Checkbox */}
                <input
                    type="checkbox"
                    name="garlic"
                    checked={values.garlic}
                    onChange={onChange}
                />
            </label>
            <button disabled={disabled}>Submit Your Order</button>
            <div className="errors">
                <div>{errors.name}</div>
                <div>{errors.pizzaSize}</div>
                <div>{errors.sauce}</div>
            </div>
        </form>
    )

}