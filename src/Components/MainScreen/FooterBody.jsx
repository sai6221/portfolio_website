import React from 'react'
import '/src/css/footerBody.css'

function FooterBody() {
  return (
    <div className="footerContainer">
       <div className="socialLinks">
        <a></a>
        <a href="#" className="navbar-item is-tab" target="_blank">
          <i className="fa-brands fa-github"></i>
        </a>

        <a href="#" className="navbar-item is-tab" target="_blank">
          <i className="fa-brands fa-linkedin"></i>
        </a>

        <a href="#" className="navbar-item is-tab" target="_blank">
          <i className="fa-solid fa-envelope"></i>
        </a>

        <a href="#" className="navbar-item is-tab" target="_blank">
          <i className="fa-solid fa-phone"></i>
        </a>
        <a></a>
      </div>
    </div>
  )
}

export default FooterBody