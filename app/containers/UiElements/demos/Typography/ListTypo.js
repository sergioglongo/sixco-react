import React from 'react';
import { makeStyles } from 'tss-react/mui';
import Typography from '@mui/material/Typography';
import Type from 'dan-styles/Typography.scss';
import Divider from '@mui/material/Divider';

const useStyles = makeStyles()((theme) => ({
  divider: {
    margin: `${theme.spacing(3)} 0`,
  }
}));

function ListTypo() {
  const {
    classes
  } = useStyles();
  return (
    <div>
      <Typography variant="button" className={classes.divider}>Unordered List</Typography>
      <div>
        <ul className={Type.list}>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Consectetur adipiscing elit</li>
          <li>Integer molestie lorem at massa</li>
          <li>Facilisis in pretium nisl aliquet</li>
          <li>
            Nulla volutpat aliquam velit
            <ul>
              <li>Phasellus iaculis neque</li>
              <li>Purus sodales ultricies</li>
              <li>Vestibulum laoreet porttitor sem</li>
              <li>Ac tristique libero volutpat at</li>
            </ul>
          </li>
          <li>Faucibus porta lacus fringilla vel</li>
          <li>Aenean sit amet erat nunc</li>
          <li>Eget porttitor lorem</li>
        </ul>
      </div>
      <Divider className={classes.divider} />
      <Typography variant="button" className={classes.divider}>Ordered List</Typography>
      <div>
        <ul className={Type.orderedlist}>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Consectetur adipiscing elit</li>
          <li>Integer molestie lorem at massa</li>
          <li>Facilisis in pretium nisl aliquet</li>
          <li>
            Nulla volutpat aliquam velit
            <ul>
              <li>Phasellus iaculis neque</li>
              <li>Purus sodales ultricies</li>
              <li>Vestibulum laoreet porttitor sem</li>
              <li>Ac tristique libero volutpat at</li>
            </ul>
          </li>
          <li>Faucibus porta lacus fringilla vel</li>
          <li>Aenean sit amet erat nunc</li>
          <li>Eget porttitor lorem</li>
        </ul>
      </div>
    </div>
  );
}

export default ListTypo;
