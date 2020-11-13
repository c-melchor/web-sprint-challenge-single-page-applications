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
  const { onChange, formState, errorState } = props;

  return (
    <StyledOrderDiv>
      <p>HIIIII</p>
      <form>
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
            <input type="checkbox" />
          </label>
          <label>
            Mushrooms
            <input type="checkbox" />
          </label>
          <label>
            Sausage
            <input type="checkbox" />
          </label>
          <label>
            Pineapple
            <input type="checkbox" />
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

        <button type="submit">Add to Order</button>
      </form>
    </StyledOrderDiv>
  );
}
