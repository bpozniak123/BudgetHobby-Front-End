import Navbar from './navbar'
// import Footer from './footer'

// import Navbar from './navbar/navbar'
import React from 'react'

export default function SimpleLayout(props) {
  return (
    <>
      <Navbar />
      <main role="main">
        {props.preContainer && props.preContainer}
        <div className="album py-5 bg-light">
          <div className="container">
            <Navbar />
            {props.children}
          </div>
        </div>
      </main>
    </>
  )
}

// export default function Layout({ children }) {
//   return (
//     <>
//       <Navbar />
//       <main>{children}</main>
//       <Footer />
//     </>
//   )
// }