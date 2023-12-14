import React, { useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import imgApi from 'dan-api/images/photos';
import { red } from '@mui/material/colors';
import { PlayerCard, VideoCard } from '../../../../components';

const useStyles = makeStyles()((theme) => ({
  divider: {
    margin: `${theme.spacing(3)} 0`,
    display: 'block'
  },
  card: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 150,
    height: 150,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  cardSocmed: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
    boxShadow: theme.shadows[7]
  },
}));

function ControlCard() {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const {
    classes,
    cx
  } = useStyles();
  return (
    <Grid
      container
      spacing={2}
    >
      <Grid item md={6}>
        <Typography variant="button" className={classes.divider}>UI Controls</Typography>
        <div>
          <PlayerCard
            title="Live From Space"
            artist="Mac Miller"
            cover={imgApi[32]}
          />
        </div>
        <Typography variant="button" className={classes.divider}>Video Thumb</Typography>
        <VideoCard
          title="Live From Space"
          cover={imgApi[42]}
          date="September 14, 2016"
        />
      </Grid>
      <Grid item md={6}>
        <Typography variant="button" className={classes.divider}>Complex Interaction</Typography>
        <div>
          <Card className={classes.cardSocmed}>
            <CardHeader
              avatar={(
                <Avatar aria-label="Recipe" className={classes.avatar}>
                  R
                </Avatar>
              )}
              action={(
                <IconButton size="large">
                  <MoreVertIcon />
                </IconButton>
              )}
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
            />
            <CardMedia
              className={classes.media}
              image={imgApi[3]}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography component="p">
                This impressive paella is a perfect party dish and a fun meal to cook together with
                your guests. Add 1 cup of frozen peas along with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions className={classes.actions}>
              <IconButton aria-label="Add to favorites" size="large">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="Share" size="large">
                <ShareIcon />
              </IconButton>
              <IconButton
                className={cx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={() => handleExpandClick()}
                aria-expanded={expanded}
                aria-label="Show more"
                size="large">
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph variant="body2">
                  Method:
                </Typography>
                <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                  minutes.
                </Typography>
                <Typography paragraph>
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                  heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                  browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
                  chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
                  salt and pepper, and cook, stirring often until thickened and fragrant, about 10
                  minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                </Typography>
                <Typography paragraph>
                  Add rice and stir very gently to distribute. Top with artichokes and peppers, and
                  cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes.
                  Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into
                  the rice, and cook again without stirring, until mussels have opened and rice is
                  just tender, 5 to 7 minutes more. (Discard any mussels that don’t open.)
                </Typography>
                <Typography>
                  Set aside off of the heat to let rest for 10 minutes, and then serve.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
      </Grid>
    </Grid>
  );
}

export default ControlCard;
