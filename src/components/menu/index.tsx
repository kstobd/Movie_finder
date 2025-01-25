import { useNavigate } from "react-router-dom";
import { Button } from "../button";

export const Menu = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "100%",
        height: "70px",
        borderBottom: "1px solid gray",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Button
        label="Главная"
        onClick={() => navigate("/home")}
        color={""}
        size={""}
      />
      <Button
        label="Избранное"
        onClick={() => navigate("/favorites")}
        color={""}
        size={""}
      />
      <Button
        label="Смотрят сейчас"
        onClick={() => navigate("/popular")}
        color={""}
        size={""}
      />
      <Button
        label="О нас"
        onClick={() => navigate("/about")}
        color={""}
        size={""}
      />
    </div>
  );
};
