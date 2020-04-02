import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./BkButton.css";
import beerBottleLeft from "./Beer-Left.png";

class BkButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: this.props.linkNumber,
      linkPath: this.props.linkPath
    };
  }

  render() {
    return (
      <Link to={this.state.linkPath + this.state.number}>
        <div className="bb-left">
          <img
            className="bb-image"
            src={beerBottleLeft}
            alt={"Link to part " + this.state.number}
          />
          <p className="bb-left-number">{this.state.number}</p>
        </div>
      </Link>
    );
  }
}

export default BkButton;
