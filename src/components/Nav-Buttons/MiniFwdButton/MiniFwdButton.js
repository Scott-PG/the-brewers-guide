import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MiniFwdButton.css";

class MiniFwdButton extends Component {
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
      <Link className="mini-fwd" to={this.state.linkPath + this.state.number}>
        <button className="mini-fwd-btn">{this.state.number}</button>
      </Link>
    );
  }
}

export default MiniFwdButton;
