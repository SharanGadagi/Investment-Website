import React from 'react'
import './Product.css'
import { points1,points3 } from './Data'
import p1 from '../Images/p1.png'
import p2 from '../Images/p2.png'
import p3 from '../Images/p3.png'
import p4 from '../Images/p4.png'



const Product = () => {
  return (
    <>
    <div className="products" id="products">
<div className="productContainer">
    <h1 className="title">
        Fill in the gaps. Gain a Holistic view of your portfolio with time tested Accuracy
    </h1>

    <div className="productsMainBox">

    {/* car1 */}
        <div className="card" >
        <div className="leftCard">
            <img src={p1} alt="Product" />
        </div>
        <div className="rightCard">
            <h3 className="cardTitle"> Why to choose us</h3>
            <span className="cardSubTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quidem tenetur labore, doloribus magnam vero corporis perferendis corrupti laudantium saepe. </span>
         
{points1.map((item)=>(
 <div className="cardPoints" id={item.id} >
 <div className="cardIcon">
 {item.icon}
 </div>
 <span className="cardPointDesc">
 {item.desc}
 </span>
</div>
)) }
   
        </div>
    </div>

     {/* car2 */}
     <div className="card" >
        <div className="leftCard">
            <img src={p2} alt="Product" />
        </div>
        <div className="rightCard">
            <h3 className="cardTitle"> Focus Areas</h3>
            <span className="cardSubTitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde labore odio perspiciatis non aliquam sunt, praesentium voluptatibus porro id placeat assumenda minima.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
  
        </div>
    </div>


     {/* car3 */}
     <div className="card" >
        <div className="leftCard">
            <img src={p3} alt="Product" />
        </div>
        <div className="rightCard">
            <h3 className="cardTitle">Methodology </h3>
            <span className="cardSubTitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde labore odio perspiciatis non </span>
         
{points3.map((item)=>(
 <div className="cardPoints" id={item.id} >
 <div className="cardIcon">
 {item.icon}
 </div>
 <span className="cardPointDesc">
 {item.desc}
 </span>
</div>
)) }
   
        </div>
    </div>



     {/* car4 */}
     <div className="card">
        <div className="leftCard">
            <img src={p4} alt="Product" />
        </div>
        <div className="rightCard">
            <h3 className="cardTitle">Core Values</h3>
            <span className="cardSubTitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde labore odio perspiciatis non aliquam sunt, praesentium voluptatibus porro id placeat assumenda minima.Lorem ipsum dolor, sit amet consectetur adipisicing elit. </span>
         

        </div>
    </div>
      


    </div>

    <div className="productBtn">Learn More About Our Product</div>

</div>
    </div>
    </>
  )
}

export default Product