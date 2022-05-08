import React from 'react'
import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa'
import './socialmedia.scss';
const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <a href='https://github.com/samir321-pixel' rel='noreferrer' target='_blank'>
                    <BsGithub />
                </a>
            </div>
            <div>
                <a href='https://www.linkedin.com/in/samir-saitwal-b517a0148/' rel='noreferrer' target='_blank'>
                    <BsLinkedin />
                </a>
            </div>
            <div>
                <a href='https://www.instagram.com/chococookey/' rel='noreferrer' target='_blank'>
                    <BsInstagram />
                </a>
            </div>
            <div>
                <a href='https://www.facebook.com/sameer.saitwal' rel='noreferrer' target='_blank'>
                    <FaFacebookF />
                </a>
            </div>
        </div>
    )
}

export default SocialMedia;