import React from "react";
import styled from "styled-components";
import ContactButtons from "../Contacts/ContactButtons";

const StyledSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
        <ContactButtons justifyContent="flex-start" />
      </div>
    </StyledSection>
  );
};

export default Title;
