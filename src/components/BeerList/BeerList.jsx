import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./BeerList.css";

class BeerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beerList: null,
      numberOfPages: null
    };
  }

  componentDidMount = async () => {
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

  render() {
    if (this.state.beerList === null) {
      return <h3>Loading...</h3>;
    } else {
      let list = this.state.beerList;
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
          <div className="stock-link-holder">{list}</div>
        </>
      );
    }
  }
}
export default BeerList;
