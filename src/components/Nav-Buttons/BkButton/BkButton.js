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
      <Link className="bk" to={this.state.linkPath + this.state.number}>
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
