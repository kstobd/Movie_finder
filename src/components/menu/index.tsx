import { useNavigate } from "react-router-dom";
import { Button } from "../button";
import styles from "./Menu.module.css";

export const Menu = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.menu}>
      <Button
        label="Главная"
        onClick={() => navigate("/")}
        className={styles.menuButton}
        size="large"
      />
      <Button
        label="Избранное"
        onClick={() => navigate("/favorites")}
        className={styles.menuButton}
        size="large"
      />
      <Button
        label="Смотрят сейчас"
        onClick={() => navigate("/popular")}
        
        className={styles.menuButton}
        size="large"
      />
      <Button
        label="О нас"
        onClick={() => navigate("/about")}
        className={styles.menuButton}
        size="large"
      />
    </div>
  );
};
