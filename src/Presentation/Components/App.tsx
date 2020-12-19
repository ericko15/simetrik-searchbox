import {AppBar, makeStyles, Toolbar} from '@material-ui/core'
import React from 'react'
import {SearchBox} from './SearchBox'

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#FFF'
  },
  image: {
    paddingRight:20
  }
}))

const App = () => {

  const classes = useStyles()

  return (
    <>
      <AppBar position="static" classes={{root: classes.root}}>
        <Toolbar>
          <img className={classes.image} src="/images/simetrik_main_logo.svg" alt="simetrik_main_logo"/>
          <SearchBox/>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default App;
