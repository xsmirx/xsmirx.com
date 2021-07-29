import { Link } from "gatsby";
import styled from "styled-components";

const HeaderLink = styled(Link)`
  &:hover {
    &::after {
      transition: all 300ms ease;
      transform: scale(1.2);
      transform-origin: bottom center;
      border-radius: 3px;
    }
  }
`;

export default HeaderLink;
