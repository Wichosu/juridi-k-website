import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      Hola this is a test
      <br />
      你好，我叫路易斯
      <h1>我吃米饭</h1>
      <h2>我写汉字</h2>
      <h3>我在我的家</h3>
    </main>
  )
}
