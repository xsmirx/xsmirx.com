import React from "react";
import { LinearProgress, withStyles } from "@material-ui/core";
import styled from "styled-components";

const StyledBlock = styled.div`
  p {
    font-size: 1rem;
  }
`;

const StyledLinearPropgress = withStyles({
  // shit! I need use ThemeProvider for this background-color!
  barColorPrimary: { "background-color": "#00adb5" },
})(LinearProgress);

const MyLinearProgress = ({ skill, value }) => {
  return (
    <StyledBlock>
      <p>{skill}</p>
      <StyledLinearPropgress variant="determinate" value={value} />
    </StyledBlock>
  );
};

export default MyLinearProgress;
