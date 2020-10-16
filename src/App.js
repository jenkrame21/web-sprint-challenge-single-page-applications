import React from "react";
import PizzaForm from './PizzaForm';
import PizzaFormSchema from './validation/PizzaFormSchema'

import axios from 'axios';
import * as yup from "yup";


  const initialFormValues = {
    // text input
    name: '',
    // dropdown
    pizzaSize: '',
    // radio button
    sauce: '',
    // checkboxes
    pepperoni: false,
    mushroom: false,
    bacon: false,
    spinach: false,
    ham: false,
    bbqChicken: false,
    onion: false,
    brocolli: false,
    anchovies: false,
    extraCheese: false,
    tomatoes: false,
    sausage: false,
    olives: false,
    pineapple: false,
    garlic: false
  };

  const initialFormErrors = {
    name: '',
    pizzaSize: '',
    sauce: ''
  }

export default function App() {

  return (
    <>
      <header className="App">
        <h1>Lambda Eats</h1>
        <nav>
          <PizzaForm/>
        </nav>
      </header>
    </>
  );
};
