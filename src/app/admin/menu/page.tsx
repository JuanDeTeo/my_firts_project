import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/app/components/Button/Button";
import { PrismaClient } from "@prisma/client";
import { deleteScore, logout } from "@/app/actions/userActions";
import { Suspense } from "react";

export default async function Home() {
  const prisma = new PrismaClient();
  const scores = await prisma.score.findMany();
  console.log({ scores });
  return (
    <main className={styles.new_style_my_name}>
      <h1>Menu</h1>
      <h3>admin</h3>
      <br />

      <section className={styles.form_menu}>
        <a href="/game">
          <Button>Game</Button>
        </a>
        <br />

        {scores?.map((score) => (
          <p key={score.id}>
            #{score.userId}:{score.score}
            <Button scoreId={score.id}>Delete score</Button>
          </p>
        ))}

        <br />
        <Button onClick={logout}>logout</Button>
      </section>

      <div className={styles.links}>
        <p>
          <a href="/login">Login</a>
          <br />
          <a href="/register">Register</a>
        </p>
      </div>
    </main>
  );
}
