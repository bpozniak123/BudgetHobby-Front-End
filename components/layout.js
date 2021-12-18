import React from 'react'

export default function SimpleLayout(props) {
  return (
    <>
      <main role="main">
        {props.preContainer && props.preContainer}
        <div className="album py-5 bg-light">
          <div className="container">
            {props.children}
          </div>
        </div>
      </main>
    </>
  )
}
