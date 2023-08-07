import React from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { useEffect } from "react";
import { auth } from "./firebase";

function App() {
  const user = null;
  useEffect(() => {
    const unSubscribe=auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        console.log(authUser)
      }else{
        console.log("signeout")
      }
      return unSubscribe;
    })
  }, []);
  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
