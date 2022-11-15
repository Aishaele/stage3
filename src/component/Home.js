import React from 'react'
import img1 from "../component/img/img1.svg"
import img2 from "../component/img/img2.svg"
import img3 from "../component/img/img3.svg"
import img4 from "../component/img/img4.svg"


const Home = () => {
  return (
    <body>
        <div className='hero'>
            <div className='type'>
                <h1> Rent a <span> Place</span>  away from 
                 <br /> <span> Home</span>  in the <span> Metaverse</span> </h1>
                 <p>
                 we provide you access to luxury and affordable houses 
                 <br /> in the metaverse, get a chance to turn your 
                 <br /> imagination to reality at your comfort zone
                 </p>
                 <div className='input'>
                    <div className='input-div'> <input type="text" placeholder='Search for location' /></div>
                    <div className='button'> <button>Search</button></div>
                 </div>
            </div>
            <div className='hero-img'>
                <div className='up'>
                    <img src={img1} alt="" />
                    <img src={img3} alt="" />
                </div>
                <div className='down'>
                    <img src={img2} alt="" />
                    <img src={img4} alt="" />
                </div>
            </div>
        </div>
    </body>
    
  )
}

export default Home