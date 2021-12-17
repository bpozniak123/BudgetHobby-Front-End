import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'

const Navbar = () => {
	return (
		<nav>
			<div className="logo">
				<h1>Hobby Helper</h1>
			</div>
			<Link href="/"><a>Home</a></Link>
			<Link href="/about"><a>About</a></Link>
		</nav>

	);
}

export default Navbar;