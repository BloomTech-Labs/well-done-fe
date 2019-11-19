import React from 'react'
import SignIn from '../components/SignIn/SignIn.component'
import './Landing.styles.scss'
import MetaTags from "react-meta-tags";

const Landing = props => {
    console.log('props in Landing', props)

    return (
        <div className="landing">
            <MetaTags>
                <title>Well-Done dashboard</title>
                <meta name="description" content="WellDone with its mission to consistently deliver clean, safe water to communities in need as well as provide long term accountability for infrastructure projects, provide water not just a well, they want to improve a dashboard by having our Lambda Labs team to build BackEnd from scratch and iterate FrontEnd features." />
                <meta property="og:title" content="Well-Done" />
                <meta property="og:image" content="https://res.cloudinary.com/dfulxq7so/image/upload/v1573914589/Screen_Shot_2019-11-16_at_6.29.30_AM_oq7itf.png" />
            </MetaTags>
            <div className="signinimage">
                <img src="https://res.cloudinary.com/dfulxq7so/image/upload/v1572452572/malawi20100165_cesh8j.jpg" alt="main image"/>
            </div>
            <div className="sign-in">
                <SignIn history={props.history}/>
            </div>
        </div>
    )
}

export default Landing;