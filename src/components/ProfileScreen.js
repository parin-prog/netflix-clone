import React from 'react'
import Navbar from './Navbar'
import './ProfileScreen.css'

const ProfileScreen = () => {
  return (
    <div className='profileScreen'>
        <Navbar />
        <div className='profileScreen__body'>
            <h1>Edit Profile</h1>
            <div className='profileScreen__info'>
                <img src='https://i.pinimg.com/736x/eb/05/eb/eb05eb6fb0880b5c811669b60b0278bb.jpg' alt='avatar' />
                <div className='profileScreen__details'>
                    <h5>parinprog@gmail.com</h5>
                    <div className='profileScreen__plans'>
                        <h4>Plans (Current Plan: premium)</h4>
                        <hr />
                        <h5>Renewal date: 05/05/2023</h5>
                        <div className='profileScreen__subs'>
                            <div className='profileScreen__sub sub1'>
                                <div className='sub__info inf1'>
                                    <h2>Netflix Standard</h2>
                                    <h3>1080p</h3>
                                </div>
                                <button className='sub__button btn1'>Subscribe</button>
                            </div>
                            <div className='profileScreen__sub sub2'>
                                <div className='sub__info inf2'>
                                    <h2>Netflix Basic</h2>
                                    <h3>480p</h3>
                                </div>
                                <button className='sub__button btn2'>Subscribe</button>
                            </div>
                            <div className='profileScreen__sub sub3'>
                                <div className='sub__info inf3'>
                                    <h2>Netflix Premium</h2>
                                    <h3>4K+HDR</h3>
                                </div>
                                <button className='sub__button btn3'>Current Package</button>
                            </div>
                        </div>
                        
                    </div>
                    <button className='profileScreen__signout'>Sign out</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen