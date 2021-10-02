import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import LoginPage from "./LoginPage";
import React, { useEffect } from "react";
import { auth } from "./Firebase";
import { useStateValue } from "./StateProvider";
import OrderSummary from "./Orders";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

function App() {
  const [state, dispatch] = useStateValue();

  const promise = loadStripe(
    "pk_test_51JcareSA1D8vzmwGebO9QwEzOywBp6bbCMFL4DOGvajv2gXpeKRBuNzxoN5HBM1sXCh1pVaGr32chRzjtRjIsgNA00EShXTCA4"
  );

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/Orders">
            <Header />
            <OrderSummary />
          </Route>
          <Route path="/Login">
            <LoginPage />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
