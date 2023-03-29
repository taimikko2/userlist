import PropTypes from "prop-types";

const Address = ({
  street,
  setStreet,
  suite,
  setSuite,
  city,
  setCity,
  zipcode,
  setZipcode,
  lat,
  setLat,
  lng,
  setLng
}) => {
  return (
    <div>
      <label className="add-label"></label>
      <div>
        <label className="add-label" htmlFor="label-id-street">
          street
        </label>
        <input
          className="add-user"
          type="text"
          name="street"
          id="label-id-street"
          value={street}
          onChange={(event) => setStreet(event.target.value)}
          title="street address"
        />
      </div>
      <div>
        <label className="add-label" htmlFor="label-id-suite">
          suite
        </label>
        <input
          className="add-user"
          type="text"
          name="suite"
          id="label-id-suite"
          value={suite}
          onChange={(event) => setSuite(event.target.value)}
          title="suite"
        />
      </div>
      <div>
        <label className="add-label" htmlFor="label-id-city">
          city
        </label>
        <input
          className="add-user"
          type="text"
          name="city"
          id="label-id-city"
          value={city}
          onChange={(event) => setCity(event.target.value)}
          title="name of the city"
        />
      </div>
      <div>
        <label className="add-label" htmlFor="label-id-zipcode">
          zipcode
        </label>
        <input
          className="add-user"
          type="text"
          name="zipcode"
          id="label-id-zipcode"
          value={zipcode}
          onChange={(event) => setZipcode(event.target.value)}
          title="zip code"
        />
      </div>
      <div>
        <label className="add-label"></label>
        <div>
          <label className="add-label" htmlFor="label-id-lat">
            lat
          </label>
          <input
            className="add-user"
            type="text"
            name="lat"
            id="label-id-lat"
            value={lat}
            onChange={(event) => setLat(event.target.value)}
            title="latitude value between -90 and 90"
          />
        </div>
        <div>
          <label className="add-label" htmlFor="label-id-lng">
            lng
          </label>
          <input
            className="add-user"
            type="text"
            name="lng"
            id="label-id-lng"
            value={lng}
            onChange={(event) => setLng(event.target.value)}
            title="longitude value between -180 and 180"
          />
        </div>
      </div>
    </div>
  );
};

export default Address;

Address.propTypes = {
  street: PropTypes.string.isRequired,
  setStreet: PropTypes.func.isRequired,
  suite: PropTypes.string.isRequired,
  setSuite: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  setCity: PropTypes.func.isRequired,
  zipcode: PropTypes.string.isRequired,
  setZipcode: PropTypes.func.isRequired,
  lat: PropTypes.string.isRequired,
  setLat: PropTypes.func.isRequired,
  lng: PropTypes.string.isRequired,
  setLng: PropTypes.func.isRequired
};
