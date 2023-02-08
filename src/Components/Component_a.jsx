import React, { useState } from "react";
import Counter from "./Counter";

const Component_a = () => {
    let Cendrol = 2;
//   console.log(cendrol);


  return (
    <div>
          <Counter newValue={Cendrol}></Counter>
    </div>
  );
};

export default Component_a;
