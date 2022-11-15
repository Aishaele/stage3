import React from 'react'
import img5 from "../component/img/img5.svg"
import img6 from "../component/img/img6.svg"
import img7 from "../component/img/img7.svg"

const Foot = () => {
  return (
    <div className='display-foot'>
            <div className='foot-style'>
                <img src={img5} alt="" />
                <h1> MBToken</h1>
            </div>
            <div className='foot-style'>
                <img src={img6} alt="" />
                <h1> METAMASK</h1>
            </div>
            <div className='foot-style'>
                <img src={img7} alt="" />
                <h1> OpenSea </h1>
            </div>
        </div>
  )
}

export default Foot