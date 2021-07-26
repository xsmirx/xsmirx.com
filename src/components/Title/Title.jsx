import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: clamp(2.4rem, 8vw, 4.8rem);
    position: relative;
    display: inline-block;
    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: clamp(0.3rem, 2vw, 1rem);
      bottom: clamp(5px, 10%, 10px);
      left: 0;
      background-color: ${(props) => props.theme.linkColor};
      z-index: -1;
    }
  }
  p {
    max-width: 550px;
    font-size: 1rem;
  }
`;

const Title = () => {
  return (
    <StyledSection>
      <div>
        <p>Hi, my name is</p>
        <h1>Ivan Smirnov</h1>
        <p>
          <i>
            I'm React frontend developer, baised in Saint-Petersburg, Russia
          </i>
        </p>
      </div>
    </StyledSection>
  );
};

export default Title;
