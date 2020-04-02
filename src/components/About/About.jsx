import React, { Component } from "react";
import "./About.css";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="about-div">
        <h2>About</h2>
        <p>
          This page is devoted to beer. It uses the Sandbox section of BreweryDB
          to populate all of the data. This page is necessarily incomplete as I
          cannot afford to maintain paid API access for a class project.
          However, as a proof of concept, this page works and works beautifully.
          Check out "Breweries" and "Beers" to get started.
        </p>
        <h3>Credits:</h3>
        <a href="https://www.freepik.com/free-vector/flat-beer-bottle-collection-with-label_1542196.htm#page=1&query=bottle%20label&position=2">
          Beer Bottle Vector Art Created by Freepik
        </a>
      </div>
    );
  }
}

export default About;
