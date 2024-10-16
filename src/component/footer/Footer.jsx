import React from 'react'
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Sanjog</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#" className="footer__link"></a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://www.facebook.com/sanjupp5661" className="footer__social-link" target="_blank">
                <i className="bx bxl-facebook"></i>
            </a>
            <a href="https://www.instagram.com/sanjogpawar31/" className="footer__social-link" target="_blank">
                <i className="bx bxl-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/sanjog-pawar-443ba7160/" className="footer__social-link" target="_blank">
                <i className="bx bxl-linkedin"></i>
            </a>

            </div>

            <span className="footer__copy">
                &#169; 2024 SanjogPawar. All Rights Reserved.
            </span>
        </div>
    </footer>
  )
}

export default Footer