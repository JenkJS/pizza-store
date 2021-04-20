import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import { Header } from "./components";
import { Home, Cart } from "./pages";
import { setPizzas } from "./redux/actions/pizzas";
// import store from "./redux/store";

function App() {
  const dispatch = useDispatch();
   window.test = () => {
    axios.get("http://localhost:3001/items.json").then(({ data }) => {
      dispatch(setPizzas(data.pizzas));
    });
   }
  React.useEffect(() => {
    axios.get("http://localhost:3001/pizzas").then(({ data }) => {
      dispatch(setPizzas(data));
    });
  }, []);
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact></Route>
        <Route path="/Cart" component={Cart} exact></Route>
      </div>
    </div>
  );
}
export default App;
