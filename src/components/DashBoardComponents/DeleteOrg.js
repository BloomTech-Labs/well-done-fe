import React from 'react'

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
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: 'flex',
    height: '20rem',
    width: '25%',
    borderRadius: '20px',
  },
}))

const DeleteOrg = props => {
  const deleteHandler = (event, id) => {
    event.preventDefault()
    props.deleteOrg(id) //actions
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
    <span className='btnCon'>
      <button
        onClick={handleOpen}
        style={{ height: 20, lineHeight: 0.5 }}
        className='btn btn-info'
      >
        <i className='icon-trash'></i>
      </button>

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
              {`Are you sure you want to delete this Organization?`}
              <div className='modBtns'>
                <button className='closeBtn' onClick={handleClose}>
                  Cancel
                </button>
                <button
                  className='confirmBtn'
                  onClick={e => deleteHandler(e, props.data.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </span>
  )
}
export default DeleteOrg
