import React from 'react'
import './Expect.css'
import e1 from '../Images/e1.png'
import {IoMdArrowDroprightCircle} from 'react-icons/io'
import e2 from '../Images/e2.png'

const Expect = () => {
  return (
  <>
  <div className="expect" id="expect">
    <div className="expectContainer">
        <div className="topExpect">
<div className="teLeft">
<div className="telTop box1" ></div>
<div className="telBottom">
    <div className="telbLeft box1"></div>
    <div className="telbTRight box2"></div>
</div>
<div className="telTop box1"></div>
<div className="telBottom">
    <div className="telbLeft box2"></div>
    <div className="telbTRight box1"></div>
</div>
<div className="telTop box2" ></div>

</div>
<div className="teMiddle">
<span className="title1">What makes us unique ?</span>
<h3 className="title2">The Nivashartha difference.</h3>
<span className="title3">There's no guessing games here - we use a data-driven investment approach</span>
</div>

<div className="teLeft">
<div className="telTop box2" ></div>
<div className="telBottom">
    <div className="telbLeft box2"></div>
    <div className="telbTRight box1"></div>
</div>
<div className="telTop box1"></div>
<div className="telBottom">
    <div className="telbLeft box1"></div>
    <div className="telbTRight box2"></div>
</div>
<div className="telTop box2" ></div>

</div>
        </div>

        <div className="bottomExpect">
       <div className="be1">
        <div className="be1content">
            <h2 className="title">What should you expect from Niveshartha</h2>
            <span className="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, delectus.</span>
            <span className="desc">Lorem ipsum dolor, sit amet consectetur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, delectus.</span>
            <span className="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, delectus.</span>
        </div>
        <div className="beImage">
            <img src={e1} alt="img" />
        </div>
       </div>

       <div className="be2">
       <div className="beImage">
            <img src={e2} alt="img2" />
        </div>
        <div className="be2content">
            <h2 className="title">What should you expect from Niveshartha</h2>
            <div className="descContainer">
<IoMdArrowDroprightCircle color='green' size='22px' />
            <span className="desc">Lorem ipsum dolor, sit amet consectetur</span>
            </div>
            <div className="descContainer">
<IoMdArrowDroprightCircle color='green' size='22px'/>
            <span className="desc">Lorem ipsum dolor, sit amet consectetur Lorem ipsum dolor</span>
            </div>
            <div className="descContainer">
<IoMdArrowDroprightCircle color='green' size='22px'/>
            <span className="desc">Lorem ipsum dolor,  consectetur</span>
            </div>
            <div className="descContainer">
<IoMdArrowDroprightCircle color='green' size='22px'/>
            <span className="desc">Lorem ipsum dolor, Lorem ipsum dolor sit amet consectetur</span>
            </div>
            <div className="exeBtn">Get Started</div>
        </div>
        
        
       </div>
        </div>
    </div>
  </div>
  </>
  )
}

export default Expect