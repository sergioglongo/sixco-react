import React from 'react';
import { makeStyles } from 'tss-react/mui';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import imgApi from 'dan-api/images/photos';
import avatarApi from 'dan-api/images/avatars';
import GeneralCard from '../CardPaper/GeneralCard';
import PostCard from '../CardPaper/PostCard';
import Quote from '../Quote/Quote';

const useStyles = makeStyles()((theme) => ({
  divider: {
    margin: `${theme.spacing(2)} 0`,
    background: 'none'
  },
}));

function Favorites() {
  const {
    classes
  } = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Grid
      container
      justifyContent="center"
      direction="row"
      spacing={3}
    >
      <Grid item md={6}>
        <PostCard
          liked={1}
          shared={20}
          commented={15}
          date="Sept, 25 2018"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed urna in justo euismod condimentum."
          image={imgApi[5]}
          avatar={avatarApi[6]}
          name="John Doe"
        />
        <Divider className={classes.divider} />
        <GeneralCard liked={1} shared={20} commented={15}>
          <Typography className={classes.title} color="textSecondary">
            Word of the Day
          </Typography>
          <Typography variant="h5" component="h2">
            be
            {bull}
            nev
            {bull}
            o
            {bull}
            lent
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography>
          <Typography component="p">
            well meaning and kindly.
            <br />
            &apos;&apos;a benevolent smile&apos;&apos;
          </Typography>
        </GeneralCard>
        <Divider className={classes.divider} />
        <PostCard
          liked={1}
          shared={20}
          commented={15}
          date="Sept, 25 2018"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed urna in justo euismod condimentum."
          image={imgApi[16]}
          avatar={avatarApi[6]}
          name="John Doe"
        />
        <Divider className={classes.divider} />
        <PostCard
          liked={90}
          shared={10}
          commented={22}
          date="Sept, 15 2018"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed urna in justo euismod condimentum."
          avatar={avatarApi[5]}
          name="Jane Doe"
        />
      </Grid>
      <Grid item md={6}>
        <PostCard
          liked={90}
          shared={10}
          commented={22}
          date="Sept, 15 2018"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed urna in justo euismod condimentum."
          avatar={avatarApi[4]}
          name="Jane Doe"
        />
        <Divider className={classes.divider} />
        <PostCard
          liked={1}
          shared={20}
          commented={15}
          date="Sept, 25 2018"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed urna in justo euismod condimentum."
          image={imgApi[20]}
          avatar={avatarApi[6]}
          name="John Doe"
        />
        <Divider className={classes.divider} />
        <GeneralCard liked={1} shared={20} commented={15}>
          <Quote align="left" content="Imagine all the people living life in peace. You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us, and the world will be as one." footnote="John Lennon" />
        </GeneralCard>
        <Divider className={classes.divider} />
        <PostCard
          liked={90}
          shared={10}
          commented={22}
          date="Sept, 15 2018"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed urna in justo euismod condimentum."
          avatar={avatarApi[1]}
          name="Jane Doe"
        />
      </Grid>
    </Grid>
  );
}

export default Favorites;
