import React from "react";
// import axios from "axios";
// import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import { Header } from "./components";
import { Home, Cart } from "./pages";

// import store from "./redux/store";

function App() {
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
