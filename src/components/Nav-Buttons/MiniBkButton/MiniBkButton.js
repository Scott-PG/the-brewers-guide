import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MiniBkButton.css";

class MiniBkButton extends Component {
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
      <Link className="mini-bk" to={this.state.linkPath + this.state.number}>
        <button className="mini-bk-btn">{this.state.number}</button>
      </Link>
    );
  }
}

export default MiniBkButton;
