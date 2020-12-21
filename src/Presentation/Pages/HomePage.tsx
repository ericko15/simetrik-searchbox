import {AppBar, CircularProgress, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {SearchBox} from "../Components/SearchBox";
import {ListItem} from "../Components/ListItem";
import React from "react";
import {useDispatch} from "react-redux";
import {search} from "../store/modules/search.actions";
import {useSelector} from "../store/types";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#FFF'
  },
  image: {
    paddingRight:20
  },
  content: {
    margin: 15,
    textAlign: ({exits}:any) => !exits ? 'center' : 'initial'
  }
}))

export const HomePage = () => {
  const dispatch = useDispatch()
  const items = useSelector(({search}) => search.result)
  const classes = useStyles({exits: items.length > 0})

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
        {items.length === 0 && (
          <>
            <Typography variant="subtitle1">
              Sin datos encontrados
            </Typography>
            <Typography variant="subtitle1" >
              Escriba una consulta para empezar
            </Typography>
          </>
        )}
        {items.length > 0 && <ListItem items={items}/>}
      </div>
    </>
  )
}
