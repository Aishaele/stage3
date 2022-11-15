import React from 'react'
import house from "./img/house.png"
import facebook from "./img/facebook.png"
import twitter from "./img/twitter.png"
import instagram from "./img/instagram.png"


const Footer = () => {
  return (
    <body>
    <div className='footer'>
      <div>
        <div className='logo1'>
          <img src={house} alt="" />
          <h1> Metabnb</h1>
        </div>
        <div className='social-media'>
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={instagram} alt="" />
        </div>
        <footer> &copy; 2022 Metabnb</footer>
      </div>
      <div>
      <tr className='block'>
        <h3> Community</h3>
        <td> NFT</td>
        <td> Token </td>
        <td> Landlords</td>
        <td> Discord</td>
      </tr>
      </div>
      <div>
      <tr className='block'>
        <h3> Places</h3>
        <td> Castle</td>
        <td>Farms</td>
        <td>Beach</td>
        <td> Learn more</td>
      </tr>
      </div>
      <div>
      <tr className='block'>
        <h3>About us</h3>
        <td>Road map</td>
        <td> Creators</td>
        <td>Career</td>
        <td> Contact us</td>
      </tr>
      </div>
    </div>
    </body>
  )
}

export default Footer