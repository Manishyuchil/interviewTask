import React, { useState } from "react";
import Style from "./counter.module.css";

const Counter = props => {
  let [count, setCount] = useState(0);
  let [color, setColor] = useState("aqua");

  let handleCount = () => {
    setCount(count + 1);
  };

  let [newcendrol, setnewcendrol] = useState(props.newValue);
  console.log(newcendrol);
  // let[newcendrolupda,setnewcendrol]=useState()

  let handleincr = () => {
    setnewcendrol(newcendrol + 10);
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
            style={{ backgroundColor: count > 0 ? color : "yellow" }}
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
          <button onClick={handleCount} className={Style.btn}>
            Change Color
          </button>
          {/* //!===============question 1 ends here=============== */}
        </div>

        <div className={Style.new_block}>
          <p>Question2 getting value from component a increment it by 10</p>
          <p className={Style.prop_Block}>{newcendrol}</p>
          <button className={Style.prop_increment} onClick={handleincr}>
            Increment
          </button>
        </div>

        <div className={Style.new_block1} style={{backgroundColor:bgcolor?"orange":"lightGrey"}}>
          <p>Question3.Consider a variable which holds a Boolean value</p>


          <button className={Style.prop_increment} onClick={()=>{setBgcolor(!bgcolor)}} >
            ChangeColor
          </button>
        </div>
      </section>
    </div>
  );
};

export default Counter;
