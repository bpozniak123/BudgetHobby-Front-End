import Head from 'next/head'
import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import NextCors from 'nextjs-cors'
import 'bootstrap/dist/css/bootstrap.min.css'

async function handler(req, res) {
   // Run the cors middleware
   // nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
   await NextCors(req, res, {
      // Options
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      origin: '*',
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
   });

   // Rest of the API logic
   res.json({ message: 'Hello NextJs Cors!' });
}

//--------------------------------------------------------------

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title >Hobby Helper</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/HELPlogo.png" />
      </Head>

      <main className={styles.main}>
        {/*<Navbar />*/}
        <link
          href="https://fonts.googleapis.com/css2?family=Bungee&display=swap" 
          rel="stylesheet"
        />
        <h1 className={styles.titleHome}>
          Hobby Helper
          <span className={styles.logo}>
            <Image src="/HELPlogo.png" alt="Vercel Logo" width={70} height={75} />
          </span>
        </h1>

        <h3 className={styles.subtitleHome}>
        Track what excites you!</h3>

      <Link href="/about">
      <button type="button" class="btn btn-link">About Us</button>
      </Link>

        <div>
        <Link href="/create-hobby">
        <button type="submit" class="btn btn-primary">Click to Add New Hobby</button>
        </Link>
        </div>

        <div>
        <Link href="/create-budget">
        <button type="submit" class="btn btn-success">Create a Budget!</button>
        </Link>
        </div>

        <div className={styles.grid}>
          <a href="http://localhost:3000/read-hobby" className={styles.card}>
            <h2>Click Here to View Hobbies &rarr;</h2>
            <p>You can also update or delete hobbies too.</p>
          </a>

          <a href="http://localhost:3000/read-budget" className={styles.card}>
            <h2>Click Here to View Budgets&rarr;</h2>
            <p>You can also update or delete budgets too.</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Hobby Ideas &rarr;</h2>
            <p>Here are a few pictures to spark your interests.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a>
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/HELPlogo.png" alt="Vercel Logo" width={55} height={60} />
          </span>
          Just.B.Poz Enterprises
        </a>
      </footer>
    </div>
     
  )
}
