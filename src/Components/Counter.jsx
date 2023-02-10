import React, { useState } from "react";
import Style from "./counter.module.css";

const Counter = props => {
  let [count, setCount] = useState(0);
  let [color, setColor] = useState("");


  let handleCount = () => {
    setCount(count + 1);
  };

  let handleCount1 = () => {
    setCount(count + 1);
   setColor("aqua")
  };

  let [newCendrol, setNewcendrol] = useState(props.newValue);
  console.log(newCendrol);
  // let[newcendrolupda,setnewcendrol]=useState()

  let handleincr = () => {
    setNewcendrol(newCendrol + 10);
  };


  let [bgcolor, setBgcolor] = useState(true);
 

  return (
    <div>
      {/* 1. Design the above shown picture using HTML and CSS a. On Click of Button the counter should be increased and background color of button should be displayed in the circle. */}
      <section id={Style.main}>
        <p>Question1</p>
        <div className={Style.box}>
          <div
            className={Style.circle}
            style={{ background: color === "" ? "" : color }}
          >
            <button>{count}</button>
            <div
              style={{ fontSize: "12px", cursor: "pointer" }}
              onClick={handleCount}
            >
              Click to increase Counter
            </div>
          </div>
        </div>
        <div>
          <button onClick={handleCount1} className={Style.btn}>
            Change Color
          </button>
          {/* //!===============question 1 ends here=============== */}
        </div>

        <div className={Style.new_block}>
          <p>Question2 getting value from component a increment it by 10</p>
          <p className={Style.prop_Block}>{newCendrol}</p>
          <button className={Style.prop_increment} onClick={handleincr}>
            Increment
          </button>
        </div>

        <div
          className={Style.new_block1}
          style={{ backgroundColor: bgcolor ? "orange" : "lightGrey" }}
        >
          <p>Question3.Consider a variable which holds a Boolean value</p>

          <button
            className={Style.prop_increment}
            onClick={() => {
              setBgcolor(!bgcolor);
            }}
          >
            ChangeColor
          </button>
        </div>
      </section>
    </div>
  );
};

export default Counter;
