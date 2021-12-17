import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Footer() {
	return (
 		<footer className={styles.footer}>
        	<a>
          	Powered by{' '}
          <span className={styles.logo}>
            <Image src="../HELPlogo.png" alt="Vercel Logo" width={55} height={60} />
          </span>
          Just.B.Poz Enterprises
        </a>
  </footer>
  )
}
