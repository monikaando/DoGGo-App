import React from "react";
import "./App.scss";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import RandomDogFact from "./components/RandomDogFact";
import AllDogsFacts from "./components/AllDogsFacts";
import MadeBy from "./components/MadeBy";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App d-md-flex d-flex flex-column flex-md-row justify-content-around">
      <MadeBy />
      <div className="mt-2 mt-md-5 pt-5">
        <Navbar />
      </div>
      <div className="content mt-5 mb-5 pt-5">
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/random-dog-fact" component={RandomDogFact}></Route>
        <Route exact path="/all-dogs-facts" component={AllDogsFacts}></Route>
      </div>
    </div>
  );
}

export default App;
