// WelcomePage.js (avec animation)
import React, { useEffect, useState } from "react";
import { Button, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import backgroundImage from "../../assets/welcome_background.jpg";
import "./Welcome.css";

const WelcomePage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [isTextVisible, setTextVisibility] = useState(false);
  const redirectToHome = () => {
    navigate("/home");
  };

  const animationProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 2000 }, // Duration of the animation in ms
  });

  useEffect(() => {
    setTimeout(() => {
      setTextVisibility(true);
    }, 1000);
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <animated.div style={animationProps} className="welcome-page">
        <h1 className="welcome-heading">
          Welcome to Our Cryptocurrency Platform
        </h1>
        <p className="welcome-description">
          Discover the latest trends and follow cryptocurrencies.
        </p>

        <Button variant="contained" color="secondary" onClick={redirectToHome}>
          Access the Interface
        </Button>
      </animated.div>
    </div>
  );
};

export default WelcomePage;
