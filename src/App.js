import React,{useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Header from './Header';
import Login from './Login';
import {auth} from './firebase';
import {useStateValue} from './StateProvider';
import Checkout from './Checkout';
import Payment from './Payment';

function Error(){
  return(
    <div className="error">
      <h1>The Endpoint does not exist</h1>
    </div>
  );
}
/*<Route path="/" component={Home}></Route> is an older way of rendering. BUT, it still works*/
function App() {
  const [{basket,user},dispatch]=useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Header />
            <Home />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Payment />
          </Route>

          <Route>
            <Error />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
