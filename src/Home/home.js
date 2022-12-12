import React from 'react';
import { Button,Link } from '@mui/material';
import '../css/font-awesome.css'
import '../css/templatemo-training-studio.css'
import sample from '../css/gym-video.mp4';
import '../css/bootstrap.min.css'
function Home(){
    return(
<>
<header class="header-area header-sticky">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav class="main-nav">
                        
                        <a href="index.html" class="logo">GYM <em>TOWN</em></a>
                        
                        <ul class="nav">
                            <Button class="scroll-to-section" variant='outlined' color='primary' ><span >Home</span></Button>
                            <Button class="scroll-to-section" variant='text'><span>About</span></Button>
                            <li class="scroll-to-section"><a href="#our-classes">Classes</a></li>
                            <li class="scroll-to-section"><a href="#schedule">Schedules</a></li>
                            <li class="scroll-to-section"><a href="#contact-us">Contact</a></li> 
                            <Button class="main-button"><Link to="./Login/login">Login</Link></Button>
                        </ul>        
                        <a class='menu-trigger'>
                            <span>Menu</span>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    </header>
<video className='bg-video' autoPlay loop muted>
    <source src={sample} type='video/mp4' />
</video>
<div className='video-overlay'>
    <div className='caption'>
                <h3 className='h3'><b>work harder, get stronger</b></h3>
                <h1 className='h2'><b>easy with our <em className='em'>gym</em></b></h1>
                <div className='main-button scroll-to-section'>
                    <a href="#features">Become a member</a>
                </div>
                </div>
    </div>
</>
    )
}
export default Home;