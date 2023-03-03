import { Width } from "@/src/Styles/globalStyles";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ChapterList from "./ChapterList";

const Home = () => {
  const data = useSelector((store) => console.log(store));

  return (
    <div className="container-fluid">
      <Width width="80%">
       <ChapterList/>

      </Width>
    </div>
  );
};

export default Home;

