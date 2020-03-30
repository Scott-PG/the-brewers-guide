const apiKey = "4075498294422bcbd2006da0634066fb";
const baseURL = "https://sandbox-api.brewerydb.com/v2/";
const corsURL = "https://cors-anywhere.herokuapp.com/";

const getBeers = async () => {
  let resp = await axios.get(`${corsURL}${baseURL}beers/?key=${apiKey}`);
  console.log(resp);
};
getBeers();
