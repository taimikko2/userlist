import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com/users";

const getAll = async () => {
  const res = await axios.get(baseUrl);
  return res.data;
};

const remove = async (id) => {
  //console.log(id, "remove (users.js)");
  const res = await axios.delete(`${baseUrl}/${id}`);
  return res.data;
};

const create = async (newUser) => {
  const res = await axios.post(baseUrl, newUser);
  //console.log(res.data, "create (users.js)");
  return res.data;
};

export default { getAll, remove, create };
