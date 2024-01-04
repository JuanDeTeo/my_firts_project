import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <h1>Menu</h1>
      
      <a href="/login">Login</a>
      <br/>
      <a href="/register">Register</a>

    </main>
  )
}
