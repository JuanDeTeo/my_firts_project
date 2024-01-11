"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState, useTransition } from "react";
import Button from "../components/Button/Button";
import { submit } from "../actions/userActions";

const Game = () => {
  const [counter, setCounter] = useState(0);
  const [pending, startTransition] = useTransition();

  const onSubmit = async () => {
    !pending &&
      startTransition(async () => {
        const scoreId = await submit({ score: counter });
        if (scoreId > -1) {
          console.log("SAVE");
          setCounter(0);
        } else {
          console.log("Error");
        }
      });
  };

  return (
    <main className={styles.game}>
      <h1>Game click</h1>
      <br />

      <section className={styles.form_game}>
        <Button onClick={() => setCounter((counter) => counter + 1)}>
          click
        </Button>
        <div className={styles.score_game}>
          <p>Score</p>
          <br />
          <span>{counter}</span>
          <br />
          <br />
          {pending && <span>Saving...</span>}
          {!pending && <Button onClick={onSubmit}>Save</Button>}
        </div>
      </section>

      <div className={styles.links}>
        <p>
          <a href="/menu">Exit</a>
        </p>
      </div>
    </main>
  );
};
export default Game;
