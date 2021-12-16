import Link from 'next/link'

export default function AboutPage() {
	return (
		<div className="container">
		
			<Link href="/">
    		<button type="button">Back to Home</button>
  		</Link>

			<h1> Who We Are </h1>

			<p>Are you a dreamer? Do you live a life of adventure but would like a place to store your ideas and new areas of interest? Do you wish to live a life of adventure and explore new things? Hobby Helper was created to allow people to log and keep track of new hobbies. We even have a built in personal finance feature which also allows you to budget for a hobby!
			</p>

			<style jsx>{`
				.container {
					margin: 50px;
				}
				button {
					color: blue;
				}
				h1 {
					text-align: center;
				}
				p {
					color: blue;
				}
			`}</style>
		</div>
	
	)
}