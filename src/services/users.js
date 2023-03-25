import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com/users";

const getAll = () => {
  const req = axios.get(baseUrl);
  return req.then((res) => res.data);
};

const remove = async (id) => {
  const req = await axios.delete(`${baseUrl}/${id}`);
  return req.data;
};

const create = async (newUser) => {
  const res = await axios.post(baseUrl, newUser);
  console.log(res.data, "create (new user)");
  return res.data;
};

export default { getAll, remove, create };
