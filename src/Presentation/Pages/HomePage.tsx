import {AppBar, makeStyles, Toolbar} from "@material-ui/core";
import {SearchBox} from "../Components/SearchBox";
import {ListItem} from "../Components/ListItem";
import React from "react";
import {useDispatch} from "react-redux";
import {search} from "../store/modules/search.actions";

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

export const HomePage = () => {

  const dispatch = useDispatch()
  const classes = useStyles()

  const handleSearch = (text: string) => {
    dispatch(search(text))
  }
  return (
    <>
      <AppBar position="sticky" classes={{root: classes.root}}>
        <Toolbar>
          <img className={classes.image} src="/images/simetrik_main_logo.svg" alt="simetrik_main_logo"/>
          <SearchBox onSearch={handleSearch} />
        </Toolbar>
      </AppBar>
      <div className={classes.content}>
        <ListItem/>
      </div>
    </>
  )
}
