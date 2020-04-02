import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./PageCounter.css";

class PageCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: this.props.startValue,
      min: 1,
      max: this.props.max,
      linkPath: this.props.linkPath
    };
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase() {
    let temp = this.state.number + 1;
    this.setState({
      number: temp
    });
  }
  decrease() {
    let temp = this.state.number - 1;
    this.setState({
      number: temp
    });
  }
  render() {
    return (
      <div className="counter-holder">
        <div className="counter">
          <button
            className="ctr-minus"
            onClick={
              this.state.number > this.state.min ? this.decrease : undefined
            }
          >
            -
          </button>
          <p className="ctr-number">{this.state.number}</p>
          <button
            className="ctr-plus"
            onClick={
              this.state.number < this.props.max ? this.increase : undefined
            }
          >
            +
          </button>
        </div>
        <Link to={this.state.linkPath + this.state.number}>
          <button className="ctr-go">Go to Page</button>
        </Link>
      </div>
    );
  }
}

export default PageCounter;
