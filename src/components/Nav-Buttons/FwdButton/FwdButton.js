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

  componentDidUpdate = () => {
    if (this.state.number !== this.props.linkNumber) {
      this.setState({ number: this.props.linkNumber });
    }
    if (this.state.linkPath !== this.props.linkPath) {
      this.setState({ linkPath: this.props.linkPath });
    }
  };

  render() {
    return (
      <Link className="fwd" to={this.state.linkPath + this.state.number}>
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
