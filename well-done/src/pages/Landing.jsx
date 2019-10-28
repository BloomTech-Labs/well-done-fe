import React from 'react'
import SignIn from '../components/SignIn/SignIn.component'
import './Landing.styles.scss'


const Landing = () => {

    return (
        <div class="landing">
            <div class="image">
                <img src="https://res.cloudinary.com/dfulxq7so/image/upload/v1572297285/Placeholder-Amazing-PNG-Icon_twe7hi.png" alt="main image"/>
            </div>
            <div class="sign-in">
                <SignIn />
            </div>
        </div>
    )
}

export default Landing;