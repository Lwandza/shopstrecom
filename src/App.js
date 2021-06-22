import React, {useEffect} from "react"
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Orders from './components/Orders/Orders';
import {  BrowserRouter as Router,   Switch,   Route,   Link } from "react-router-dom";
import Login from './components/Login/Login';
import { auth } from "./firebase";
import { useStateVale } from "./Provider/StateProvider";
import Payment from "./components/Payment/Payment";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js"

const promise = loadStripe("pk_test_51IoR6OH6MOzWeMSYhvoe2Ycoxrb8sr41MEBuD9xYiZ5CDYTBkeBAb0kLHLrzQnr4BoQt5NU595RFIy1FNKN6j4Hn00crQOxzZf");

function App() {

  const [{}, dispatch] = useStateVale()

  useEffect(() => {
    auth.onAuthStateChanged(authUser =>{
      console.log("THE USER IS >>> ", authUser);

      if (authUser){

        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else{
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
       
        <Switch>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/orders">
              <Header/>
              <Orders/>
            </Route>
            <Route path="/payment">
              <Header/>
              <Elements stripe={promise}>
                <Payment/>
              </Elements>
              
            </Route>
            <Route path="/checkout">
              <Header/>
              <Checkout/>
            </Route>
            <Route path="/">
              <Header/>
              <Home/>
            </Route>
        </Switch>
      
      </div>
    </Router>
    
  );
}

export default App;
