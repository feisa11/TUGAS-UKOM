import React from 'react';
import "./navbar.css";
import logo from "../../assets/logoo.png";
import Telepon from "../../assets/telepon.png";
import { Link } from "react-scroll";
import { useState } from "react";
import { Link as Linkurl } from "react-router-dom";
// import Dropdown from 'react-dropdown';
import './dropdown.css';

const Navbar = () => {

  const [open, setOpen] = useState(false);

  const [showMenu, setShowMenu] = useState(false);
  
  return (
    <nav className='navbar'>
        <img src={logo} className='logo' alt='logo'/>
        <div className='navbar'>

            <Linkurl activeClass='active' className='desktopMenuItem' to="/">Home</Linkurl>
            <div className="menu-trigger" onClick={()=>{setOpen(!open)}}>
              <span className='desktopMenuItem'>Pilihan Web</span>
            </div>

            <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
              <ul>
                  <Linkurl activeClass='active' className='desktopMenuItem dropbtn' to="/web/sekolah">
                    <DropdownItem text = {'Web Sekolah'}/>
                  </Linkurl>
                  <Linkurl activeClass='active' className='desktopMenuItem dropbtn' to="/web/bisnis">
                    <DropdownItem text = {'Web Bisnis'}/>
                  </Linkurl>
                  <Linkurl activeClass='active' className='desktopMenuItem dropbtn' to="/web/custom">
                    <DropdownItem text = {'Web Custom'}/>
                  </Linkurl>
              </ul>
            </div>
            
        </div>
        <button className='desktopMenuBtn' onClick={() => {
          document.getElementById('kontak').scrollIntoView({behavior:'smooth'});
        }}>
            {/* <img src={Telepon} alt='' className='desktopMenuImg'/> */}
            
            Gabung
        </button>

        <img src={logo} className='mobMenu' alt='Menu' onClick={()=>setShowMenu(!showMenu)}/>
        <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() =>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() =>setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() =>setShowMenu(false)}>Portofolio</Link>
            <Link activeClass='active' to='client' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() =>setShowMenu(false)}>Clients</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() =>setShowMenu(false)}>Contact Me</Link>
        </div>        
    </nav>
  )
}

function DropdownItem(props) { 
  return(
    <li className='dropdownItem'>
      <a>{props.text}</a>
    </li>
  )
 }

export default Navbar