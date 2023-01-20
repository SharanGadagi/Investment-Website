import React from 'react'
import './Feartures.css'
import {data} from './Data.js'

const Features = () => {
  return (
    <>
    <div className="feature" id='feature'>
        <div className="featureContainer">
            <h2 className="title">Featured On</h2>
<div className="featureImgContainer">
            {data.map((item)=>(
  <div className="featureImg" id={item.id } >
  <img src={item.img } alt='features'/>
</div>
            )) } 
            </div>
          

        </div>
    </div>
    </>
  )
}

export default Features