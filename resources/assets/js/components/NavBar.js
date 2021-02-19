import React from "react";
import Axios from "axios";

const NavBar = () => {
  const logout = async () => {
    let headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`
    };

    let res = await Axios.post("api/logout", null, { headers });
    let data = res.data;
    if (data.res == true) {
      localStorage.setItem("token", "");
      window.location = "/";
    } else {
      alert(data.message);
    }
  }

  return (
    <div className="navBar">
      <a href="#" onClick={() => logout()}>
        Logout
      </a>
    </div>
  );
};

export default NavBar;
