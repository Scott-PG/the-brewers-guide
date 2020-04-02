import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import MiniListNav from "../Nav-Buttons/MiniListNav/MiniListNav";
import ListNav from "../Nav-Buttons/ListNav/ListNav";
import "./BeerList.css";

class BeerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beerList: null,
      numberOfPages: null,
      thisPage: this.props.match.params.beersId
    };
  }

  const;

  getBeers = async () => {
    const apiKey = "4075498294422bcbd2006da0634066fb";
    const baseURL = "https://sandbox-api.brewerydb.com/v2/";
    const corsURL = "https://cors-anywhere.herokuapp.com/";
    const beersPage = this.props.match.params.beersId;

    axios
      .get(`${corsURL}${baseURL}beers/?p=${beersPage}&key=${apiKey}`)
      .then(resp => {
        let beersObject = resp.data;
        this.setState({
          beerList: beersObject.data,
          numberOfPages: beersObject.numberOfPages
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount = async () => {
    this.setState({ thisPage: this.props.match.params.beersId });
    this.getBeers();
  };

  componentDidUpdate = async () => {
    if (this.state.thisPage !== this.props.match.params.beersId) {
      this.setState({ thisPage: this.props.match.params.beersId });
      this.getBeers();
    }
  };

  buildMiniListNav = () => {
    let thisPage = this.state.thisPage;
    let numberOfPages = this.state.numberOfPages;
    let miniListNav = (
      <MiniListNav
        currentPage={thisPage}
        lastPage={numberOfPages}
        linkPath="/beers/"
      />
    );
    return miniListNav;
  };

  buildListNav = () => {
    let thisPage = this.state.thisPage;
    let numberOfPages = this.state.numberOfPages;
    let listNav = (
      <ListNav
        currentPage={thisPage}
        lastPage={numberOfPages}
        linkPath="/beers/"
      />
    );
    return listNav;
  };

  render() {
    if (this.state.beerList === null) {
      return <h3>Loading...</h3>;
    } else {
      let list = this.state.beerList;
      let miniListNav = this.buildMiniListNav();
      let listNav = this.buildListNav();
      list = list.map((item, idx) => {
        return (
          <Link key={idx} className="beer-link" to={"/beer/" + item.id}>
            <h3 className="beer-link-text">{item.name}</h3>
          </Link>
        );
      });
      return (
        <>
          <h2>The Beer List</h2>
          <div className="beer-link-holder">{list}</div>
          {listNav}
          {miniListNav}
        </>
      );
    }
  }
}
export default BeerList;
