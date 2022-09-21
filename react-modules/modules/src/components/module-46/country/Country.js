function Country(props) {
  return (
    <div className="country-list">
      <h5>Country: {props.country.name.common}</h5>
      <p>Capital: {props.country.capital}</p>
      <p>Continent: {props.country.continents}</p>
      <p>Sub region: {props.country.subregion}</p>
      <p>Population: {props.country.population}</p>
      <img src={props.country.flags.png} alt="country-flag" />
    </div>
  );
}
export default Country;
