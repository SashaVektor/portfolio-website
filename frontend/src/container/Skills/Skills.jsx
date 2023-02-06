import React from 'react'
import { urlFor, client } from '../../client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import './Skills.scss'
import MotionWrapp from '../../wrapper/MotionWrapp'
import AppWrapp from '../../wrapper/AppWrapp'

const Skills = () => {
  const [exp, setExp] = useState([])
  const [skills, setSkills] = useState([])

  useEffect(() => {
    const query = '*[_type == "experiences"]'
    const skillsQuery = '*[_type == "skills"]'

    client.fetch(query)
      .then((data) => {
        const filteredData = data.sort((elem1, elem2) => Number(elem1.year) - Number(elem2.year))
        setExp(filteredData)
      })
    client.fetch(skillsQuery)
      .then((data) => {
        setSkills(data)
      })
  }, [])
  return (
    <>
      <h2 className='head-text'>Skills & Expierience</h2>
      <div className='app__skills-container'>
        <motion.div
          className='app__skills-list'
        >
          {skills?.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: .5 }}
              className="app__skills-item app__flex"
              key={skill.name}>
              <div className='app__flex' style={{ backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className='app__skills-exp'>
          {exp?.map((ex) => (
            <motion.div
              className='app__skills-exp-item'
              key={ex.year}
            >
              <div className='app__skills-exp-year'>
                <p className='bold-text'>{ex.year}</p>
              </div>
              <motion.div className='app__skills-exp-works'>
                {ex?.works?.map((work, i) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: .5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}>
                      <h4 className='bold-text'>{work.name}</h4>
                      <p className='p-text'>{work.desc}</p>
                    </motion.div>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default AppWrapp(MotionWrapp(Skills, 'app__skills'), 'skills', 'app__whitebg')


