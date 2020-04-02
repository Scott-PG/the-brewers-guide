import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./BreweryList.css";

class BreweryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breweryList: null,
      numberOfPages: null
    };
  }

  componentDidMount = async () => {
    const apiKey = "4075498294422bcbd2006da0634066fb";
    const baseURL = "https://sandbox-api.brewerydb.com/v2/";
    const corsURL = "https://cors-anywhere.herokuapp.com/";
    const breweryPage = this.props.match.params.breweriesId;

    axios
      .get(`${corsURL}${baseURL}breweries/?p=${breweryPage}&key=${apiKey}`)
      .then(resp => {
        let breweriesObject = resp.data;
        this.setState({
          breweryList: breweriesObject.data,
          numberOfPages: breweriesObject.numberOfPages
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidUpdate = async () => {
    if (this.state.thisPage !== this.props.match.params.breweriesId) {
      this.setState({ thisPage: this.props.match.params.breweriesId });
      const apiKey = "4075498294422bcbd2006da0634066fb";
      const baseURL = "https://sandbox-api.brewerydb.com/v2/";
      const corsURL = "https://cors-anywhere.herokuapp.com/";
      const breweryPage = this.props.match.params.breweriesId;

      axios
        .get(`${corsURL}${baseURL}breweries/?p=${breweryPage}&key=${apiKey}`)
        .then(resp => {
          let breweriesObject = resp.data;
          this.setState({
            breweryList: breweriesObject.data,
            numberOfPages: breweriesObject.numberOfPages
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  render() {
    let list = this.state.breweryList;
    if (this.state.breweryList === null) {
      return <h3>Loading...</h3>;
    } else {
      list = list.map((item, idx) => {
        return (
          <Link key={idx} className="brewery-link" to={"/brewery/" + item.id}>
            <h2 className="brewery-name">{item.name}</h2>
          </Link>
        );
      });
      return <div className="brewery-link-holder">{list}</div>;
    }
  }
}

export default BreweryList;
