import {Icon, InputAdornment, makeStyles, TextField} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  icon: {
    cursor: 'pointer'
  }
}))

export const SearchBox = () => {

  const classes = useStyles()

  return (
      <TextField
        variant="outlined"
        classes={{root: classes.root}}
        size="small"
        fullWidth
        placeholder=""
        InputProps={{
          endAdornment: (
            <InputAdornment className={classes.icon} position="end">
              <Icon>search</Icon>
            </InputAdornment>
          )
        }}
      />
  )
}
