import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedinIn, faTelegram } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <div>
            <div className='footer-div'>
                <div className='socials'>
                    <ul>
                        <li onClick={(e) => { e.preventDefault(); window.open('https://github.com/Sylar-codex') }}><FontAwesomeIcon icon={faGithub} size='2x' /></li>
                        <li onClick={(e) => { e.preventDefault(); window.open('https://twitter.com/vicaremy?s=21&t=-ya7bwIubK7CTIrCyBq84A') }}><FontAwesomeIcon icon={faTwitter} size='2x' /></li>
                        <li onClick={(e) => { e.preventDefault(); window.open('https://www.linkedin.com/in/victor-iduh-30b67622b/') }}><FontAwesomeIcon icon={faLinkedinIn} size='2x' /></li>
                        <li onClick={(e) => { e.preventDefault(); window.open('https://t.me/Lordesy') }}><FontAwesomeIcon icon={faTelegram} size='2x' /></li>
                    </ul>
                </div>
                <div className='copyright'>
                    <p>Copyright © 2022</p>
                </div>
            </div>
        </div>
    )
}

export default Footer