"use client";
import { Children, useTransition } from "react";
import styles from "./Button.module.css";
import { deleteScore } from "@/app/actions/userActions";
type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  scoreId?: number;
};
export const Button = ({
  onClick = () => {},
  children,
  scoreId,
}: ButtonProps) => {
  const [pending, startTransition] = useTransition();
  const onTransicionClick = async () => {
    !pending &&
      startTransition(async () => {
        if (!!scoreId) {
          deleteScore({ scoreId });
        } else {
          onClick();
        }
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
