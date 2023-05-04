import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [show, setshow] = useState(false)
    const navigate= useNavigate()
    const transitionNavbar = () =>{
        if (window.scrollY>100) {
            setshow(true);
        } else {
            setshow(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavbar)
        return ()=>window.removeEventListener('scroll', transitionNavbar)
    }, [])
    
  return (
    <div className={`nav ${show && 'nav__black'}`}>
        <div className='nav__contents'>
            <img className='nav__logo' src="https://www.freepnglogos.com/uploads/netflix-logo-drawing-png-19.png" onClick={()=>navigate('/')} alt="" />
            <img className='nav__avatar' src="https://i.pinimg.com/736x/eb/05/eb/eb05eb6fb0880b5c811669b60b0278bb.jpg" onClick={()=>navigate('/profile')} alt="" />
        </div>
    </div>
  )
}

export default Navbar