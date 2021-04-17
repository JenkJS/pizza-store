import axios from "axios";
import React from "react";
import { Route } from "react-router-dom";
import { Header } from "./components";
import { Home, Cart } from "./pages";

function App() {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:3000/items.json').then(({data})=>{      setPizzas(data.pizzas);
  }
    )
    
    // fetch("http://localhost:3000/items.json")
    //   .then((resp) => resp.json())
    //   .then(json => {
    //     setPizzas(json.pizzas);
    //   });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" render={() => <Home items={pizzas} />} exact></Route>
        <Route path="/Cart" component={Cart} exact></Route>
      </div>
    </div>
  );
}

export default App;
