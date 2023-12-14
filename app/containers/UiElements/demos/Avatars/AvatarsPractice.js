import React from 'react';
import { makeStyles } from 'tss-react/mui';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ImageIcon from '@mui/icons-material/Image';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';
import Divider from '@mui/material/Divider';
import imgApi from 'dan-api/images/photos';
import { red, green, amber } from '@mui/material/colors';

const useStyles = makeStyles()((theme) => ({
  row: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  chip: {
    margin: theme.spacing(1),
  },
  card: {
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
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  avatarRed: {
    backgroundColor: red[500],
  },
  avatarGreen: {
    backgroundColor: green[500],
  },
  avatarAmber: {
    backgroundColor: amber[500],
  },
  divider: {
    margin: `${theme.spacing(3)} 0`,
  }
}));

function AvatarsDemo() {
  const {
    classes
  } = useStyles();

  const handleDelete = () => {
    alert('You clicked the delete icon.'); // eslint-disable-line no-alert
  };

  const handleClick = () => {
    alert('You clicked the Chip.'); // eslint-disable-line no-alert
  };
  return (
    <Grid
      container
      alignItems="flex-start"
      justifyContent="flex-start"
      direction="row"
      spacing={2}
    >
      <Grid item md={6}>
        <Typography variant="button" className={classes.divider}>Avatars in Tag(Chip)</Typography>
        <Grid
          container
          alignItems="flex-start"
          justifyContent="flex-start"
          direction="row"
          spacing={1}
        >
          <Chip
            avatar={<Avatar>MB</Avatar>}
            label="Clickable Chip"
            onClick={() => handleClick()}
            className={classes.chip}
          />
          <Chip
            avatar={<Avatar src="/images/pp_boy.svg" />}
            label="Deletable Chip"
            onDelete={() => handleDelete()}
            className={classes.chip}
          />
          <Chip
            avatar={(
              <Avatar>
                <FaceIcon />
              </Avatar>
            )}
            label="Clickable Deletable Chip"
            onClick={() => handleClick()}
            onDelete={() => handleDelete()}
            className={classes.chip}
          />
        </Grid>
        <Divider className={classes.divider} />
        <Typography variant="button" className={classes.divider}>Avatars in List Menu</Typography>
        <div className={classes.root}>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.avatarRed}>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.avatarGreen}>
                  <WorkIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Work" secondary="Jan 7, 2014" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.avatarAmber}>
                  <BeachAccessIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Vacation" secondary="July 20, 2014" />
            </ListItem>
          </List>
        </div>
      </Grid>
      <Grid item md={6}>
        <Typography variant="button" className={classes.divider}>Avatars in Social Media</Typography>
        <div>
          <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar src="/images/pp_girl.svg" />
              }
              action={(
                <IconButton size="large">
                  <MoreVertIcon />
                </IconButton>
              )}
              title="Aliquam nec ex aliquet"
              subheader="September 14, 2018"
            />
            <CardMedia
              className={classes.media}
              image={imgApi[7]}
              title="Image"
            />
            <CardContent>
              <Typography component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed urna in justo euismod condimentum.
              </Typography>
            </CardContent>
            <CardActions className={classes.actions}>
              <IconButton aria-label="Add to favorites" size="large">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="Share" size="large">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        </div>
      </Grid>
    </Grid>
  );
}

export default AvatarsDemo;
