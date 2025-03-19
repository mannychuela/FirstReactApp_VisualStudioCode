import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: ButtonProps) => {
  return (
    <button onClick={onClick} className={"btn btn-" + color}>
      {children}
    </button>
  );
};

export default Button;
