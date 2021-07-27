import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import StyledSection from "../../styles/StyledSection";
import StyledSectionTitle from "../../styles/StyledSectionTitle";
import styled from "styled-components";

const StyledBlock = styled.div`
  display: grid;
  column-gap: 20px;
  grid-template-columns: 3fr 5fr;
  grid-template-rows: 1fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    row-gap: 2vh;
  }
`;

const StyledBlockForImage = styled.div`
  padding: 10px 0;
  text-align: center;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

const StyledTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;
  p {
    text-align: justify;
  }
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const AboutMe = () => {
  return (
    <StyledSection>
      <StyledSectionTitle>
        <h2 id={"about"}>About Me</h2>
      </StyledSectionTitle>

      <StyledBlock>
        <StyledBlockForImage>
          <StaticImage
            src="./../../images/photo.jpg"
            alt="my photo"
            placeholder="blurred"
            imgStyle={{ "border-radius": "4px" }}
            height={370}
          />
        </StyledBlockForImage>
        <StyledTextBlock>
          <p>
            Привет! Меня зовут Иван и я с каждым днем все больше обожаю веб
            технологии. Мое увлечение веб разработкой началось примерно 10 лет
            назад. После того как я случайно в браузере нажал F12 моя жизнь
            перевернулась с ног на голову. В то время я открыл для себя HTML и
            CSS. Это помогало править темы WordPress и верстать лендинги
            друзьям.
          </p>
          <p>
            Последний год я активно обучался веб разработкое, чтобы сделать это
            занятие своей профессией. Углибил знания HTML и CSS, изучил
            JavaScript, освоил React и некоторые библиотеки облегчающие работу с
            ним. Это помогло создать несколько учебных проектов, включая этот
            сайт.
          </p>
          <p>
            Моему интересу к сфере разработки и компьтерных наук сейчас нет
            предела. Бесконечно рад тому, что мне предстоит заниматься
            интересным делом. Сейчас я ищу свою первую работу фронтенд
            разработчиком.
          </p>
        </StyledTextBlock>
      </StyledBlock>
    </StyledSection>
  );
};

export default AboutMe;
