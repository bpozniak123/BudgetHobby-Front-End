import Link from 'next/link'
import styles from '../styles/Ideas.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Image from 'next/image'
import audi from '../public/rs3.jpg'
import bbq from '../public/bbq.jpg'
import yoga from '../public/yoga.jpg'
import kayak from '../public/kayak.jpg'
import rockclimb from '../public/rockclimb.jpg'
import mtnbike from '../public/mtnbike.jpg'

export default function HobbyIdeas() {
  return (
  	<>
    <div className={styles.container}>
   
      <main className={styles.main}>
        {/*<Navbar />*/}
        <link
          href="https://fonts.googleapis.com/css2?family=Bungee&display=swap" 
          rel="stylesheet"
        />
        <h1 className={styles.titleHome}>
          Hobby Ideas
        </h1>

      	<Link href="/">
    			<button type="button" className="btn btn-info">Back to Home</button>
  			</Link>

        <div className={styles.grid}>
          <a className={styles.card}>
          	<Image
          		src={audi}
          		alt="RS3"
          	/>
            <h2>Auto&rarr;</h2>
            <li>Get your dream car</li>
            <li>Get a track car</li>
            <li>Collect Classics</li>
          </a>
        </div>

         <div className={styles.grid}>
          <a className={styles.card}>
          	<Image
          		src={yoga}
          		alt="exercise"
          	/>
            <h2>Exercise&rarr;</h2>
            <li>Yoga</li>
            <li>Weight training</li>
            <li>Healthy living</li>
          </a>
        </div>

        <div className={styles.grid}>
          <a className={styles.card}>
          	<Image
          		src={bbq}
          		alt="grill"
          	/>
            <h2>BBQ&rarr;</h2>
            <li>Buy a grill</li>
            <li>Buy a smoker</li>
            <li>Make own rubs and sauces</li>
          </a>
        </div>

         <div className={styles.grid}>
          <a className={styles.card}>
          	<Image
          		src={kayak}
          		alt="kayaking"
          	/>
            <h2>Kayaking&rarr;</h2>
            <li>Use while camping</li>
            <li>Kayaking Trip with friends</li>
            <li>Fishing</li>
          </a>
        </div>

         <div className={styles.grid}>
          <a className={styles.card}>
          	<Image
          		src={rockclimb}
          		alt="climbing"
          	/>
            <h2>Rock Climbing&rarr;</h2>
            <li>Need proper shoes</li>
            <li>Get into ice climbing</li>
            <li>Plan travel trips to climb</li>
          </a>
        </div>

          <div className={styles.grid}>
          <a className={styles.card}>
          	<Image
          		src={mtnbike}
          		alt="bike"
          	/>
            <h2>Mountain Biking&rarr;</h2>
            <li>Buy a proper mountain bike</li>
            <li>Get proper safety gear</li>
            <li>Plan travel trips with friends</li>
          </a>
        </div>

      </main>
    </div>
    </>
  )
}