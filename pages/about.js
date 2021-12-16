import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'
import Image from 'next/image'

export default function AboutPage() {
	return (
		<div className="aboutuspage">
		<link href="https://fonts.googleapis.com/css2?family=Bungee&family=Gruppo&display=swap" rel="stylesheet"/>

			<h1> Who We Are </h1>

			<p>Are you a dreamer? Do you live a life of adventure but would like a place to store your ideas and new areas of interest? Do you wish to live a life of adventure and explore new things?</p>

			<p>Hobby Helper was created to allow people to log and keep track of new hobbies. We even have a built in personal finance feature which also allows you to budget for a hobby!</p>

			<Link href="/">
    		<button type="button" class="btn btn-info">Back to Home</button>
  		</Link>

			<style jsx>{`
				.container {
					margin: 50px;
				}
				button {
					color: blue;
					margin-left: 650px;
					padding: 10px;
				}
				h1 {
					font-family: 'Bungee', cursive;
					text-align: center;
					margin-top: 20px;
				}
				p {
					font-family: 'Gruppo', cursive;
					color: blue;
					font-size: 30px;
					padding: 20px;
					margin-top: 40px;
					margin-left: 300px;
					max-width: 60%;
					border-style: groove;
				}
			`}</style>
		</div>
	
	)
}



	// .aboutuspage {
				//   background-image: url(../img/aboutusback.jpg);
				//   background-size: cover;
				//   background-repeat: no-repeat;
				//   background-attachment: fixed;
				// }