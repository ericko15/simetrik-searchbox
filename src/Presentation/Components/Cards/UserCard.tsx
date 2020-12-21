import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  Icon,
  makeStyles,
  Typography
} from "@material-ui/core";
import {FC} from "react";

interface IProps {
  name: string
  age: number
  isActive: boolean
  tags: string[]
  company: string
  gender: string
  email: string
  phone: string
  address: string
}

const useStyles = makeStyles(() => ({
  description: {
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 3,
    overflow: 'hidden'
  },
  text:{
    display: 'flex',
    alignItems: 'center',
    '& .title': {
      marginRight: 5
    }
  },
  isActive: {
    display: 'flex',
    alignItems: 'center',
    '& .icon': {
      marginRight: 5
    }
  }
}))

export const UserCard: FC<IProps> = (props) => {
  const classes = useStyles()
  return (
    <Card elevation={2}>
      <CardHeader avatar={<Avatar>A</Avatar>} title={props.name} subheader={`${props.age} años, ${props.gender}`}/>
      <CardContent>
        <Grid container spacing={2} direction="column">
          <Grid item classes={{root: classes.text}}>
            <Typography variant="button" className="title">Compañía: </Typography>
            <Typography variant="body2" >{props.company}</Typography>
          </Grid>
          <Grid item classes={{root: classes.text}}>
            <Typography variant="button" className="title">Correo: </Typography>
            <Typography variant="body2" >{props.email}</Typography>
          </Grid>
          <Grid item classes={{root: classes.text}}>
            <Typography variant="button" className="title">Teléfono: </Typography>
            <Typography variant="body2" >{props.phone}</Typography>
          </Grid>
          <Grid item classes={{root: classes.text}}>
            <Typography variant="button" className="title">Dirección: </Typography>
            <Typography variant="body2" >{props.address}</Typography>
          </Grid>
          {props.tags.length > 0 && (
            <Grid item>
              <Typography variant="button">
                Etiquetas:
              </Typography>
              <Grid container spacing={1}>
                {props.tags.map((tag, i) => (
                  <Grid item key={i}>
                    <Chip variant="outlined" color="primary" label={tag} size="small"/>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          )}
        </Grid>
      </CardContent>
      <CardActions>
        <Grid container justify="space-between">
          <Grid item>
            <Typography color={props.isActive ? 'primary' : 'secondary'} classes={{root: classes.isActive}}>
              {
                props.isActive ? (
                    <><Icon className="icon">check_circle</Icon> Activo</>
                  ) :
                  (
                    <><Icon className="icon">cancel</Icon> Inactivo</>
                  )
              }
            </Typography>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  )
}
