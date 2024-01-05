import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.login}>
      <h1>Login</h1>

      <section className={styles.login_user}>
        <div className={styles.login_input}>
          <input name="username" placeholder="username" />
          <br />
          <input name="password" placeholder="password" />
        </div>

        <button>Login</button>
        <br />
        <a href="/register">Creater user</a>
      </section>
    </main>
  );
}
