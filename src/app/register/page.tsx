"use client";
import { useState, useTransition } from "react";
import styles from "./page.module.css";
import Button from "@/app/components/Button/Button";
import { useRouter } from "next/navigation";
import { create, login } from "../actions/userActions";

export default function Home() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [email, getEmail] = useState("");
  const [password, getPassword] = useState("");
  const [fullname, getFullname] = useState("");

  const onCreate = async () => {
    !pending &&
      startTransition(async () => {
        const userId = await create({ email, password, fullname });
        if (userId > -1) {
          console.log("Exito");
          router.push("/menu");
        } else {
          console.log("Error");
        }
      });
  };

  return (
    <main className={styles.login}>
      <h1>Register</h1>
      <br />

      <section className={styles.form_login}>
        <div className={styles.input_login}>
          <input
            className={styles.inputs}
            name="email"
            placeholder="Email"
            onChange={(e) => getEmail(e.currentTarget.value)}
          />
          <input
            className={styles.inputs}
            name="password"
            placeholder="Password"
            onChange={(e) => getPassword(e.currentTarget.value)}
          />
          <input
            className={styles.inputs}
            name="fullname"
            placeholder="Full name"
            onChange={(e) => getFullname(e.currentTarget.value)}
          />
        </div>
        {pending && <span>registering...</span>}
        {!pending && <Button onClick={onCreate}>Register</Button>}
        <p>
          <a href="/login">Login</a>
        </p>
      </section>
    </main>
  );
}
