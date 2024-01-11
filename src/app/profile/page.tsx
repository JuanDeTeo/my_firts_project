import { PrismaClient } from "@prisma/client";
import styles from "./page.module.css";
import Button from "@/app/components/Button/Button";
import { cookies } from "next/headers";

export default async function Home() {
  const prisma = new PrismaClient();
  const userId = parseInt(cookies().get("userId")?.value || "0");
  const user = await prisma.user.findUnique({
    include: { Score: true },
    where: { id: userId },
  });
  return (
    <main className={styles.profile}>
      <h1>Profile</h1>
      <br />

      <section className={styles.form_profile}>
        <h1>HOLA</h1>
        <section className={styles.info_user}>
          <h2>{user?.fullname} </h2>
          {user?.admin && <span>(Admin)</span>}

          {user?.Score.map((score) => (
            <p key={score.id}>#{score.score}</p>
          ))}
        </section>
        <section className={styles.score_user}>
          <h2>score</h2>
        </section>
      </section>

      <div className={styles.links}>
        <a href="/menu">Menu</a>
      </div>
    </main>
  );
}
