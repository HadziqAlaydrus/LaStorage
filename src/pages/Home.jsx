import React from 'react'
import CardFaq from '../components/CardFaq'
import HomeCard from '../components/HomeCard'
import Jumbotron from '../components/Jumbotron'

const Home = () => {
  return (
    <section className='min-h-[81vh]'>
        <Jumbotron/>
        <CardFaq/>
    </section>
  )
}

export default Home