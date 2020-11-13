import React from "react";
import styled from "styled-components";

const StyledOrderDiv = styled.div`
  height: 90vh;
  background-image: url("https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80");
  /* font-size: 4rem; */
  object-fit: cover;
  background-repeat: no repeat;
  color: white;
  display: flex;
  text-align: center;
  line-height: 2.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;
const sizes = {
  default: "Choose One",
  small: "Small",
  medium: "Medium",
  large: "Large"
};

export default function Order(props) {
  const { onChange, formState, errorState, onSubmit } = props;
  console.log(formState.extraCheese, "extraacheese please!");
  return (
    <StyledOrderDiv>
      <h2>Make your own Pizza</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">
          Name:
          <input
            data-cy="name"
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={onChange}
            value={formState.name}
          />
        </label>
        <p data-cy="name-err" className="error">
          {errorState.name}
        </p>

        <label htmlFor="email">
          Email:
          <input
            data-cy="email"
            type="text"
            name="email"
            placeholder="Enter your e-mail"
            onChange={onChange}
            value={formState.email}
          />
        </label>
        <p data-cy="email-err" className="error">
          {errorState.email}
        </p>

        <label htmlFor="phone">
          Phone Number
          <input
            data-cy="phone"
            type="text"
            name="phone"
            placeholder="Enter your phone #"
            onChange={onChange}
            value={formState.phone}
          />
        </label>
        <p data-cy="phone-err" className="error">
          {errorState.phone}
        </p>

        <select name="sizes" value="{sizes.default}" onChange={onChange}>
          <option value="0">Choose One</option>
          <option data-cy="small" value="small">
            Small
          </option>
          <option data-cy="medium" value="2">
            Medium
          </option>
          <option data-cy="large" value="3">
            Large
          </option>
        </select>

        <div className="toppings">
          <label htmlFor="extraCheese">
            Extra Cheese
            <input
              data-cy="extraCheese"
              type="checkbox"
              name="extraCheese"
              onChange={onChange}
              checked={formState.extraCheese}
            />
          </label>
          <label htmlFor="mushrooms">
            Mushrooms
            <input
              data-cy="mushrooms"
              type="checkbox"
              name="mushrooms"
              onChange={onChange}
              checked={formState.mushrooms}
            />
          </label>
          <label htmlFor="sausage">
            Sausage
            <input
              data-cy="sausage"
              type="checkbox"
              name="sausage"
              onChange={onChange}
              checked={formState.sausage}
            />
          </label>
          <label htmlFor="pineapple">
            Pineapple
            <input
              data-cy="pineapple"
              type="checkbox"
              name="pineapple"
              onChange={onChange}
              checked={formState.pineapple}
            />
          </label>
        </div>

        <label>
          Special Instructions
          <input
            type="textarea"
            name="special"
            onChange={onChange}
            value={formState.special}
          />
        </label>

        <input data-cy="submitBtn" className="submit" type="submit" />
      </form>
    </StyledOrderDiv>
  );
}
