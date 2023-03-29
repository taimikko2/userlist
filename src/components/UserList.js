import User from "./User";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const UserList = ({ show, toggle }) => {
  const users = useSelector((state) => state.users);

  if (!show) {
    return null;
  }
  return (
    <div>
      <h2>users</h2>
      <div>
        <button onClick={toggle}>add new user</button>
        <p />
      </div>

      <table className="user-table">
        <thead>
          <tr>
            <th className="priority-1">username</th>
            <th className="priority-2">name</th>
            <th className="priority-3">phone</th>
            <th className="priority-4">email</th>
            <th className="priority-5">street</th>
            <th className="priority-5">suite</th>
            <th className="priority-5">city</th>
            <th className="priority-5">zipcode</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <User key={"user_" + user.id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;

UserList.propTypes = {
  show: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};
