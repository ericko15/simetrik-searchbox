import {AppBar, makeStyles, Toolbar} from '@material-ui/core'
import React from 'react'
import { ListItem } from './ListItem'
import {SearchBox} from './SearchBox'

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#FFF'
  },
  image: {
    paddingRight:20
  },
  content: {
    margin: 15
  }
}))

const App = () => {

  const classes = useStyles()

  return (
    <>
      <AppBar position="sticky" classes={{root: classes.root}}>
        <Toolbar>
          <img className={classes.image} src="/images/simetrik_main_logo.svg" alt="simetrik_main_logo"/>
          <SearchBox/>
        </Toolbar>
      </AppBar>
      <div className={classes.content}>
        <ListItem/>
      </div>
    </>
  )
}

export default App;
