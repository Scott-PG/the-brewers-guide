import React, { Component } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import "./Brewery.css";

class Brewery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brewery: null
    };
  }

  componentDidMount = async () => {
    const apiKey = "4075498294422bcbd2006da0634066fb";
    const baseURL = "https://sandbox-api.brewerydb.com/v2/";
    const corsURL = "https://cors-anywhere.herokuapp.com/";
    const breweryId = this.props.match.params.breweryId;

    axios
      .get(
        `${corsURL}${baseURL}brewery/${breweryId}/?withLocations=Y&key=${apiKey}`
      )
      .then(resp => {
        let breweryObject = resp.data.data;
        console.log(breweryObject);
        this.setState({
          brewery: breweryObject
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    if (this.state.brewery === null) {
      return <p>Loading...</p>;
    } else {
      let brewery = this.state.brewery;
      let locations = "";
      let breweryImage = "";
      if (brewery.locations != null) {
        locations = brewery.locations.map((item, idx) => {
          return (
            <div key={idx} className="location-div">
              <h4 className="location-name">{item.name}</h4>
              <p>{item.streetAddress}</p>
              <p>
                {item.locality}, {item.region}, {item.postalCode}
              </p>
            </div>
          );
        });
      }
      if (brewery.images != null) {
        breweryImage = (
          <img className="brewery-logo" src={brewery.images.medium} alt="" />
        );
      }
      return (
        <div className="brewery-info-div">
          {breweryImage}
          <h2>{brewery.name}</h2>
          <p>{brewery.description}</p>
          <div className="location-holder">{locations}</div>
        </div>
      );
    }
  }
}

export default Brewery;
