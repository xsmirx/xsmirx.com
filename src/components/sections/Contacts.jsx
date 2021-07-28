import React from "react";
import StyledSectionTitle from "../../styles/StyledSectionTitle";
import StyledSection from "../../styles/StyledSection";
import styled from "styled-components";

const StyledBlock = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Contacts = () => {
  return (
    <StyledSection>
      <StyledSectionTitle>
        <h2>Contacts</h2>
      </StyledSectionTitle>
      <StyledBlock>
        <p>
          В настоящее время я открыт к пердложениям по работе. Со мной можно
          связаться любым удобым для вас способом, и я обязательно постарась вам
          ответить.
        </p>
        <p>
          <i>
            Пиши мне если хочешь просто поздоровоться, пообщаться или спросить
            совета.
          </i>
        </p>
      </StyledBlock>
    </StyledSection>
  );
};

export default Contacts;
