import "./Button.css";

interface ButtonProps {
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
      className={`btn btn-${color} btn-${size}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
