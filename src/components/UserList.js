import User from "./User";

const UserList = ({ users, removeUser, addUser }) => {
  return (
    <div>
      <h2>users</h2>
      <div>
        <button onClick={addUser}>add new user</button>
        <p />
      </div>
      <table className="user-table">
        {users.map((user) => (
          <User key={user.id} user={user} remove={removeUser} />
        ))}
      </table>
    </div>
  );
};

export default UserList;
