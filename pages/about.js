import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
// import aboutusback from '../public/aboutusback.jpg'

export default function AboutPage() {
	return (
		<div className={styles.container2}>
		 	<link href="https://fonts.googleapis.com/css2?family=Bungee&display=swap" rel="stylesheet"/>
			<link href="https://fonts.googleapis.com/css2?family=Coustard&display=swap" rel="stylesheet"/>
			
			<h1> Who We Are </h1>
			
			<p>
				<ul>Are you a dreamer?</ul>
				<ul>Do you live a life of adventure but would like a place to store your ideas and new areas of interest?</ul>
				<ul>Do you wish to live a life of adventure and explore new things?</ul>
			</p>
			
			<p>Hobby Helper was created to allow people to log and keep track of new hobbies. We even have a built in personal finance feature which also allows you to budget for a hobby!</p>


			<Link href="/">
    		<button type="button" className="btn btn-info">Back to Home</button>
  			</Link>


			<style jsx>{`
				.container {
					margin: 50px;
				}
				button {
					margin-left: 650px;
					padding: 10px;
				}
				h1 {
					font-family: 'Bungee', cursive;
					text-align: center;
					margin-top: 20px;
					color: #2d55ff;
				}
				p {
					font-family: 'Coustard', serif;
					font-style: bold;
					color: black;
					font-size: 25px;
					padding: 20px;
					margin-top: 40px;
					margin-left: 300px;
					max-width: 60%;
					border-style: groove;
				}
				ul {
					font-style: italic;
				}
			`}</style>

		</div>
	)
}


