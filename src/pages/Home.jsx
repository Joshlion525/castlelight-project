import React from 'react';
import Logo from '../assets/CastleLogoWhite1.svg'

const Home = () => {
  return (
    <div>
        <nav className='flex justify-center items-center py-7'>
            <span></span>
            <div>
                <img src={Logo} alt="" />
            </div>
            <span></span>
        </nav>
    </div>
  )
}

export default Home