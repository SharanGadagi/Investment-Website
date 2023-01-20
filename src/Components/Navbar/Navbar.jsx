import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import {BsChevronCompactDown} from 'react-icons/bs'
import {MdPhoneInTalk} from 'react-icons/md'
import {BiLogIn} from 'react-icons/bi'
import logo from '../Images/logo.png'
import { useState } from 'react'
import Dropdown1 from '../Dropdown/Dropdown1'
import Dropdown2 from '../Dropdown/Dropdown2'
import Dropdown3 from '../Dropdown/Dropdown3'
const Navbar = () => {
  const [click1,setClick1]=useState(false)
  const [click2,setClick2]=useState(false)
  const [click3,setClick3]=useState(false)

const dropdownHandleClick1=()=>{
  setClick1(!click1)
}
const dropdownHandleClick2=()=>{
  setClick2(!click2)
}
const dropdownHandleClick3=()=>{
  setClick3(!click3)
}

  return (
   <>
   <div className="navbar" id="navbar">
    <div className="navContainer">

      <Link>  <div className="logo">
            <div className="logoImg">
            <img src={logo} alt="logo" />
            </div>
            <h2 className="logoName">NIVESHA<span className="logoNameColor">₹</span>THA</h2>
        </div>
        </Link>

        <div className="navLinks">
            <ul>
                <li><Link>Artha  </Link> </li>
                <li onClick={dropdownHandleClick1}><Link>Nivesh<BsChevronCompactDown className='navIcon' color='rgb(7, 95, 76)'/>  </Link> </li>
                {click1 && <Dropdown1/>}
                <li onClick={dropdownHandleClick2}><Link >Services<BsChevronCompactDown className='navIcon' color='rgb(7, 95, 76)'/>  </Link> </li>
                {click2 && <Dropdown2/>}
                <li><Link>Analyse  </Link> </li>
                <li onClick={dropdownHandleClick3}><Link>Learn<BsChevronCompactDown className='navIcon' color='rgb(7, 95, 76)'/>  </Link> </li>
                {click3 && <Dropdown3/>}
            </ul>
        </div>

        <div className="navContact">
            <div className="navContactOption">
               <MdPhoneInTalk/> 
              1300 755 490
            </div>
            <div className="navContactOption">
               <BiLogIn/> 
               Login
              </div>
              <div className="navBtn">
                Get Started
              </div>



        </div>
    </div>
   </div>
   </>
  )
}

export default Navbar
