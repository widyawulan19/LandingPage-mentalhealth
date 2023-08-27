import React from 'react'
import './Component.css'
import image2 from '../image/image2.jpg'

function Section1() {
  return (
    <div className='section1'>
        <h1>Apa Itu Mental Health?</h1>
        <div className="section1-container">
            <div className="section1-kiri">
                <p>
                    <span>Mental Health</span><br /><br />
                    Mental Health atau yang sering disebut dengan Kesehatan Mental ialah 
                    keadaan individu yang sejahtera untuk bisa menyadari potensi yang dimilikinya,
                    mampu mengatasi tekanan hidup dengan normal, mampu bekerja secara produktif,
                    serta dapat memberikan kontribusi bagi sekitarnya.
                </p>
                <div className='section1-kanan'>
                    <img src={image2} alt="" />
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Section1