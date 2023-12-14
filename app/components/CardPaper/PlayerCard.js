import React from 'react';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import useStyles from './cardStyle-jss';

function PlayerCard(props) {
  const { classes } = useStyles();
  const theme = useTheme();
  const {
    title,
    artist,
    cover,
  } = props;

  return (
    <Card className={classes.cardPlayer}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {artist}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="Previous" size="large">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="Play/pause" size="large">
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
          <IconButton aria-label="Next" size="large">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image={cover}
        title={title}
      />
    </Card>
  );
}

PlayerCard.propTypes = {
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default PlayerCard;
