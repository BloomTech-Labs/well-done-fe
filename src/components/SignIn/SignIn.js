import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLogin } from 'actions/userActions'

import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

export default function SignInSide(props) {
  const [account, setAccount] = useState({ email_address: '', password: '' })

  const handleChange = event => {
    setAccount({ ...account, [event.target.name]: event.target.value })
  }

  const dispatch = useDispatch()
  const signIn = useSelector(state => state.userReducer)

  const handleSubmit = event => {
    event.preventDefault()
    dispatch(fetchLogin(account, props.history))
  }

  const classes = useStyles()

  return !signIn.error ? (
    <Grid container component='main' className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
                inputProps={{
                  style: {
                    marginBottom: 0
                  }
                }}
              // variant='outlined'
              margin='normal'
              fullWidth
              id='email_address'
              label='Email Address'
              name='email_address'
              autoComplete='email'
              value={account.email_address}
              onChange={handleChange}
              autoFocus
              InputProps={{ disableUnderline: true }}
            />
            <TextField
              inputProps={{
                style: {
                  marginBottom: 0
                }
              }}
              // variant='outlined'
              margin='normal'
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              value={account.password}
              onChange={handleChange}
              InputProps={{ disableUnderline: true }}
            />
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me'
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
              onClick={handleSubmit}
            >
              Sign In
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  ) : (
    // error message form
    <Grid container component='main' className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <div>
              <TextField
                inputProps={{
                  style: {
                    marginBottom: 0
                  }
                }}
                error
                label='Error'
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='email_address'
                name='email_address'
                autoComplete='email'
                value={account.email_address}
                onChange={handleChange}
                autoFocus
              />
              <TextField
                inputProps={{
                  style: {
                    marginBottom: 0
                  }
                }}
                error
                label='Error'
                variant='outlined'
                margin='normal'
                required
                fullWidth
                type='password'
                id='password'
                name='password'
                value={account.password}
                onChange={handleChange}
                autoFocus
                helperText='Incorrect email or password.'
              />
            </div>
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me'
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
              onClick={handleSubmit}
            >
              Sign In
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage:
      'url(https://res.cloudinary.com/dfulxq7so/image/upload/v1572452572/malawi20100165_cesh8j.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '400px', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))
