import React from "react";
import { Button } from "../components/button";
import { useNavigate } from "react-router-dom";

const About: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the About page of our application.</p>
      <Button
        label={"Нажми на меня и попадешь домой"}
        onClick={() => navigate("/")}
        color={"red"}
        size={"medium"}
      ></Button>
    </div>
  );
};

export default About;
