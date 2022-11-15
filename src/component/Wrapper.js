import React from 'react'
import box from "../component/img/box.png"

const Wrapper = () => {
  return (
    <body>
        <section>
        <div className='style-text'>
            <h1> Metabnb NFTs</h1>
            <p> 
            Discover our NFT gift cards collection. Loyal 
            <br /> customers gets amazing gift cards which 
            <br /> are traded as NFTs
            . These NFTs gives our 
            <br /> cutomer access to loads of our exclusive services.
            </p>

             <div> <button> Learn more</button></div>
        </div>
        <div className='box-img'>
            <img src={box} alt="" />
        </div>
        </section>
        </body>
  )
}

export default Wrapper