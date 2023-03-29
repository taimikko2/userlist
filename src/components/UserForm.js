import { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewUser } from "../reducers/userReducer";
import userService from "../services/users";
import PropTypes from "prop-types";
import Address from "./Address";

const Company = () => {
  return;
  return (
    <div>
      <div>company</div>
      <div>name: Romaguera-Crona</div>
      <div>catchPhrase: Multi-layered client-server neural-net</div>
      <div>bs: harness real-time e-markets</div>
    </div>
  );
};

const UserForm = ({ show, toggle }) => {
  const dispatch = useDispatch();
  // User
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  // Address
  const [street, setStreet] = useState("");
  const [suite, setSuite] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  // geo
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  // company

  const resetValues = () => {
    setName("");
    setUsername("");
    setEmail("");
    setPhone("");
    setWebsite("");
    setStreet("");
    setSuite("");
    setCity("");
    setZipcode("");
    setLat("");
    setLng("");
  };

  const addUser = async (event) => {
    event.preventDefault();
    //console.log(event, "addUser");
    const userToAdd = {
      name,
      username,
      email,
      phone,
      website,
      address: {
        street,
        suite,
        city,
        zipcode,
        geo: {
          lat,
          lng
        }
      }
    };

    var addedUser = await userService.create(userToAdd);
    // backend gives allways 11
    if (!addedUser.hasOwnProperty("id") || addedUser.id <= 11) {
      const id = Math.floor(Math.random() * 99999900) + 100;
      addedUser.id = id;
    }
    dispatch(createNewUser(addedUser));

    resetValues();
    toggle();
  };

  const handleCancel = async (event) => {
    resetValues();
    toggle();
  };

  if (!show) {
    return null;
  }

  return (
    <div>
      <h2>create new user</h2>
      <form onSubmit={addUser}>
        <div>
          <label className="add-label" htmlFor="label-id-username">
            username
          </label>
          <input
            className="add-user"
            type="text"
            name="username"
            id="label-id-username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            pattern="[A-Za-z]{3,12}"
            title="username must be 3 to 12 characters"
            required={true}
          />
        </div>
        <div>
          <label className="add-label" htmlFor="label-id-name">
            name
          </label>
          <input
            className="add-user"
            type="text"
            name="name"
            id="label-id-name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            title="name of the user"
          />
        </div>
        <div>
          <label className="add-label" htmlFor="label-id-email">
            email
          </label>
          <input
            className="add-user"
            type="email"
            name="email"
            id="label-id-email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            title="email address like user@company.com"
          />
        </div>
        <div>
          <label className="add-label" htmlFor="label-id-phone">
            phone
          </label>
          <input
            className="add-user"
            type="tel"
            name="phone"
            id="label-id-phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            pattern="[0-9 -]+"
            title="phone number has only numbers (03-111)"
          />
        </div>
        <div>
          <label className="add-label" htmlFor="label-id-website">
            website
          </label>
          <input
            className="add-user"
            type="text"
            name="website"
            id="label-id-website"
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
            pattern="https?://.+"
            title="website must begin with http:// or https://"
          />
        </div>
        <Address
          street={street}
          setStreet={setStreet}
          suite={suite}
          setSuite={setSuite}
          city={city}
          setCity={setCity}
          zipcode={zipcode}
          setZipcode={setZipcode}
          lat={lat}
          setLat={setLat}
          lng={lng}
          setLng={setLng}
        />
        <Company />
        <p />
        <button type="submit" id="create-button">
          add user
        </button>
        <button
          type="button"
          id="cancel-button"
          onClick={handleCancel}
          className="add-button"
        >
          cancel
        </button>
      </form>
    </div>
  );
};

export default UserForm;

UserForm.propTypes = {
  show: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};
