import "./navbar.scss"
import React from "react";

export default function NavBar() {
       return (
      <>
        <div className="navbar">
          <div className="logo">
            <img src="logo.svg"/>
            <span>Admin</span>
          </div>
          <div className="icons">
            <img src="/search.svg" alt="" className="icon"/>
            <img src="/app.svg" alt="" className="icon"/>
            <img src="/expand.svg" alt="" className="icon"/>
            <div className="notification">
              <img  src="/notifications.svg" alt=""/>
              <span>1</span>
            </div>
            <div className="user">
              <img src="https://yt3.ggpht.com/yti/ANjgQV8IVzpGug4YbzlFxsD1h0HfMIh5HX2GVm4DuZ-X5VU=s88-c-k-c0x00ffffff-no-rj" alt=""/>Jim
            </div>
            <img src="/settings.svg" alt="" className="icon"/>
          </div>
        </div>
      </>
    )
  }