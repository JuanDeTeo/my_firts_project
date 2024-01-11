"use client";
import { useState, useTransition } from "react";
import styles from "./page.module.css";
import Button from "@/app/components/Button/Button";
import { login } from "../actions/userActions";
import { useRouter } from "next/navigation";
import { cookies } from "next/headers";
import { PrismaClient } from "@prisma/client";

export default function Home() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    !pending &&
      startTransition(async () => {
        const user = await login({ email, password });
        if (user.user) {
          console.log("Exito");

          if (user.user.admin == true) {
            router.push("admin/menu");
          } else {
            router.push("/menu");
          }
        } else {
          console.log("Error");
        }
      });
  };

  return (
    <main className={styles.login}>
      <h1>Login</h1>

      <br />

      <section className={styles.form_login}>
        <div className={styles.input_login}>
          <input
            className={styles.inputs}
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.currentTarget.value)}
          />

          <input
            className={styles.inputs}
            name="password"
            placeholder="password"
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </div>
        {pending && <span>logging in...</span>}
        {!pending && <Button onClick={onLogin}>Login</Button>}
        <p>
          <a href="/register">Register</a>
        </p>
      </section>
    </main>
  );
}
