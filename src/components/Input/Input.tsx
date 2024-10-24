import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Input.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  showPasswordToggle?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  type,
  placeholder,
  showPasswordToggle = false,
  error,
  value,
  onChange,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = showPassword && showPasswordToggle ? "text" : type;

  return (
    <div className="Input-wrapper">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        name={name}
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...rest}
        className={`Input ${error ? "input-error" : ""}`}
      />
      {showPasswordToggle && (
        <span
          className="password-toggle-icon"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      )}
      {error && <span className="error-text">{error}</span>}
    </div>
  );
};

export default Input;
