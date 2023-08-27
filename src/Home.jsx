import React from 'react'
import Hero from './component/Hero'
import Section1 from './component/Section1'
import Section2 from './component/Section2'
import Section3 from './component/Section3'
import Footer from './component/Footer'


function Home() {
  return (
    <div>
        <Hero/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Footer/>
    </div>
  )
}

export default Home