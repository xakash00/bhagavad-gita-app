import Link from "next/link";
import React, { useRef } from "react";
import {
  BorderLessButton,
  ChildDiv,
  Header,
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
  const [sidebar, setSidebar] = useState(false);
  const dispatch = useDispatch();
  const theme = useSelector((store) => store.themeReducer.dark_mode);

  const toggleSidebar = () => setSidebar(!sidebar);

  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.code === "Escape") {
        setSidebar(false);
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
                <Text className="navbar-brand" fsize="25px" w="500">
                  Example
                </Text>
              </Link>
              <div className="d-flex align-items-center justify-content-between">
                <BorderLessButton
                  color={theme === true ? "#191970" : "#FFDB58"}
                  fsize="1.2rem"
                  onClick={() => dispatch(switchMode())}
                >
                  {theme === true ? <RiMoonFill /> : <RiSunFill />}
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
                  <Text fsize="25px" w="500">
                    Example
                  </Text>
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
          sidebar={sidebar === true ? "0%" : "-100%"}
        >
          <ul
            onClick={() => setSidebar(false)}
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
