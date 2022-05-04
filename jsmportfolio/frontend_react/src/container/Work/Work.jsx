import './Work.scss'
import React, { useState, useEffect } from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion'
import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

const Work = () => {
    const [activeFilter, setActiveFilter] = useState('All')
    const [animateCard, SetAnimateCard] = useState({ y: 0, opacity: 1 })
    useEffect(() => {
        const query='*[_type == "works"]'
  
    }, [])
    
    const handleWorkFilter = (item) => {

    }
    return (
        <>
            <h2 className="head-text">My Creative <span>PortFolio</span> Section </h2>
            <div className='app__work-filter'>
                {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleWorkFilter(item)}
                        className={`app__work-filter-item app__flex p-text ${activeFilter === item} ? 'item-active': ''`}
                    >
                        {item}
                    </div>


                ))}
            </div>

            <motion.div
                animate={animateCard}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__work-portfolio"
            >

            </motion.div>
        </>

    )
}

export default Work