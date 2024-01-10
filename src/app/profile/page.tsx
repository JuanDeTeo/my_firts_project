import { PrismaClient } from "@prisma/client";
import styles from "./page.module.css";
import Button from "@/app/components/Button/Button";

export default async function Home() {
  const prisma = new PrismaClient();
  const users = await prisma.user.findMany();
  return (
    <main className={styles.profile}>
      <h1>Profile</h1>
      <br />

      <section className={styles.form_profile}>
        <h1>HOLA</h1>
        <section className={styles.info_user}>
          <h2>info_user: </h2>info_user
          {users.map((user) => (
            <span>{user.fullname}</span>
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
