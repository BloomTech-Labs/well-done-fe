import React from 'react'
import { withRouter } from "react-router"; 
import { Button, Icon } from 'antd'

const GoBack = (props) => {

    return(
        <>
        <Button onClick={props.history.goBack} type='primary' shape='circle'>
              <Icon type='left' />
        </Button>
        </>
    )

}

export default (withRouter(GoBack));