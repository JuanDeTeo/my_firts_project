import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/app/components/Button/Button";
import { cookies } from "next/headers";
import { Suspense, useTransition } from "react";
import { logout } from "../actions/userActions";

export default function Home() {
  const userId = cookies().get("userId");
  console.log({ userId });
  const isUserLoggedIn = !!userId && userId.value !== "-1";

  return (
    <main className={styles.new_style_my_name}>
      <h1>Menu</h1>
      <h3>user</h3>
      <br />
      {isUserLoggedIn && (
        <section className={styles.form_menu}>
          <a href="/game">
            <Button>game</Button>
          </a>
          <br />
          <Suspense>
            <Button onClick={logout}>logout</Button>
          </Suspense>
        </section>
      )}
      {!isUserLoggedIn && (
        <section className={styles.form_menu}>
          <a href="/login">
            <Button>Login</Button>
          </a>
        </section>
      )}

      <div className={styles.links}>
        <p>
          <a href="/profile">Profile</a>
        </p>
      </div>
    </main>
  );
}
