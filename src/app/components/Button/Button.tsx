"use client";
import { Children, useTransition } from "react";
import styles from "./Button.module.css";
type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
};
export const Button = ({ onClick = () => {}, children }: ButtonProps) => {
  const [pending, startTransition] = useTransition();
  const onTransicionClick = async () => {
    !pending &&
      startTransition(async () => {
        onClick();
      });
  };
  return (
    <div>
      <button className={styles.default_btn} onClick={onTransicionClick}>
        {children}
      </button>
      <br></br>
    </div>
  );
};
export default Button;
