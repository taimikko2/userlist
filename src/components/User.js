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
      <td className="priority-1">{user.username}</td>
      <td className="priority-1">{user.name}</td>
      <td className="priority-2">{user.phone}</td>
      <td className="priority-3">{user.email}</td>
      <td>
        <button className="priority-1" onClick={removeUser}>
          remove
        </button>
      </td>
    </tr>
  );
};

export default User;
