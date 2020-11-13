import React, { useEffect } from "react";

export default function Order(props) {
  const { onChange, formState } = props;

  return (
    <div className="orderDiv">
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
    </div>
  );
}
