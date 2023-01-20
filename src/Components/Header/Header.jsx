import React from 'react'
import './Header.css'
import header from '../Images/header.png'
import { data } from './HeaderData'

const Header = () => {
  return (
    <>
    <div className="header" id="header">

        <div className="headerContainer">

            <div className="leftHeader">

<h1 className="title" >We're made of innovative ideas & strategies to design portfolio</h1>
<span className="desc">We run simple rule keeping your money in mind to pick the strongest & let them go when the loose their strength</span>
<div className="headerOptions">
    {data.map((item)=>(
   <div className="headerOptioncard" id={item.id} >
   <div className="headerIcons">
{item.icon1} {item.icon2}
   </div>
   <h4>{item.title }</h4>
   
  </div>
    ))}
 

</div>



            </div>

            <div className="rightHeader">
<img src={header} alt="ok" />
            </div>

        </div>
    </div>
    </>
  )
}

export default Header
