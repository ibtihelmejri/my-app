import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light d-flex justify-content-between px-4">
      {/* <div className="container-fluid"> */}
      <div>
        {" "}
        <a className="navbar-brand" href="#">
          Esprit (2022 - 2023)
        </a>
      </div>
      <div>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      </div>
      <div className="p-2 d-flex flex-row ">
        <div className="p-2">
          <Avatar
            alt="Remy Sharp"
            src="https://thumbs.dreamstime.com/b/portrait-beautiful-young-girle-standing-against-blue-background-girl-pink-dress-happy-cheery-smiling-cute-posing-isolated-183996935.jpg"
          />
        </div>
        <div className="p-2 d-flex align-items-center">Mejri Ibtihel</div>
      </div>

      {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
  
        </div> */}
      {/* </div> */}
    </nav>
  );
};
