import React from 'react'
import './About.css'
import About_img from '../../assets/about.png'
import About_play from '../../assets/play-icon.png'
const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
       <img src={About_img} alt=""  className='about-img' />
       <img src={About_play} alt=""  className='about-play' onClick={()=>{setPlayState(true)}} />

      </div>
      <div className="about-right">
       <h3>ABOUT UNIVAERSITY</h3>
       <h2>Nurturing Tommorow's Leaders Today</h2>
       <p>Embark on a transformotive educational journey wit our
        university's comprehensive education program, our cutting-edge
        curriculam is designed to empower students with the knowledge,
        skills, and experiences needed to excel int the dymanic fields of
        education
       </p>
       <p>With a focus on innovation,hands-on learning,and personalized
        mentorship, our program prepare aspring educators to make a
        meaningful impact in classrooms, schools,and communities.
       </p>
       <p>Whether you aspire to become a teacher,administrator,
        counselor, you educational leader,our diverse range of Programs
         offers the perfect pathway to archive your goals and unlock your
         full petential in shaping the future of education.
       </p>

      </div>
    </div>
  )
}

export default About
