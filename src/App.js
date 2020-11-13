import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import formSchema from "./formSchema";
import Home from "./Home";
import Order from "./Order";
// import pizza from "../Assets/Pizza.jpg";

const App = () => {
  const initialForm = {
    name: "",
    email: "",
    phone: "",
    // check: false,
    special: ""
  };

  const defualtErrors = {
    name: "",
    email: "",
    phone: "",
    // check: false,
    special: ""
  };

  const [formState, setFormState] = useState(initialForm);
  const [errorState, setErrorState] = useState(defualtErrors);

  const [order, setOrder] = useState([]);

  const validate = event => {
    //method in yup called reach, which allows us to reach into our schema and test one piece of it
    //.reach(schema, field to validate)
    //in this field(2nd param of reach), validate this data(info in validate method

    let value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    yup
      .reach(formSchema, event.target.name)
      .validate(value)
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

  const onChange = event => {
    event.persist();
    validate(event);
    let valueOf =
      event.target.type === "checkbox"
        ? event.target.check
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
          check: false
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
        <Route path="/pizza">
          <Order
            formState={formState}
            errorState={errorState}
            onChange={onChange}
            onSubmit={onSubmit}
          />
        </Route>

        <Route path="/" component={Home}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
