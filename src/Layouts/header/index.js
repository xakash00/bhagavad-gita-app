import Link from "next/link";
import React, { useRef } from "react";
import {
  BorderLessButton,
  ChildDiv,
  Header,
  HeaderText,
  Sidebar,
} from "../../Styles/HeaderStyle";
import { useEffect, useState } from "react";
import { BsJustify } from "react-icons/bs";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { switchMode } from "@/src/redux/actions/themeAction";
import { RiSunFill, RiMoonFill } from "react-icons/ri";
import { Text } from "@/src/Styles/globalStyles";
import UseResponsive from "./useResponsive";
import UseOutsideAlerter from "./useOutsideAlterter";

const HeaderLayout = ({ children }) => {
  const mobile = UseResponsive();
  let outSideClickRef = useRef(null);
  const sidebar = useSelector(store=>store.sidebarReducer);
  console.log(sidebar)
  const dispatch = useDispatch();
  const theme = useSelector((store) => store.themeReducer.dark_mode);

  const toggleSidebar = () => {
      dispatch({type:"toggle"})
  };

  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.code === "Escape") {
        dispatch({type:"close"})
      }
    }
    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, []);

  return (
    <>
      <Header>
        {!mobile && (
          <nav className="navbar fixed-top">
            <div className="container-fluid">
              <Link href="/">
                <HeaderText
                  onClick={() => dispatch({ type: "close" })}
                  fsize="25px"
                  w="500"
                >
                  Example
                </HeaderText>
              </Link>
              <div className="d-flex align-items-center justify-content-between">
                <BorderLessButton
                  color={theme === true ? "#FFDB58" : "#191970"}
                  fsize="1.2rem"
                  onClick={() => dispatch(switchMode())}
                >
                  {theme === true ? <RiSunFill /> : <RiMoonFill />}
                </BorderLessButton>
              </div>
            </div>
          </nav>
        )}
        {mobile && (
          <nav className="navbar fixed-top">
            <div className="container-fluid">
              <Link href="/">
                <div className="navbar-brand">
                  <HeaderText fsize="25px" w="500">
                    Example
                  </HeaderText>
                </div>
              </Link>
              <div className="ms-auto">
                <BorderLessButton onClick={toggleSidebar}>
                  <BsJustify color="#fff" size="1.5rem" />
                </BorderLessButton>
              </div>
            </div>
          </nav>
        )}
        <Sidebar
          ref={outSideClickRef}
          sidebar={sidebar.isOpen === true ? "0%" : "-100%"}
        >
          <ul
              onClick={() => dispatch({ type: "toggle" })}
            className="list-group list-group-flush"
          >
            <li className="list-group-item">
              <Link href="/">
                <div className="text-center">Home</div>
              </Link>
            </li>
          </ul>
        </Sidebar>
      </Header>
      <ChildDiv className="">{children}</ChildDiv>
    </>
  );
};

export default HeaderLayout;

// https://www.omdbapi.com/?s=iron&page=2&apikey=b5ac6ea2
