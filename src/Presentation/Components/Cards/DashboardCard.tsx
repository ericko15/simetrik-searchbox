import {
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
  isActive: boolean
  description: string
  tags: string[]
}

const useStyles = makeStyles(() => ({
  description: {
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 3,
    overflow: 'hidden'
  },
  isActive: {
    display: 'flex',
    alignItems: 'center',
    '& .icon': {
      marginRight: 5
    }
  }
}))

export const DashboardCard: FC<IProps> = (props) => {
  const classes = useStyles()
  return (
    <Card elevation={2}>
      <CardHeader title={props.name} subheader="Tablero"/>
      <CardContent>
        <Grid container spacing={2} direction="column">
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

          <Grid item>
            <Typography variant="button">
              Descripción
            </Typography>
            <Typography variant="subtitle1" className={classes.description}>
              {props.description}
            </Typography>
          </Grid>
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
