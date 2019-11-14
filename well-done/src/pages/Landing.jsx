import React from 'react'
import SignIn from '../components/SignIn/SignIn.component'
import './Landing.styles.scss'


const Landing = props => {
    console.log('props in Landing', props)

    return (
        <div class="landing">
            <div class="image">
                <img src="https://res.cloudinary.com/dfulxq7so/image/upload/v1572452572/malawi20100165_cesh8j.jpg" alt="main image"/>
            </div>
            <div class="sign-in">
                <SignIn history={props.history}/>
            </div>
        </div>
    )
}

export default Landing;