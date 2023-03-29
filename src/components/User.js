import { useDispatch } from "react-redux";
import { deleteUser } from "../reducers/userReducer";
import userService from "../services/users";

const User = ({ user }) => {
  //console.log(user, "<User>");
  const dispatch = useDispatch();

  const removeUser = (event) => {
    //event.preventDefault();
    //console.log(event, "removeUser (User.js)", user.name);
    if (window.confirm("remove " + user.name + " ?")) {
      userService.remove(user.id).then(dispatch(deleteUser(user.id)));
    }
  };

  return (
    <tr>
      <td className="priority-1">{user.username}</td>
      <td className="priority-2">{user.name}</td>
      <td className="priority-3">{user.phone}</td>
      <td className="priority-4">{user.email}</td>
      <td className="priority-5">{user.address.street}</td>
      <td className="priority-5">{user.address.suite}</td>
      <td className="priority-5">{user.address.city}</td>
      <td className="priority-5">{user.address.zipcode}</td>
      <td className="priority-1">
        <button onClick={() => removeUser(user.id)}>remove</button>
      </td>
    </tr>
  );
};

export default User;
