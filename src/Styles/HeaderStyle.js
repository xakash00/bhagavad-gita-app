import styled from "@emotion/styled";
// #ffa000!important

export const Header = styled.div`
  box-shadow: 0px 0px 7px #ccc;
  padding: 2rem 20rem 2rem 20rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
  background-color: #ffa000 !important
;
`;
export const ThemeWrapper = styled.div`
  background-color: ${(props) => props.theme ?? "#fff"};
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
box-shadow: 0px 0px  7px #ccc ;
  height: 100rem;
  position: fixed;
  left: ${(props) => props.sidebar};
  transition: all 0.4s;
  z-index: 999;
  padding: 5rem;
  top: 4rem;
`;
