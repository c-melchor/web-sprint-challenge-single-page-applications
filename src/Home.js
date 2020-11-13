import React from "react";
import styled from "styled-components";

const StyledDivHome = styled.div`
  font: 4rem;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default function Home() {
  return (
    <StyledDivHome>
      <h1>Welcome to Lambda Eats!</h1>
      <p>Please click on "Order Now" to place your order</p>
      <img
        src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1014&q=80"
        alt="pizza"
      />
    </StyledDivHome>
  );
}
