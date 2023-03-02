import { Width } from "@/src/Styles/globalStyles";
import { customStyles } from "@/src/Styles/SelectStyles";
import React from "react";
import Select from "react-select";

const Home = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div className="container">
      <Width width="60%">
        <div className="row">
          <div className="col-6 col-md-6 col-sm-12">
            <Select
              styles={customStyles}
              options={options}
              components={{ IndicatorSeparator: null }}
            />
          </div>
          <div className="col-6 col-md-6 col-sm-12">
            <Select
              styles={customStyles}
              options={options}
              components={{ IndicatorSeparator: null }}
            />
          </div>
        </div>
       
      </Width>
    </div>
  );
};

export default Home;
