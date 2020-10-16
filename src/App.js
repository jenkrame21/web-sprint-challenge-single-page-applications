import React from "react";
import PizzaForm from './PizzaForm';

const App = () => {

  const [pizzaLovers, setPizzaLovers] = useState([]);

  return (
    <>
      <header className="App">
        <h1>Lambda Eats</h1>
        <nav>
          <PizzaForm pizzaLovers={pizzaLovers} setPizzaLovers={setPizzaLovers}/>
        </nav>
      </header>
    </>
  );
};
export default App;
