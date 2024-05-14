import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Internal Tactics Liaison</title>
        <meta property="og:title" content="Internal Tactics Liaison" />
      </Helmet>
    </div>
  )
}

export default Home
