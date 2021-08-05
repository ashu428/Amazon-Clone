import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import LoginPage from "./LoginPage";
import React, { useEffect } from "react";
import { auth } from "./Firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [state, dispatch] = useStateValue();
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
          <Route path="/Login">
            <LoginPage />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
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
