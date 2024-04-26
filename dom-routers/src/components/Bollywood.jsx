import React from "react";
import { Link, Outlet } from "react-router-dom";

function Bollywood() {
  return (
    <div>
      <nav>
        {/* <Link to={"/boli/1023"}>1023</Link> */}
        <Link to={"/boli/1022"}>1022</Link>
        <Link to={"/boli/1021"}>1021</Link>
        <Link to={"/boli/1020"}>1020</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Bollywood;
