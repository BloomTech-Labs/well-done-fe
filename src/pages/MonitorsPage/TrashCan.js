import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
// needs sensor data
const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: 'flex',
    height: '20rem',
    width: '25%',
    borderRadius: '20px',
  },
}))

const TrashCan = props => {
  const deleteHandler = (event, sensor_index) => {
    event.preventDefault()
    props.deleteSensor(sensor_index)
    props.params.api.redrawRows()
  }

  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

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
              {`Are you sure you want to delete sensor ${props.data.sensor_id} in 
                ${props.data.province_name}`}
              <div className='modBtns'>
                <button className='closeBtn' onClick={handleClose}>
                  Cancel
                </button>
                <button
                  className='confirmBtn'
                  onClick={e => deleteHandler(e, props.data.sensor_index)}
                >
                  Delete
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
