import React, {  useState } from "react";
import Result from "./Result";
import Slider from "@mui/material/Slider";

const CustomSliderStyles = {
  "& .MuiSlider-thumb": {
    color: "#43d1cf",
  },
  "& .MuiSlider-track": {
    color: "#43d1cf",
  },
  "& .MuiSlider-rail": {
    color: "#8bedec",
  },
  "& .MuiSlider-active": {
    color: "#319795",
  },
};

const SelectOptions = [
  "Uppercase",
  "Lowercase",
  "Numbers",
  "Special Characters",
];

const Lower = () => {
  const [count, setCount] = useState(5);
  const [arr, setArr] = useState([]);

  return (
    <div className="lower">
      <Result count={count} arr={arr} />
      <div className="constraints">
        <div className="slider">
          <p>Password Length: {count}</p>
          <Slider
            sx={CustomSliderStyles}
            min={5}
            max={20}
            step={1}
            value={count}
            onChange={(e) => setCount(e.target.value)}
            style={{ width: "95%", alignSelf: "center" }}
          />
        </div>
        <div className="select">
          {SelectOptions.map((select) => (
            <div key={select}>
              <span>{select}</span>
              <input
                type="checkbox"
                value={select}
                onClick={(e) =>
                  arr.find((i) => i === e.target.value)
                    ? setArr((prev) => prev.filter((i) => i !== e.target.value))
                    : setArr((prev) => [...prev, e.target.value])
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lower;
