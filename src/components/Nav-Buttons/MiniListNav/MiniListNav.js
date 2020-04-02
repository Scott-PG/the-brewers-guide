import React, { Component } from "react";
import MiniBkButton from "../MiniBkButton/MiniBkButton";
import PageCounter from "../PageCounter/PageCounter";
import MiniFwdButton from "../MiniFwdButton/MiniFwdButton";
import "./MiniListNav.css";

class MiniListNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: this.props.currentPage,
      max: this.props.lastPage,
      linkPath: this.props.linkPath
    };
  }

  render() {
    let backButton =
      this.state.pageNumber > 1 ? (
        <MiniBkButton
          linkNumber={parseInt(this.state.pageNumber) - 1}
          linkPath={this.state.linkPath}
        />
      ) : (
        ""
      );
    let forwardButton =
      this.state.pageNumber < this.state.max ? (
        <MiniFwdButton
          linkNumber={parseInt(this.state.pageNumber) + 1}
          linkPath={this.state.linkPath}
        />
      ) : (
        ""
      );
    return (
      <div className="mini-list-nav">
        {backButton}
        <PageCounter
          startValue={parseInt(this.state.pageNumber)}
          max={parseInt(this.state.max)}
          linkPath={this.state.linkPath}
        />
        {forwardButton}
      </div>
    );
  }
}

export default MiniListNav;
