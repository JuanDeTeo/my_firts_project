import styles from "./page.module.css";
import Button from "@/app/components/Button/Button";

export default function Home() {
  return (
    <main className={styles.login}>
      <h1>Register</h1>
      <br />

      <section className={styles.form_login}>
        <div className={styles.input_login}>
          <input
            className={styles.inputs}
            name="username"
            placeholder="Username"
          />
          <input
            className={styles.inputs}
            name="password"
            placeholder="Password"
          />
          <input
            className={styles.inputs}
            name="fullname"
            placeholder="Full name"
          />
        </div>
        <Button>Register</Button>
        <p>
          <a href="/login">Login</a>
        </p>
      </section>
    </main>
  );
}
