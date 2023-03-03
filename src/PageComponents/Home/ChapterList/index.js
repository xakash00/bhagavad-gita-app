
import { Text } from "@/src/Styles/globalStyles";
import { BorderLessButton } from "@/src/Styles/HeaderStyle";
import { Margin, RippleCard } from "@/src/Styles/HomeStyles";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ChapterList = () => {
  const data = useSelector((store) => store.getChapterReducer.chapterData);
  return (
    <div className="row">
      {data.map((i, n) => {
        return <ChapterCard i={i} key={i.chapter_number} />;
      })}
    </div>
  );
};

export default ChapterList;

const ChapterCard = ({ i }) => {
  const dispatch = useDispatch();
  const readMore = (str) => {
    return str.slice(0, 150);
  };
  return (
    <div className="col-md-6 col-xl-4 col-sm-12">
      <RippleCard>
        <div className="">
          <Text className="me-2" fsize="17px" w="500">
            <div>
              {i.chapter_number}. {i.translation}
            </div>
          </Text>
          <Margin />
          <Text fsize="14px" w="400">
            {readMore(i.summary.en)}
            <BorderLessButton
              color="#fff"
              onClick={() => {
                dispatch({ type: "HINDI" });
              }}
            >
              Read More...
            </BorderLessButton>
          </Text>
        </div>
      </RippleCard>
    </div>
  );
};
