import Link from "next/link";
import React from "react";
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
import { RiSunFill ,RiMoonFill} from "react-icons/ri";
const HeaderLayout = ({ children }) => {
  const [mobile, setMobile] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const theme = useSelector((store) => store.themeReducer.dark_mode);

  useEffect(() => {
    if (window.innerWidth < 1065) {
      setMobile(true);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1065) {
        setMobile(true);
      } else {
        setMobile(false);
        setSidebar(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const _logout = () => {
    router.push("/signup");
  };

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
                <div className="navbar-brand">
                  <img
                    src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"
                    alt="Logo"
                    width="30"
                    height="24"
                    className="d-inline-block align-text-top me-2"
                  />
                  <span>Example</span>
                </div>
              </Link>
              <div className="d-flex align-items-center justify-content-between">
               
                <BorderLessButton
                  color={theme === true ?  "#191970":"#FFDB58"}
                  fsize="1.2rem"
                  onClick={() => dispatch(switchMode())}
                >
              {theme === true ? <RiMoonFill/>:<RiSunFill />}
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
                  <img
                    src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"
                    alt="Logo"
                    width="30"
                    height="24"
                    className="d-inline-block align-text-top me-2"
                  />
                  <span>Example</span>
                </div>
              </Link>
              <div className="ms-auto">
                <button className="btn" onClick={() => setSidebar(!sidebar)}>
                  <BsJustify size="1.5rem" />
                </button>
              </div>
            </div>
          </nav>
        )}
        <Sidebar sidebar={sidebar === true ? "0%" : "-100%"}>
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
