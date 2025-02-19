import styles from "./Button.module.css";

interface ButtonProps {
  className?: string;
  label: string;
  onClick: () => void;
  color?: string;
  size?: string;
  disabled?: boolean;
}

export const Button = ({
  label,
  onClick,
  color = "classic",
  size = "medium",
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      className={`${styles[`btn-${color}`]} ${styles[`btn-${size}`]} ${
        disabled ? styles["btn-disabled"] : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
