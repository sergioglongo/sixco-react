import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SearchIcon from '@mui/icons-material/Search';
import PermContactCalendar from '@mui/icons-material/PermContactCalendar';
import Add from '@mui/icons-material/Add';
import Star from '@mui/icons-material/Star';
import IconButton from '@mui/material/IconButton';
import useStyles from './contact-jss';

function ContactList(props) {
  const { classes, cx } = useStyles();
  const {
    dataContact,
    itemSelected,
    showDetail,
    search,
    keyword,
    clippedRight,
    addContact,
    addFn, total
  } = props;
  const [filter, setFilter] = useState('all');

  const handleChange = (event, value) => {
    setFilter(value);
  };

  const favoriteData = dataContact.filter(item => item.favorited === true);
  const getItem = dataArray => dataArray.map(data => {
    const index = dataContact.indexOf(data);
    if (data.name.toLowerCase().indexOf(keyword) === -1) {
      return false;
    }
    return (
      <ListItem
        button
        key={data.id}
        className={index === itemSelected ? classes.selected : ''}
        onClick={() => showDetail(data)}
      >
        <ListItemAvatar>
          <Avatar alt={data.name} src={data.avatar} className={classes.avatar} />
        </ListItemAvatar>
        <ListItemText primary={data.name} secondary={data.title} />
      </ListItem>
    );
  });
  return (
    <Fragment>
      <Drawer
        variant="permanent"
        anchor="left"
        open
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div>
          <div className={cx(classes.toolbar, clippedRight && classes.clippedRight)}>
            <div className={classes.flex}>
              <div className={classes.searchWrapper}>
                <div className={classes.search}>
                  <SearchIcon />
                </div>
                <input className={classes.input} onChange={(event) => search(event)} placeholder="Search" />
              </div>
              {addFn && (
                <Tooltip title="Add New Contact">
                  <IconButton
                    className={classes.buttonAdd}
                    onClick={() => addContact()}
                    color="secondary"
                    aria-label="Delete"
                    size="large">
                    <Add />
                  </IconButton>
                </Tooltip>
              )}
            </div>
          </div>
          <div className={classes.total}>
            {total}
            &nbsp;
            Contacts
          </div>
          <List>
            {filter === 'all' ? getItem(dataContact) : getItem(favoriteData)}
          </List>
        </div>
      </Drawer>
      <BottomNavigation value={filter} onChange={handleChange} className={classes.bottomFilter}>
        <BottomNavigationAction label="All" value="all" icon={<PermContactCalendar />} />
        <BottomNavigationAction label="Favorites" value="favorites" icon={<Star />} />
      </BottomNavigation>
    </Fragment>
  );
}

ContactList.propTypes = {
  total: PropTypes.number.isRequired,
  dataContact: PropTypes.array.isRequired,
  keyword: PropTypes.string.isRequired,
  itemSelected: PropTypes.number.isRequired,
  addContact: PropTypes.func,
  addFn: PropTypes.bool,
  showDetail: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  clippedRight: PropTypes.bool,
};

ContactList.defaultProps = {
  clippedRight: false,
  addContact: () => { },
  addFn: false,
};

export default ContactList;
