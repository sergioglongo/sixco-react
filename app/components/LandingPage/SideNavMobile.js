import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { SmoothScrollLink } from 'organism-react-scroll-nav';
import logo from 'dan-images/logo.svg';
import brand from 'dan-api/dummy/brand';
import useStyles from '../Sidebar/sidebar-jss';

function SideNavMobile(props) {
  const { menuList, closeDrawer } = props;
  const { classes, cx } = useStyles();

  const MenuItem = ({ targetInfo, ...reset }) => {
    let activeClass = '';
    if (targetInfo.active) {
      activeClass = classes.active;
    }
    return (
      <ListItem
        button
        className={cx(classes.headCapital, activeClass)}
        onClick={closeDrawer}
        {...reset}
      />
    );
  };

  MenuItem.propTypes = {
    targetInfo: PropTypes.object,
  };

  MenuItem.defaultProps = {
    targetInfo: null
  };

  return (
    <div className={classes.drawerInnerMobile}>
      <div className={classes.drawerHeader}>
        <div className={classes.brandBig}>
          <img src={logo} alt={brand.name} />
          <h3>{brand.name}</h3>
        </div>
      </div>
      <div className={cx(classes.menuContainer, classes.landingNav, classes.rounded)}>
        <List className={classes.dense} id="side-nav-parent" component="nav">
          {menuList.map((item, index) => (
            <SmoothScrollLink
              key={index.toString()}
              scrollRefId="side-nav-parent"
              container={<MenuItem />}
              targetId={item.name}
            >
              <ListItemText classes={{ primary: classes.primary }} variant="inset" primary={item.name} />
            </SmoothScrollLink>
          ))}
        </List>
        <Typography variant="caption" className={classes.copyright}>
          &copy; 2022 Dandelion Designs
          <br />
          All Right Reserved
        </Typography>
      </div>
    </div>
  );
}

SideNavMobile.propTypes = {
  menuList: PropTypes.array.isRequired,
  closeDrawer: PropTypes.func.isRequired,
};

export default SideNavMobile;
