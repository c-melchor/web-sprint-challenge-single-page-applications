import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Order from "./Order";

const App = () => {
  const initialForm = {
    name: "",
    email: "",
    phone: "",
    check: false,
    special: ""
  };

  const [formState, setFormState] = useState(initialForm);

  const onChange = event => {
    event.persist();
    let valueOf =
      event.target.type === "checkbox"
        ? event.target.check
        : event.target.value;

    setFormState({ ...formState, [event.target.name]: valueOf });
  };

  // onSubmit = (event) => {

  // }

  return (
    <>
      <h1>Lambda Eats</h1>
      <Switch>
        <Route path="/pizza">
          <Order
            formState={formState}
            // errorState={errorState}
            onChange={onChange}
            // onSubmit={onSubmit}/>
          />
        </Route>

        <Route path="/">
          <p>Home</p>
        </Route>
      </Switch>
    </>
  );
};
export default App;
