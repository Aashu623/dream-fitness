import React from "react";
import "./Join.css";
function Join() {
  return (
    <div className="Join" id="join-uss">
      <div className="left-j">
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US</span>
        </div>
        <div className="video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Mg71qKLF9Fk?si=k4xo3EQKXPbepa70"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="right-j">
        <form action="" className="email-container">
          <input type="text" name="name" placeholder="Enter your name" />
          <input
            type="text"
            name="phone"
            placeholder="Enter your phone number"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email address"
          />
          <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
}

export default Join;
