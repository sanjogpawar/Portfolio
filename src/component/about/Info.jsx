import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i class='bx bxs-award  about__icon'></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">1.7 Years Working</span>
        </div>
        <div className="about__box">
        <i class='bx bxs-briefcase-alt-2  about__icon'></i>
        <i class='' ></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">10 + Projects</span>
        </div>
        <div className="about__box">
        <i class='bx bxs-map  about__icon'></i>
            <h3 className="about__title">India</h3>
            <span className="about__subtitle">Mumbai</span>
        </div>
    </div>
  )
}

export default Info