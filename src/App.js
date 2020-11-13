import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import formSchema from "./formSchema";
import Home from "./Home";
import Order from "./Order";
// import styled from "styled-components";

const App = () => {
  const initialForm = {
    name: "",
    email: "",
    phone: "",
    sizes: "",
    extraCheese: false,
    mushrooms: false,
    sausage: false,
    pineapple: false,
    special: ""
  };

  const defualtErrors = {
    name: "",
    email: "",
    phone: "",
    sizes: "",
    extraCheese: "",
    mushrooms: "",
    sausage: "",
    pineapple: "",
    special: ""
  };

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [formState, setFormState] = useState(initialForm);
  const [errorState, setErrorState] = useState(defualtErrors);

  const [order, setOrder] = useState([]);

  const validate = event => {
    let valueOf =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    yup
      .reach(formSchema, event.target.name)
      .validate(valueOf)
      .then(valid => {
        setErrorState({ ...errorState, [event.target.name]: "" });
      })
      .catch(err => {
        //have to use err.errors will log the messages inside your error. NEED THIS
        setErrorState({
          ...errorState,
          [event.target.name]: err.errors[0]
        });
      });
  };

  useEffect(() => {
    formSchema.isValid(formState).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [formState]);

  const onChange = event => {
    event.persist();
    validate(event);
    let valueOf =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    setFormState({ ...formState, [event.target.name]: valueOf });
  };

  const onSubmit = event => {
    event.preventDefault();
    console.log(event.target, "event here!!!");
    axios
      .post("https://reqres.in/api/order", formState)
      .then(res => {
        setOrder(arr => [...arr, res.data]);
        setFormState({
          name: "",
          email: "",
          phone: "",
          special: "",
          extraCheese: "",
          sausage: "",
          pineapple: "",
          mushrooms: ""
        });
        // setUsers(res.data.data); //need to see what data will look like first***************************
      })
      .catch(err => {
        console.log(err, "error");
      });
  };

  return (
    <div className="App">
      <h1>Lambda Eats Pizza</h1>
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pizza">Order Now</Link>
        </li>
      </ul>

      <div>{order.length > 0 && JSON.stringify(order)}</div>

      <Switch>
        <Route exact path="/pizza">
          <Order
            buttonDisabled={buttonDisabled}
            formState={formState}
            errorState={errorState}
            onChange={onChange}
            onSubmit={onSubmit}
          />
        </Route>

        <Route exact path="/" component={Home}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
