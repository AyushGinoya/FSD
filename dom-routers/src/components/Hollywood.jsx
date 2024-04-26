import React from "react";
import { Link, Outlet } from "react-router-dom";

function Hollywood() {
  return (
    <div>
      <nav>
        {/* <Link to={"/holi/2023"}>2023</Link> */}
        <Link to={"/holi/2022"}>2022</Link>
        <Link to={"/holi/2021"}>2021</Link>
        <Link to={"/holi/2020"}>2020</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Hollywood;
