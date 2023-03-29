import "./styles.css";
import { useState, useEffect } from "react";

import UserList from "./components/UserList";
import UserForm from "./components/UserForm";

import { initializeUsers } from "./reducers/userReducer";
import { useDispatch } from "react-redux";

export default function App() {
  const [showUsers, setShowUsers] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeUsers());
  }, [dispatch]);

  const toggleUserForm = () => {
    setShowUsers(!showUsers);
  };

  return (
    <div className="App">
      <UserForm show={!showUsers} toggle={toggleUserForm} />
      <UserList show={showUsers} toggle={toggleUserForm} />
    </div>
  );
}

