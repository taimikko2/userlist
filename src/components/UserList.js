import User from "./User";

const UserList = ({ users, remove, addUser }) => {
  console.log(users);
  return (
    <div>
      <h2>users</h2>
      <div>
        <button onClick={addUser}>add new user</button>
        <p />
      </div>
      <table id="user-table">
        {users.map((user) => (
          <User key={user.id} user={user} remove={remove} />
        ))}
      </table>
    </div>
  );
};

export default UserList;
