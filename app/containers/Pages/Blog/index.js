import React, { Fragment, useState } from 'react';
import { Contact, HeadlineCard, ShowcaseCard } from 'dan-components';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import ArrowBack from '@mui/icons-material/ArrowBack';
import ArrowForward from '@mui/icons-material/ArrowForward';
import Divider from '@mui/material/Divider';
import img from 'dan-api/images/photos';
import SidebarBlog from './SidebarBlog';
import useStyles from './blogStyle-jss';

let counter = 0;
function createData(title, date, desc, image) {
  counter += 1;
  return {
    id: counter,
    title,
    date,
    desc,
    image,
  };
}

function Blog() {
  const { classes } = useStyles();
  const mdUp = useMediaQuery(theme => theme.breakpoints.up('md'));

  const [postData] = useState([
    createData('Vivamus sit amet ibero lobortis', 'Nov 4', 'Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem.', img[36]),
    createData('Quisque ut metus ultricies', 'Nov 4', 'Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem.', img[35]),
    createData('Vivamus sit amet', 'Nov 4', 'Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem.', img[19]),
    createData('Duis sed augue sed libero', 'Nov 2', 'Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem.', img[7]),
    createData('Vitae viverra justo', 'Nov 2', 'Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem.', img[34]),
  ]);

  return (
    <Fragment>
      <div className={classes.root}>
        <section id="headline">
          <HeadlineCard
            title="Title of a longer featured blog post"
            desc="Multiple lines of text that form the lede, informing new readers quickly and efficiently about what&apos;s most interesting in this post&apos;s contents…"
            thumbnail={img[0]}
          />
        </section>
        <Divider className={classes.divider} />
        {!mdUp && (
          <Typography variant="h4" gutterBottom>Popular Post</Typography>
        )}
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <ShowcaseCard
              landscape
              title="Post title"
              date="Nov 12"
              desc="Aenean facilisis vitae purus facilisis semper."
              action="Read more"
              image={img[5]}
              href="/blog/article"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <ShowcaseCard
              landscape
              title="Featured post"
              date="Nov 11"
              desc="Duis sed augue phasellus ante massa."
              action="Read more"
              image={img[6]}
              href="/blog/article"
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item md={8} xs={12}>
            <section className={classes.postList}>
              {!mdUp && (
                <Typography variant="h4" gutterBottom>Latest Post</Typography>
              )}
              {postData.map((item, index) => (
                <ShowcaseCard
                  key={index.toString()}
                  title={item.title}
                  date={item.date}
                  desc={item.desc}
                  action="Read more"
                  image={item.image}
                  noMargin
                  extraSize
                  href="/blog/article"
                />
              ))}
            </section>
            <div className={classes.pagination}>
              <Button disabled className={classes.button} variant="outlined" color="primary">
                <ArrowBack />
                Previous
              </Button>
              <Button className={classes.button} variant="outlined" color="primary">
                Next
                <ArrowForward />
              </Button>
            </div>
          </Grid>
          <Grid item md={4} xs={12}>
            <SidebarBlog />
          </Grid>
        </Grid>
      </div>
      <section id="contact">
        <Contact />
      </section>
    </Fragment>
  );
}

export default Blog;
