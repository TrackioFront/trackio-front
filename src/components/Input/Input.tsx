import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Input.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  showPasswordToggle?: boolean;
  value?: string; // añadimos la prop 'value' para manejar el estado controlado
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // manejador de cambio
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  type,
  placeholder,
  showPasswordToggle = false,
  error,
  value = "", // usamos una prop para el valor del input
  onChange, // pasamos el manejador de cambio desde el padre
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  // Cambia el tipo de input según el estado del toggle de contraseña
  const inputType = showPassword && showPasswordToggle ? "text" : type;

  return (
    <>
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
    </>
  );
};

export default Input;
