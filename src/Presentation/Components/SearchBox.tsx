import {Icon, IconButton, InputAdornment, makeStyles, TextField} from "@material-ui/core";
import {FC, useState} from "react";

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  icon: {
    cursor: 'pointer'
  },
  form: {
    width: '100%'
  }
}))

interface IProps {
  onSearch:(text: string) => void
}

export const SearchBox: FC<IProps> = ({onSearch}) => {

  const [text, setText] = useState('')

  const classes = useStyles()

  const handleChange = ({target}:any) => setText(target.value)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    await onSearch(text)
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <TextField
        variant="outlined"
        classes={{root: classes.root}}
        size="small"
        fullWidth
        value={text}
        onChange={handleChange}
        placeholder="Buscar"
        InputProps={{
          endAdornment: (
            <InputAdornment className={classes.icon} position="end">
              <IconButton onSubmit={handleSubmit}>
                <Icon>search</Icon>
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </form>
  )
}
