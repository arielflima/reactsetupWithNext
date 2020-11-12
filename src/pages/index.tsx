import React from 'react'
import Head from 'next/head'

import Testandoatesta from '../assets/testandoatesta.svg'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <Testandoatesta />
      <h1>ReactJS Structure</h1>
      <p>A ReactJS + Next.js structure made by Arielflima.</p>
    </Container>
  )
}

export default Home
