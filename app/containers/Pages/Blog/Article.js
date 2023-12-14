import React from 'react';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import postContent from 'dan-api/dummy/blog-post.md';
import Button from '@mui/material/Button';
import { Comments, ShowcaseCard } from 'dan-components';
import AllInclusive from '@mui/icons-material/AllInclusive';
import Brightness5 from '@mui/icons-material/Brightness5';
import People from '@mui/icons-material/People';
import commentData from 'dan-api/apps/commentData';
import img from 'dan-api/images/photos';
import Markdown from './Markdown';
import SidebarBlog from './SidebarBlog';
import useStyles from './blogStyle-jss';

function Article() {
  const { classes, cx } = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item md={8} xs={12}>
          <article className={classes.article}>
            <div className={classes.content}>
              <Typography variant="h4" gutterBottom>
                From the Firehouse
              </Typography>
              <Markdown>
                {postContent}
              </Markdown>
              <Divider className={classes.dividerBordered} />
            </div>
          </article>
          <section className={classes.socmedShare}>
            <div className={classes.btnArea}>
              <Typography className={classes.title}>
                Share to social media
              </Typography>
              <Button variant="outlined" size="small" className={classes.redBtn} type="button">
                <AllInclusive className={cx(classes.leftIcon, classes.iconSmall)} />
                Socmed 1
              </Button>
              <Button variant="outlined" size="small" className={classes.blueBtn} type="button">
                <Brightness5 className={cx(classes.leftIcon, classes.iconSmall)} />
                Socmed 2
              </Button>
              <Button variant="outlined" size="small" className={classes.cyanBtn} type="button">
                <People className={cx(classes.leftIcon, classes.iconSmall)} />
                Socmed 3
              </Button>
            </div>
          </section>
          <Divider className={classes.dividerBordered} />
          <section>
            <Typography className={classes.title}>
              Write comments
            </Typography>
            <Comments dataList={commentData} />
          </section>
          <Typography variant="h6" className={classes.title2} gutterBottom>Related Posts</Typography>
          <Grid container spacing={3}>
            <Grid item sm={4} xs={12}>
              <ShowcaseCard
                title="Post title"
                date="Nov 12"
                desc="Aenean facilisis vitae purus facilisis semper."
                action="Read more"
                image={img[5]}
              />
            </Grid>
            <Grid item sm={4} xs={12}>
              <ShowcaseCard
                title="Post title"
                date="Nov 12"
                desc="Aenean facilisis vitae purus facilisis semper."
                action="Read more"
                image={img[25]}
              />
            </Grid>
            <Grid item sm={4} xs={12}>
              <ShowcaseCard
                title="Post title"
                date="Nov 12"
                desc="Aenean facilisis vitae purus facilisis semper."
                action="Read more"
                image={img[45]}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4} xs={12}>
          <SidebarBlog />
        </Grid>
      </Grid>
    </div>
  );
}

export default Article;
