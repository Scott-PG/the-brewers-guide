import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Beer from "./components/Beer/Beer";
import BeerList from "./components/BeerList/BeerList";
import Brewery from "./components/Brewery/Brewery";
import BreweryList from "./components/BreweryList/BreweryList";
import About from "./components/About/About";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <Link className="home-link" to="/">
            <h1>The Brewer's Guide</h1>
          </Link>
          <nav>
            <Link className="nav-link" to="/breweries/1">
              <h2>Breweries</h2>
            </Link>
            <Link className="nav-link" to="/beers/1">
              <h2>Beers</h2>
            </Link>
            <Link className="nav-link" to="/about">
              <h2>About</h2>
            </Link>
          </nav>
        </header>
        <main>
          <div className="content-pane">
            <Route exact path="/" component={About} />
            <Route path="/about" component={About} />
            <Route
              path="/beers/:beersId"
              render={props => <BeerList {...props} />}
            />
            <Route path="/beer/:beerId" component={Beer} />
            <Route
              path="/breweries/:breweriesId"
              render={props => <BreweryList {...props} />}
            />
            <Route path="/brewery/:breweryId" component={Brewery} />
          </div>
        </main>
        <footer>
          <p>Designed and Built by ScottPG</p>
          <p>Data from BreweryDB</p>
        </footer>
      </div>
    );
  }
}

export default App;
