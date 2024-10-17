import React from "react";
import "./Button.scss";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  id?: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type,
  disabled,
  style,
  id
}) => {
  return (
    <button
      id={id}
      className="Button"
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {text}
    </button>
  );
};

export default Button;
