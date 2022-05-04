import React, { useState, useEffect } from 'react'
import './About.scss';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import { motion } from 'framer-motion';
// const abouts = [
//     { title: 'Web Development', description: 'I am Good Web Developer', imgUrl: images.about01 },
//     { title: 'Frontend Development', description: 'I am Good Web Designer', imgUrl: images.about02 },
//     { title: 'Web UI/UX', description: 'I am Good Web Developer', imgUrl: images.about03 },
//     { title: 'Backend Development', description: 'I am Good Web Builder', imgUrl: images.about04 },
// ]
const About = () => {
    const [abouts, setAbouts] = useState([]);
    useEffect(() => {
        const query = '*[_type=="abouts"]';
        console.log(client.fetch(query))
        client.fetch(query)
            .then((data) => setAbouts(data))
    }, [])

    return (
        <>
            <h2 className="head-text">I Know that <span>Good Development</span> <br />means  <span>Good Business</span></h2>

            <div className='app__profiles'>
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        className='app__profiles-item'
                        key={about.title + index}
                    >
                        <img src={urlFor(about.imgUrl)} alt={about.title} />
                        <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
                        <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
                    </motion.div>
                ))}
            </div>
        </>
    )
}

export default AppWrap(
    MotionWrap(About, 'app__about'),
    'about',
    'app__whitebg'
);