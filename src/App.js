import React, { useState, useEffect } from "react";
import Pizza from './Pizza'
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

  const initialPizzaLovers = [];
  const initialDisabled = true;

export default function App() {

  const [pizzaLovers, setPizzaLovers] = useState(initialPizzaLovers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getPizzaLovers = () => {
    axios
      .get(`http://localhost:3000/pizzaOrder`)
      .then((res) => {
        setPizzaLovers(res.data);
      })
      .catch((err) => {
        console.log(err)
        alert(`Got an error there bud.`);
      });
  };

  const postNewFriend = (newOrder) => {
    axios
      .post("http://localhost:3000/pizzaOrder", newOrder)
      .then((res) => {
        setPizzaLovers([res.data, ...pizzaLovers]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const inputChange = (name, value) => {

    yup
      .reach(PizzaFormSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const formSubmit = () => {
    const newFriend = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
      civil: formValues.civil.trim(),
      // 🔥 STEP 7- WHAT ABOUT HOBBIES?
      hobbies: ["coding", "reading", "hiking"].filter(
        (hobby) => formValues[hobby]
      ),
    };
    // 🔥 STEP 8- POST NEW FRIEND USING HELPER
    postNewFriend(newFriend);
  };

  useEffect(() => {
    // 🔥 STEP 9- ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
    PizzaFormSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <>
      <header className="container">
        <h1>Lambda Eats</h1>
        <nav>
          <PizzaForm
            values={formValues}
            change={inputChange}
            submit={formSubmit}
          />
          {pizzaLovers.map((pizza) => {
            return <Pizza key={pizza.id} details={pizza} />;
          })}
        </nav>
      </header>
    </>
  );
};
