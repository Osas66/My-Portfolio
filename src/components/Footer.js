import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <div>
            <div className='footer-div'>
                <div className='socials'>
                    <ul>
                        <li><FontAwesomeIcon icon={faFacebook} size='2x' /></li>
                        <li><FontAwesomeIcon icon={faTwitter} size='2x' /></li>
                        <li><FontAwesomeIcon icon={faLinkedinIn} size='2x' /></li>
                        <li><FontAwesomeIcon icon={faInstagram} size='2x' /></li>
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