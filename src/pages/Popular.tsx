import React from "react";
import { Button } from "../components/button";
import { useNavigate } from "react-router-dom";

const Popular: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Popular Page</h1>
      <p>These are the popular movies right now.</p>
      <Button
        label="Go Home"
        onClick={() => navigate("/")}
        color="blue"
        size="large"
      />
    </div>
  );
};

export default Popular;
