import React from 'react';
import Paper from '@mui/material/Paper';
import useStyles from './thumbPreview-jss';

const LeftSidebarThumb = () => {
  const { classes } = useStyles();
  return (
    <Paper className={classes.thumb}>
      <div className={classes.appPreview}>
        <header />
        <nav>
          <ul>
            {[0, 1, 2, 3].map(index => {
              if (index === 1) {
                return (
                  <li key={index.toString()} className={classes.active}>
                    <i />
                  </li>
                );
              }
              return (
                <li key={index.toString()}>
                  <i />
                </li>
              );
            })}
          </ul>
        </nav>
        <aside>
          <ul>
            {[0, 1, 2, 3, 4].map(index => {
              if (index === 1) {
                return (
                  <li key={index.toString()} className={classes.active}>
                    <i />
                    <p />
                  </li>
                );
              }
              return (
                <li key={index.toString()}>
                  <i />
                  <p />
                </li>
              );
            })}
          </ul>
        </aside>
        <div className={classes.previewWrap}>
          <Paper className={classes.content}>
            <div className={classes.title} />
            <div className={classes.ctn1} />
            <div className={classes.ctn2} />
            <div className={classes.ctn2} />
            <div className={classes.ctn2} />
            <div className={classes.ctn2} />
          </Paper>
        </div>
      </div>
    </Paper>
  );
};

export default LeftSidebarThumb;
