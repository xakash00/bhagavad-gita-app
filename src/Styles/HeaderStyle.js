import styled from "@emotion/styled";
import { ThemeStyled } from "./globalStyles";
// #ffa000!important

export const Header = styled(ThemeStyled)`
  box-shadow: 0px 0px 7px #ccc;
  padding: 2rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
`;
export const HeaderText = styled.div`
  color: #fff;
  font-size: ${p=>p.fsize};
  font-weight: ${p=>p.w};
`;
export const ChildDiv = styled.div`
  margin-top: 5rem;
`;
export const CommentDiv = styled.div`
  width: 80%;
  @media screen and (max-width: 700px) {
    width: 95%;
  }
`;
export const BorderLessButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.color};
  font-size: ${(props) => props.fsize};
  text-align: left;
  padding: 4px 8px 4px 8px;
`;
export const LogoutBtn = styled.button`
  border: 1px solid #ccc;
  border-radius: 4px;
  background: none;
  width: 5rem;
`;
export const NavBtn = styled.button`
  border: none;
  border-radius: 4px;
  background: none;
  width: 5rem;
`;
export const Sidebar = styled.div`
  width: 30%;
  background-color: #fff !important;
  box-shadow: 0px 0px 7px #ccc;
  height: 100rem;
  position: fixed;
  left: ${(props) => props.sidebar};
  transition: all 0.4s;
  z-index: 999;
  padding: 5rem;
  top: 4rem;
`;
