"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import Button from "../components/Button/Button";

const Game = () => {
  const [counter, setCounter] = useState(0);
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
