import React from 'react'
import { sections } from '../utils/'

const SectionSidebar = ({user, userCompany}) => (
  <div className="section-sidebar">
    <div className="company-header"><h2>charteco</h2></div>
    <div className="user-header">
      <span className="icon-user"></span>
      <div>
        <h4>{user || 'User Name Goes Here'}</h4>
        <p>{userCompany || 'Company Inc.' }</p>
      </div>
    </div>
    <div className="sections">
      <ul>
        {sections.map( (sec, i) => <li className="section sb-button" key={i}><span className={sec.span}></span><p>{sec.label}</p><span className="icon-arrow-right"></span></li>)}
      </ul>
      <ul className="sign-out">
        <li className="section"><span className="icon-logout"></span>Sign Out<span></span></li>
      </ul>
    </div>
  </div>
)

export default SectionSidebar
