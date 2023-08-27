import React from 'react'
import './Component.css'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Section2=()=> {
  return (
    <>
    <div className="section-section2">
        <div className="section2">
        <h2>Cara Menjaga Kesehatan Mental</h2>
            <div className="section2-center">
                <div className="satu">
                    <h3>CARA 01.</h3>
                    <p>
                        <span> MENGHARGAI DIRI SENDIRI</span><br /><br /><br /><br />
                        Hargai dan cintai diri sendiri, misalnya dengan tidak membandingkan diri sendiri dengan orang lain.
                        Perlakukan dirimu seperti kamu memperlakukan orang lain yang kamu sayangi.
                        Syukuri segala yang hal dimiliki agar dapat menerima dan mencintai diri sendiri.
                    </p>
                    <button>See Detail <AiOutlineArrowRight/></button>
                </div>
                <div className="dua">
                    <h3>CARA 02.</h3>
                    <p>
                        <span>SELALU MELIHAT SISI POSITIF SUATU MASALAH</span><br /><br />
                        Berusaha dan berlatih untuk berpikir positif dalam menghadapi segala situasi atau masalah yang 
                        sedang dihadapi.
                    </p><br /><br />
                    <button>See Detail <AiOutlineArrowRight/></button>
                </div>
                <div className="tiga">
                    <h3>CARA 03.</h3>
                    <p>
                        <span> KONTROL EMOSI DIRI</span><br /><br /><br /><br />
                        Kenali dengan baik diri dan kondisi diri, kemudian temukan cara terbaik untuk mengelola stres untuk diri sendiri
                        bisa dengan menulis buku harian, berjalan-jalan, dan berbincang.
                    </p><br />
                    <button>See Detail <AiOutlineArrowRight/></button>    
                </div>
                <div className="empat">
                    <h3>CARA 04.</h3>
                    <p>
                        <span> TEMUKAN KEGIATAN YANG DISUKAI</span><br /><br />
                        Kembangkan potensi yang kamu miliki atau coba hal-hal baru yang belum pernah dilakukan. Hindari sikap perfeksionis yang berlebihan,
                        lalu lakukan hal-hal yang membuat kamu bahagia.
                    </p><br />
                    <button>See Detail <AiOutlineArrowRight/></button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Section2