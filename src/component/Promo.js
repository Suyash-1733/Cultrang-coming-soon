import React from "react";
import "./Promo.css";
import TypeWriterEffect from "react-typewriter-effect";

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="biglogo">
          <img
            src="https://res.cloudinary.com/duvqri8vt/image/upload/c_scale,q_auto:eco/v1647418471/Cultrang22/logo_mjmavn.webp"
            alt=""
          />
          {/* <img src="https://res.cloudinary.com/duvqri8vt/image/upload/v1647418471/Cultrang22/logo_mjmavn.png" alt="" /> */}
        </div>

        <div className="type-text">
        <TypeWriterEffect
          textStyle={{
            fontFamily: "Bebas Neue",
          }}
          startDelay={100}
          cursorColor="white"
          text="Coming Soon..."
          typeSpeed={125}
          loop={false}
        />

      </div>
      </div>
    </div>
  );
}
