import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/app/components/Button/Button";

export default function Home() {
  return (
    <main className={styles.new_style_my_name}>
      <h1>Menu</h1>
      <h3>admin</h3>
      <br />

      <section className={styles.form_menu}>
        <Button>game</Button>
        <br />
        <Button>edit score</Button>
        <br />
        <Button>logout</Button>
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
