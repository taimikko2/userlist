import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import User from "./User";

import userReducer from "../reducers/userReducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    users: userReducer
  }
});

describe("User tesing", () => {
  test("render contents", () => {
    const user = {
      id: 99,
      name: "teppo testaaja",
      username: "tepi",
      email: "tepi@no.it",
      address: {
        street: "katu",
        suite: "25 A",
        city: "Gwenborough",
        zipcode: "00021"
      },
      phone: "0100100",
      website: "https://google.fi"
    };
    render(
      <Provider store={store}>
        <User user={user} />
      </Provider>
    );
    const element = screen.getByText("tepi");
    expect(element).toBeDefined();
  });
});
