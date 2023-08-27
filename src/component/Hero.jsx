import React from 'react'
import './Component.css'
import Nav from './Nav'

function Hero() {
  return (
    <div>
        <div className='hero'>
        <Nav/>
            <h1>My existence is a scandal</h1>
            <p>When your mental health isn't in the best state, give yourself a break.
                Don't feel guilty for things you can't do. Normal things like eating,spleeping or socialising
                may be difficult, it's okay to struggle. Rest, recover, be kind of yourselt and
                know the bad time are temprorary.
                <br /><br /> ~Oscar Wilde~
            </p>
        </div>
    </div>
  )
}

export default Hero