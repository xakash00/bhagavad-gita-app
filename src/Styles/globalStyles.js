import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const GlobalStyles = css`
  body {
    background-color: ${(props) => console.log(props)};
  }
`;

export const ThemeStyled = styled.div`
  background-color: ${(props) =>
    props.theme.mode == true ? "#000" : "#ffa000"};
`;
export const ThemeText = styled.div`
  color: ${(props) => (props.theme.mode == true ? "#000" : "#fff")};
`;
export const Text = styled(ThemeText)`
  font-size: ${(props) => props.fsize ?? "14px"};
  font-family: Montserrat;
  font-weight: ${(props) => props.w ?? 400};
  text-align:left   
`;
export const Width = styled.div`
  width: ${(props) => props.width};
  margin: auto;
`;
