import Image from 'next/image'
import styles from './page.module.css'
import Feed from '@/components/Feed'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Feed />
      </div>
    </main>
  )
}
