import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <h1>Login</h1>

      <input name="username" placeholder='username' />
      <br />
      <input name="password" placeholder='password'/>
      <br />
      <button>Login</button>
      <br />
      <a href="/register">Creater user</a>

    </main>
  )
}
