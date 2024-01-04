import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <h1>Register</h1>

      <input name="username" placeholder='username' />
      <br />
      <input name="password" placeholder='password'/>
      <br />
      <input name="fullname" placeholder='full name'/>
      <br />
      <button>Register</button>
      <br />
      <a href="/login">Login</a>

    </main>
  )
}
