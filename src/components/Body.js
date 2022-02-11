import React, { useState } from 'react';
import personal from '../image/mypersonal.JPG';
import Joblist from '../image/joblist.png';
import Url from '../image/url shortener.png';
import Weight from '../image/weight.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faCode, faMobileAlt, faDesktopAlt, faBars } from '@fortawesome/free-solid-svg-icons';
import { faCss3Alt, faJs, faReact, faHtml5 } from '@fortawesome/free-brands-svg-icons';
function Body() {
    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle((T) => T = !T)
    }
    const toggleStyle = () => {
        return {
            right: toggle && '0'
        }
    }
    const getCopy = () => {
        navigator.clipboard.writeText("Vicaremy@gmail.com")
    }
    return (
        <div>
            <div>
                <header>
                    <div className='nav-bar'>
                        <div>
                            <h1>Victor</h1>
                        </div>
                        <div className='nav-links'>
                            <nav>
                                <ul style={toggleStyle()}>
                                    <li><a onClick={() => { handleClick(); window.location.href = '/#' }}>Home</a></li>
                                    <li><a onClick={() => { handleClick(); window.location.href = '/#about' }}>About</a></li>
                                    <li><a onClick={() => { handleClick(); window.location.href = '/#services' }} >Services</a></li>
                                    <li><a onClick={() => { handleClick(); window.location.href = '/#contacts' }}>Contact</a></li>
                                </ul>
                            </nav>
                            <label className='menu-bar' onClick={() => { handleClick() }}><FontAwesomeIcon icon={faBars} size="2x" /></label>
                        </div>

                    </div>
                    <div className='text-area'>
                        <h1>I LOVE TO CREATE BEAUTIFUL AND EFFICIENT WEBSITES</h1><span> <FontAwesomeIcon icon={faDesktopAlt} size="3x" /></span>
                    </div>
                </header>
                <section id="about">
                    <div className='introduction-div'>
                        <div className='introduction'>
                            <h1>Hi there i'm Victor,</h1>
                            <p>and I love to create and I love to create beautiful and efficient websites for my customers. I am font-end-developer with knowledge of Javascript,HTML,CSS, Tailwind css and React to create beautiful and well responsive websites.</p>
                        </div>
                        <div className='experience'>
                            <h4>2018-present</h4>
                            <strong><p>Education</p></strong>
                            <p>I am currently a student of computer engineering(UNIBEN)</p>
                            <h4>2020-present</h4>
                            <strong> <p>freelance web developer</p></strong>
                            <p>I have been able to aid some customers to bring their business online</p>
                        </div>
                        <div className='experience'>
                            <h4>2019-present</h4>
                            <strong><p>Personal projects</p></strong>
                            <p>I have personally been able to build projects for my leisure</p>
                            <h4>2021-present</h4>
                            <strong><p>Community</p></strong>
                            <p>I am currently enlightening people why they should have their businesses online and the benefits that come with it</p>
                        </div>
                    </div>
                </section>
                <section id="services">
                    <div className='services'>
                        <div className='services-writing'>
                            <h3>Offered Services</h3>
                            <p>Web design and development have been my bread and butter for more than 5 years. During that time I've discovered that I can help startups and companies with the following services</p>
                        </div>
                        <div className='boxes'>
                            <div className='box1'>
                                <FontAwesomeIcon color='#00BFFF' size='5x' icon={faGem} />
                                <h3>Design</h3>
                                <p>Every successful online project needs a good and interactive design. Which allows for long term growth</p>
                            </div>
                            <div className='box2'>
                                <FontAwesomeIcon color='#00BFFF' size='5x' icon={faCode} />
                                <h3>Development</h3>
                                <p>I can code any design, even designs based on the customers. My focus is to generate a clean code that is well structured for reliability.</p>
                            </div>
                            <div className='box3'>
                                <FontAwesomeIcon color='#00BFFF' size='5x' icon={faMobileAlt} />
                                <h3>responsive</h3>
                                <p>I design very well responsive websites that would look good on any device screen resolution and size</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='skills'>
                        <div>
                            <img src={personal} alt="personal" />
                        </div>
                        <div className='skills-and-tools'>
                            <div>
                                <h1>Why work with me</h1>
                                <p>I am a great communicator and love to invest necessary time to understand the customer very well</p>
                            </div>
                            <div>
                                <h3>Development skills</h3>
                                <p>I am familiar and work on a daily basis with HTML,CSS,Javascript, Tailwind and also React</p>
                            </div>
                            <div className='icons'>
                                <ul>
                                    <li style={{ color: '#00BFFF' }}><FontAwesomeIcon icon={faCss3Alt} size='4x' /></li>
                                    <li style={{ color: '#FFA500' }}><FontAwesomeIcon icon={faHtml5} size='4x' /></li>
                                    <li style={{ color: '#00BFFF' }}><FontAwesomeIcon icon={faReact} size='4x' /></li>
                                    <li style={{ color: '#FFD700' }}><FontAwesomeIcon icon={faJs} size='4x' /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='projects'>
                        <div>
                            <h1>My Projects</h1>
                        </div>
                        <div className='joblist'>
                            <p>Completed a challenge from Front-end mentor called Job-listing</p>
                            <img src={Joblist} alt='Joblist' />
                            <button onClick={(e) => {
                                e.preventDefault();
                                window.location.href = 'https://joblisting-challenge.vercel.app/';
                            }}>
                                <span>Visit</span>
                                <div className='liquid'></div>
                            </button>
                        </div>
                        <div className='url'>
                            <p>Completed a challenge from Front-end mentor called URL_shortener</p>
                            <div><img src={Url} alt='Url' /></div>
                            <button onClick={(e) => {
                                e.preventDefault();
                                window.location.href = 'https://sylar-url-shortener.vercel.app/';
                            }}>
                                <span>Visit</span>
                                <div className='liquid'></div>
                            </button>
                        </div>
                        <div className='weight'>
                            <p>A weight converter</p>
                            <img src={Weight} alt='weight' />
                            <button onClick={(e) => {
                                e.preventDefault();
                                window.location.href = 'https://sylarweightconverter.netlify.app/';
                            }}>
                                <span>Visit</span>
                                <div className='liquid'></div>
                            </button>
                        </div>
                    </div>
                </section>
                <section id="contacts" >
                    <div className='contact'>
                        <h1>Contact Details</h1>
                        <p>For any type of online project please don't hesistate to get in touch with me. The fastest way is to send a message to my email<span onClick={() => { getCopy(); }}> Vicaremy@gmail.com </span></p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Body