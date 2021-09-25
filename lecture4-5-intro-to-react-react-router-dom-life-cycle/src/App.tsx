import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Common/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import ProductDetails from "./components/ProductDetails";

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={About} path="/about-us" exact />
          <Route component={Contact} path="/contact-us" exact />
          <Route component={ProductDetails} path="/products/:id" exact />
        </Switch>
      </React.Fragment>
    );
  }
}
