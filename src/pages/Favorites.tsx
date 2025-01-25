import React from "react";
import { Button } from "../components/button";
import { useNavigate } from "react-router-dom";

const Favorites: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Favorites Page</h1>
      <p>These are your favorite movies.</p>
      <Button
        label="Go Home"
        onClick={() => navigate("/")}
        color="blue"
        size="large"
      />
    </div>
  );
};

export default Favorites;
