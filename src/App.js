import axios from "axios";
import React from "react";
import { Route } from "react-router-dom";
import { Header } from "./components";
import { Home, Cart } from "./pages";
import { connect } from "react-redux";
import { setPizzas as setPizzasAction } from "./redux/actions/pizzas";
// import store from "./redux/store";

// function App() {

//   React.useEffect(() => {
//     axios.get('http://localhost:3000/items.json').then(({data})=>{      setPizzas(data.pizzas);
//   }
//     )

//     // fetch("http://localhost:3000/items.json")
//     //   .then((resp) => resp.json())
//     //   .then(json => {
//     //     setPizzas(json.pizzas);
//     //   });
//   }, []);

//   return (
//     <div className="wrapper">
//       <Header />
//       <div className="content">
//         <Route path="/" render={() => <Home items={pizzas} />} exact></Route>
//         <Route path="/Cart" component={Cart} exact></Route>
//       </div>
//     </div>
//   );
// }
class App extends React.Component {
  componentDidMount() {
    axios.get("http://localhost:3000/items.json").then(({ data }) => {
      this.props.dispatch(setPizzasAction(data.pizzas));
    });
  }
  render() {
    console.log(this.props.items);
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route
            path="/"
            render={() => <Home items={this.props.items} />}
            exact
          ></Route>
          <Route path="/Cart" component={Cart} exact></Route>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzasAction(items)),
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
