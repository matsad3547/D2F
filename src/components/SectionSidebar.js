import React from 'react'
import { Link } from 'react-router-dom'
import { sections } from '../config/'

const SectionSidebar = ({currentUser}) => {
  return (
    <div className="section-sidebar">
      <div className="company-header"><h2>Charteco</h2></div>
      <div className="user-header">
        <span
          style={currentUser ? {display: 'none'} : {display: 'block'}}
          className="icon-user"></span>
        <img
          style={currentUser ? {display: 'block'} : {display: 'none'} }
          className="profile-picture sidebar"
           src={currentUser ? currentUser.userProfilePic : ''}
           alt=""
           >
        </img>
         <div className="user-info">
          <h4>{ currentUser ? currentUser.userName : 'User Name'}</h4>
          <p>{currentUser? currentUser.userCompany : 'Company Inc.' }</p>
        </div>
      </div>
      <div className="sections">
        <ul>
          {sections.map( (sec, i) => <li className=" sb-button" key={i}><Link className="section" to={sec.link}><span className={sec.span}></span><p>{sec.label}</p><span className="icon-arrow-right"></span></Link></li>)}
        </ul>
        <ul className="sign-out">
          <li className="section"><span className="icon-logout"></span>Sign Out<span></span></li>
        </ul>
      </div>
    </div>
  )
  // if(currentUser){
  // }
  // else return null
}

export default SectionSidebar
