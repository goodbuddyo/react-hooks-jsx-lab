import React from "react";
import {name,city} from "../data/data.js";

function Home() {
  // update the JSX being returned!
  return (
    <div id="home">
      <h1 style={{color: `firebrick`}} >{name} is a Web Developer from {city} </h1>
    </div>
  )
}

// note: in an effor to address an odd h1 error
// I replaced the forked repo files with the original repo files
// but kept the git & github files, I also updated my version of node
// from v 17 to v 16, this seemed to address the h1 error

export default Home;
