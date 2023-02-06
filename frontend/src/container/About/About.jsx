import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { images } from '../../constants'
import './About.scss'
import { client, urlFor } from '../../client'
import AppWrapp from '../../wrapper/AppWrapp'
import MotionWrapp from '../../wrapper/MotionWrapp'


const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]'

    client.fetch(query)
      .then((data) => setAbouts(data))
  }, [])


  return (
    <>
      <h2 className='head-text'>
        I Know That {' '}
        <span>Good Website</span>
        <br />
        means {' '}
        <span>Good Business</span>
      </h2>
      <p className='app__about-text'>
        Hello viewer! Glad you're on my page and reading this text.
        Here I want to tell you a little bit about myself.
        My name is Sasha and I am 18 years old.
        I live in beautiful country - Ukraine.
        I learned about programming completely by accident, when my teacher
        of computer science offered me to go to city olympiad. Since then
        I started to learn programming. My training began with learning Pascal and
        C++. In 2021, I became acquainted with such a direction as frontend development.
        It was like love at first sight for me. I really enjoyed learning something new
        in this field. At first I was learning basic things in HTML and CSS. Then I
        tried out page layout, and as I thought, I was very good at it. At the beginning
        of 2022, I began to learn the programming language JavaScript. In the beginning,
        there were no problems with learning it because I already knew the basics.
        After learning all the important things about JS, I started learning the
        npm package manager and the Webpack build manager. I also paid attention to
        the Babel tool. After learning these things I began to learn the React framework
        and the Redux state manager. In the process of learning, I became acquainted with
        many libraries, which in one way or another facilitated my development. After writing
        my portfolio, I started job hunting and hope for a good job! Thanks for taking the
        time to read my story. Have a great time!
      </p>
      <div className='app__profiles'>
        {abouts?.map((about, i) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + i}>
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text text-center' style={{ marginTop: '20px' }}>
              {about.title}
            </h2>
            <p className='p-text text-center' style={{ marginTop: '10px' }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrapp(MotionWrapp(About, 'app__about'), 'about', 'app__whitebg')
