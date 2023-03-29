import userReducer from "./userReducer";
import deepFreeze from "deep-freeze";

describe("userReducer", () => {
  test("returns new state with action NEW_USER", () => {
    const state = [];
    const action = {
      type: "users/createNewUser",
      payload: {
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
      }
    };

    deepFreeze(state);
    const newState = userReducer(state, action);

    expect(newState).toHaveLength(1);
    expect(newState).toContainEqual(action.payload);
  });
});
