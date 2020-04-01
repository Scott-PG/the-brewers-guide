import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Beer.css";

class Beer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: null
    };
  }

  componentDidMount = async () => {
    const apiKey = "4075498294422bcbd2006da0634066fb";
    const baseURL = "https://sandbox-api.brewerydb.com/v2/";
    const corsURL = "https://cors-anywhere.herokuapp.com/";
    const beerId = this.props.match.params.beerId;

    axios
      .get(`${corsURL}${baseURL}beer/${beerId}/?withBreweries=Y&key=${apiKey}`)
      .then(resp => {
        let beerObject = resp.data.data;
        console.log(beerObject);
        this.setState({
          beer: beerObject
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    if (this.state.beer === null) {
      return <p>Loading...</p>;
    } else {
      let beer = this.state.beer;
      let brewers = beer.breweries;
      brewers = brewers.map((item, idx) => {
        return (
          <Link key={idx} className="brewer-link" to={"/brewery/" + item.id}>
            <p className="brewer-name">{item.name}</p>
          </Link>
        );
      });
      return (
        <div className="beer-info-div">
          <img src={beer.labels.medium} alt="" />
          <h2>{beer.name}</h2>
          {brewers}
          <p>{beer.style.description}</p>
          <p>ABV: {beer.abv}</p>
        </div>
      );
    }
  }
}

export default Beer;
