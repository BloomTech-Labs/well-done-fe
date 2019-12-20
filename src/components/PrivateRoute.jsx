import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({
  page: Component,
  searchFiltered,
  setSearchFiltered,
  sensors,
  selectedPump,
  setSelectedPump,
  history,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('token') ? (
          <Component
            {...props}
            searchFiltered={searchFiltered}
            setSearchFiltered={setSearchFiltered}
            history={history}
            sensors={sensors}
            selectedPump={selectedPump}
            setSelectedPump={setSelectedPump}
          />
        ) : (
          <Redirect to='/' />
        )
      }
    />
  )
}

export default PrivateRoute
