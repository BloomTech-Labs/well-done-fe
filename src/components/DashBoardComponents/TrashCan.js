import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: 'flex',
    height: '20rem',
    width: '20%',
    borderRadius: '5px',
  },
}))

const TrashCan = props => {
  const deleteHandler = (event, sensor_index) => {
    event.preventDefault()
    props.deleteSensor(sensor_index)
    props.params.api.redrawRows()
  }

  const [pump, setPump] = useState([])
  console.log(pump)

  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleChange = event => {
    setPump({ ...pump, [event.target.name]: event.target.value })
  }

  //on submit add operator
  const handleSubmit = event => {
    event.preventDefault()
    // dispatch(addOp(operator)) //will use addPumps
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  // onClick={e => deleteHandler(e, props.data.sensor_index)}

  return (
    <div>
      <span className='btnCon'>
        <button
          onClick={handleOpen}
          style={{ height: 20, lineHeight: 0.5 }}
          className='btn btn-info'
        >
          <i class='icon-trash'></i>
        </button>
      </span>

      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className='modCon'>
              {`Confirm Delete of sensor ${props.data.sensor_id} in 
                ${props.data.province_name}`}
              <div className='modBtns'>
                <button
                  className='confirmBtn'
                  onClick={e => deleteHandler(e, props.data.sensor_index)}
                >
                  Confirm
                </button>
                <button className='closeBtn' onClick={handleClose}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

export default TrashCan
