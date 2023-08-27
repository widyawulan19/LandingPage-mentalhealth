import React, {useRef} from 'react'
import './Component.css'
import logo from './mainlogopng.png'

const Nav=()=> {
  return (
    <div>
        <div className='navigation-bar'>
            <img src={logo} alt="logo" />
            <h2>Skilvul-Special Challenge</h2>
            <a href="#">Kesehatan Mental</a>

        </div>
        <hr />
    </div>
  )
}

export default Nav