import React, { useEffect } from "react";
import styled from "styled-components";

const StyledOrderDiv = styled.div`
  font: 4rem;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Order(props) {
  const { onChange, formState, errorState, onSubmit } = props;
  console.log(formState.extraCheese, "extraacheese please!");
  return (
    <StyledOrderDiv>
      <p>HIIIII</p>
      <form onSubmit={onSubmit}>
        <label>
          Name:
          <input
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

        <label>
          Email:
          <input
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

        <label>
          Phone Number
          <input
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

        <select>
          <option value="choose one">Choose One</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>

        <div className="toppings">
          <label>
            Extra Cheese
            <input
              type="checkbox"
              name="extraCheese"
              onChange={onChange}
              checked={formState.extraCheese}
            />
          </label>
          <label>
            Mushrooms
            <input
              type="checkbox"
              name="mushrooms"
              onChange={onChange}
              checked={formState.mushrooms}
            />
          </label>
          <label>
            Sausage
            <input
              type="checkbox"
              name="sausage"
              onChange={onChange}
              checked={formState.sausage}
            />
          </label>
          <label>
            Pineapple
            <input
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

        <button className="submit" type="submit">
          Add to Order
        </button>
      </form>
    </StyledOrderDiv>
  );
}
