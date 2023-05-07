import React, { useEffect, useRef, useState } from "react";
import { GrRefresh } from "react-icons/gr";
import { AiOutlineCopy } from "react-icons/ai";

const Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const Lowercase = "abcdefghijklmnopqrstuvwxyz";
const Numbers = "0123456789";
const Special_Characters = "!@#$%&*.";

const Result = ({ count, arr }) => {
  const [mainString, setMainString] = useState("");
  const [result, setResult] = useState("");
  const [copy, setCopy] = useState("Copy");
  const [type, setType] = useState("");
  const typeRef = useRef();

  const GeneratePassword = (c) => {
    const mainLength = mainString.length;

    let st = "";
    for (let i = 0; i < c; i++) {
      st += mainString.charAt(Math.floor(Math.random() * mainLength));
    }
    setResult(st);
    if (arr.length === 4) {
      setType("Strong");
      typeRef.current.style.color = "#198754";
    } else if (arr.length === 3) {
      setType("Medium");
      typeRef.current.style.color = "#ffc107";
    } else {
      setType("Weak");
      typeRef.current.style.color = "#dc3545";
    }
  };

  const Copy = () => {
    setCopy("Copied");
    setTimeout(() => {
      navigator.clipboard.writeText(result);
      setCopy("Copy");
    }, 1000);
  };

  useEffect(() => {
    setMainString("");
    for (let i = 0; i < arr.length; i++) {
      switch (arr[i]) {
        case "Uppercase":
          setMainString((prev) => prev + Uppercase);
          break;
        case "Lowercase":
          setMainString((prev) => prev + Lowercase);
          break;
        case "Numbers":
          setMainString((prev) => prev + Numbers);
          break;
        case "Special Characters":
          setMainString((prev) => prev + Special_Characters);
          break;
        default:
          break;
      }
    }
  }, [arr]);

  return (
    <div className="result">
      <div>
        <span>{result}</span>
        <GrRefresh
          style={{ cursor: "pointer", fontSize: "22px" }}
          onClick={() => GeneratePassword(count)}
        />
      </div>
      <button onClick={Copy}>
        <AiOutlineCopy />
        {copy}
      </button>
      <h5 ref={typeRef}>{result && type}</h5>
    </div>
  );
};

export default Result;
