import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  Categories,
  SortPopup,
  PizzaBlock,
  PizzaLoadingBlock,
} from "../components";
import { fetchPizzas } from "../redux/actions/pizzas";
import { addPizzaToCart } from "../redux/actions/cart";


import { setCategory, setSortBy } from "../redux/actions/filters.js";
const categoriesNames = [
  "Мясные",
  "Вегатарианские",
  "Гриль",
  "Остарые",
  "Закрытые",
];
const sortPopupNames = [
  { name: "популярности", type: "popular", order: "desc" },
  { name: "цене", type: "price", order: "desc" },
  { name: "алфавиту", type: "name", order: "asc" },
];
const amountDefaultPizzasOnPage = 12;

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [sortBy, category]);
  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);
  const onSelectSortByType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const addPizza = obj =>(
    dispatch(addPizzaToCart(obj))
  )

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoriesNames}
        />
        <SortPopup
          activeSortType={sortBy.type}
          items={sortPopupNames}
          onClickSortType={onSelectSortByType}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => (
              <PizzaBlock onClickAddPizza={addPizza} key={obj.id} 
              cartCount={cartItems[obj.id] && cartItems[obj.id].items.length}
              {...obj} />
            ))
          : Array(amountDefaultPizzasOnPage).fill(<PizzaLoadingBlock />)}
      </div>
    </div>
  );
}

export default Home;
