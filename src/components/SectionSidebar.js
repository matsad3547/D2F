import React from 'react'
import { sections } from '../utils/'
// import * as icon from 'simple-line-icons'

// console.log('icons:', icon);

const SectionSidebar = ({user, userCompany}) => (
  <div className="section-sidebar">
    <div className="company-header">Boogie Charts</div>
    <div className="sections">
      <div className="user-header">
        <span className="icon-user"></span>
        <p>{user || 'User Name Goes Here'}</p>
        <p>{userCompany || 'Company Inc.' }</p>
      </div>
      <ul>
        {sections.map( (sec, i) => <li key={i}><span className={sec.span}></span>{sec.label}<span className="icon-arrow-right"></span></li>)}
      </ul>
      <ul>
        <li><span className="icon-logout"></span>Sign Out</li>
      </ul>
    </div>
  </div>
)

export default SectionSidebar
