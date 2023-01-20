import React from 'react'
import './Dropdown1.css'
import { data2} from './DropdownData1'
import {BiChevronRight} from 'react-icons/bi'
import {AiTwotoneCalendar} from 'react-icons/ai'
const Dropdown2 = () => {
  return (
   <>
   <div className="drop2">
    
<div className="drop1Container">
    <div className="dd1Left">
        <div className="dd1MainTitle">
<h2 className="title">Services</h2>
<span className="subTitle">Explore the solutions</span>
</div>
<div className="dd1Middle">
    Learn More <BiChevronRight size='25px'/>
</div>

<div className="dd1Border"></div>

<div className="dd1Bottom">
<AiTwotoneCalendar size='25px'/>    Request a Demo
</div>
    </div>
    <div className="dd1Right">
{data2.map((item)=>(
    <div className="dd1RightContainer" id={item.id} >
    <h4 className="title">{item.title}</h4>
    <span className="desc">{item.desc}</span>
</div>
)) }


    </div>
</div>
</div>
   </>
  )
}

export default Dropdown2