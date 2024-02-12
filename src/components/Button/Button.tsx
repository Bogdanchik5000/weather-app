import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

function Button({ children, className, ...props }: ButtonsProps) {
  return (
    <button {...props} className={`${className} ${styles["btn"]}`}>
      {children}
    </button>
  );
}

export default Button;
