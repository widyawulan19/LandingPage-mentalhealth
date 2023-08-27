import React from 'react'
import {AiFillInstagram,AiFillGithub} from 'react-icons/ai'
import {IoIosMailUnread} from 'react-icons/io'

const Footer=()=> {
  return (
    <>
        <footer className='footer'>
            <div className="footer-kiri"><hr />
                <p>Your mental health is a priority. You're doing your best
                    And that is enough ^^.
                </p><hr />
            </div>
            <div className="footer-center">
                <div className="footer-satu">
                    Social Media <br /><br />
                    <a href="https://www.instagram.com/luw_3d/">
                        <AiFillInstagram size={40} color='#c4b6a3'/>
                    </a><br /><br />
                    Instagram
                </div>
                <div className="footer-dua">
                    Contact <br /><br />
                    <a href="">
                        <IoIosMailUnread size={40} color='#c4b6a3'/>
                    </a><br /><br />
                    Widyawulan1906@gmail.com
                </div>
                <div className="footer-tiga">
                    Github <br /><br />
                    <a href="https://github.com/widyawulan19">
                        <AiFillGithub size={40} color='#c4b6a3'/>
                    </a><br /><br />
                    Widyawulan19
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer