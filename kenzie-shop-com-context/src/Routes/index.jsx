import { Switch, Route } from "react-router-dom";
import CartPages from "../Pages/CartPages/indexCart";
import Home from "../Pages/Home";
export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home type="produtos" />
      </Route>
      <Route path="/carrinho">
        <CartPages type="cart" />
      </Route>
    </Switch>
  );
};
