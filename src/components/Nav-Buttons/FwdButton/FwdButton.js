import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./FwdButton.css";
import beerBottleRight from "./Beer-Right.png";

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
        <div className="bb-right">
          <img
            className="bb-image"
            src={beerBottleRight}
            alt={"Link to part " + this.state.number}
          />
          <p className="bb-right-number">{this.state.number}</p>
        </div>
      </Link>
    );
  }
}

export default BkButton;
