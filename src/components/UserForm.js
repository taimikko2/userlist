import { useState } from "react";

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

const Address = () => {
  return;
  return (
    <div>
      address
      <div>street: Kulas Light</div>
      <div>suite: Apt. 556</div>
      <div>city: Gwenborough</div>
      <div>zipcode: 92998-3874</div>
      <div>
        geo
        <div>lat: -37.3159</div>
        <div>lng: 81.1496</div>
      </div>
    </div>
  );
};

const UserForm = (param) => {
  const { createUser, cancel } = param;
  console.log("<UserForm>");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");

  const addUser = async (event) => {
    event.preventDefault();
    console.log(event, "addUser");
    // jostain syystä user.id tulee backendistä aina 11 ?
    const userToAdd = {
      name: name,
      username: username,
      email,
      phone,
      website
    };
    console.log("todo: createUser");
    await createUser(userToAdd);
    setName("");
    setUsername("");
    setEmail("");
    setPhone("");
    setWebsite("");
  };

  const handleCancel = async (event) => {
    console.log(event, "handleCancel");
    setName("");
    setUsername("");
    setEmail("");
    setPhone("");
    setWebsite("");
    cancel();
  };

  return (
    <div>
      <h2>create new user</h2>
      <form onSubmit={addUser}>
        <div>
          <label for="username">username: </label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            pattern="[A-Za-z]{3,12}"
            title="username bust be 3 to 12 characters"
            requred
          />
        </div>
        <div>
          <label for="name">name: </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label for="email">email: </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label for="phone">phone: </label>
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            pattern="[0-9 -]+"
            title="phone number has only numbers (03-111)"
          />
        </div>
        <div>
          <label for="website">website: </label>
          <input
            type="text"
            name="website"
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
            pattern="https?://.+"
            title="website must begin with http:// or https://"
          />
        </div>
        <Address />
        <Company />
        <button type="submit" id="create-button">
          add user
        </button>{" "}
        <button type="button" id="cancel-button" onClick={handleCancel}>
          cancel
        </button>
      </form>
    </div>
  );
};

export default UserForm;
