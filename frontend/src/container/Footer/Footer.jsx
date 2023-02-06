import React, { useState } from 'react'
import { images } from '../../constants'
import { client } from '../../client'
import './Footer.scss'
import AppWrapp from '../../wrapper/AppWrapp'
import MotionWrapp from '../../wrapper/MotionWrapp'

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    setLoading(true)

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    client.create(contact)
      .then(() => {
        setLoading(false)
        setIsFormSubmitted(true)
      })
  }

  return (
    <>
      <h2 className='head-text'>Take a coffe and chat with me</h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt="email" />
          <a href="mailto:aveklic@gmail.com" className='p-text'>aveklic@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+380950083931" className='p-text'>+380950083931</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.insta} alt="insatgram" />
          <a href="https://www.instagram.com/sasha_veklich/" className='p-text'>@sasha_veklich</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input type="text" className='p-text' placeholder='Your Name'
              value={name} onChange={handleChangeInput} name="name" />
          </div>
          <div className='app__flex'>
            <input type="email" className='p-text' placeholder='Your Email'
              value={email} onChange={handleChangeInput} name="email" />
          </div>
          <div>
            <textarea
              className='p-text'
              placeholder='Your message'
              value={message}
              name="message"
              onChange={handleChangeInput} />
          </div>
          <button type='button' className='p-text'
            onClick={handleSubmit}>{loading ? 'Sending...' : "Send Message"}</button>
        </div>
      ) : (
        <div>
          <h3 className='head-text'>Thanks you for getting in touch!</h3>
        </div>
      )}
    </>
  )
}

export default AppWrapp(MotionWrapp(Footer, 'app__footer'), 'contact', 'app__whitebg')
