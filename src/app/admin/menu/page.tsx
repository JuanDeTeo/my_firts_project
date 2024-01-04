import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.new_style_my_name}>
      <h1>Menu</h1>
      <h3>admin</h3>

      <button>game</button>
      <br />
      <button>edit score</button>
      <br />
      <button>logout</button>
      <br />
      <a href="/login">Login</a>

    </main>
  )
}
