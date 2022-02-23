import { Fragment } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./Meals/Meals";


function App() {
  return (
    <Fragment>
      <Cart/>
      <Header/>
      <main>
      <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
