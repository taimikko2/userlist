const User = ({ user, remove }) => {
  const removeUser = async (event) => {
    event.preventDefault();
    console.log("remove user", user.name);
    if (window.confirm("remove " + user.name + " ?")) {
      await remove(user);
    }
  };

  console.log(user);
  return (
    <tr>
      <td>{user.username}</td>
      <td>{user.name}</td>
      <td>{user.phone}</td>
      <td>{user.email}</td>
      <td>
        <button onClick={removeUser}>remove</button>
      </td>
    </tr>
  );
};

export default User;
