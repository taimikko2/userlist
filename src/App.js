import "./styles.css";
import userService from "./services/users";
import { useState, useEffect } from "react";
import User from "./components/User";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
/**
 *
 *  ///// KÄYTTÄJIEN HALLINTAPANEELI /////
 *
 *
 * - Hae lista käyttäjistä rajapinnasta: https://jsonplaceholder.typicode.com/users
 *
 * Ominaisuudet:
 *
 * - Käyttäjien listaus
 * - Uuden käyttäjän lisäys lomakkeella
 * - Käyttäjän poisto
 * - Käyttöliittymän ei tarvitse olla graafisesti näyttävä,
 * mutta tulisi olla toimiva ja siisti
 *
 * Tehtävää tehdessä on tärkeää miettiä miten toiminnallisuuksien tulisi toimia
 * hyvin suunnitellussa sovelluksessa.
 * Tärkeintä ei ole se että kaikki ominaisuudet on toteutettu vaan se että toteutus toimii
 * ja on laadukas.
 *
 * Huom! Käyttäjät haetaan rajapinnasta, mutta sen lisäksi ei ole tarvetta tehdä api kutsuja
 *
 * Kun olet tehnyt tehtävän, palauta linkki siihen sähköpostilla osoitteeseen:
 * juha.hietapelto@codemen.fi. Linkin saa oikeasta yläkulmasta (Share->Copy Sandbox link)
 *
 */

export default function App() {
  const [users, setUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(true);

  useEffect(() => {
    userService.getAll().then((user) => setUsers(user));
  }, []);

  const removeUser = async (obj) => {
    try {
      await userService.remove(obj.id).then(() => {
        const id = obj.id;
        const index = users.map((u) => u.id).indexOf(id);
        console.log(index, "index to remove", id, obj.name);
        if (index === -1) {
          console.log(index, "error, index not found");
        }
        setUsers([...users.slice(0, index), ...users.slice(index + 1)]);
      });
    } catch (error) {
      console.log(error, "catched error");
    }
  };

  const addUser = async (obj) => {
    try {
      await userService.create(obj).then((addedUser) => {
        console.log(addedUser, "addUser");
        setUsers(users.concat(addedUser));
        toggleUserForm();
      });
    } catch (error) {
      console.log(error, "catched error");
    }
  };

  const toggleUserForm = () => {
    setShowUsers(!showUsers);
  };

  const showUserList = () => {
    return (
      <div>
        <h2>users</h2>
        <div>
          <button onClick={toggleUserForm}>add new user</button>
          <p />
        </div>
        <table id="user-table">
          {users.map((user) => (
            <User key={user.id} user={user} remove={removeUser} />
          ))}
        </table>
      </div>
    );
  };

  return (
    <div className="App">
      {!showUsers && <UserForm createUser={addUser} cancel={toggleUserForm} />}
      {showUsers && <UserList users={users} addUser={toggleUserForm} remove={removeUser} />}
    </div>
  );
}
