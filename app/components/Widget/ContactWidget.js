import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import useMediaQuery from '@mui/material/useMediaQuery';
import Badge from '@mui/material/Badge';
import Paper from '@mui/material/Paper';
import PhoneIcon from '@mui/icons-material/Phone';
import Chat from '@mui/icons-material/Chat';
import Mail from '@mui/icons-material/Mail';
import NotificationsActive from '@mui/icons-material/NotificationsActive';
import Info from '@mui/icons-material/Info';
import Warning from '@mui/icons-material/Warning';
import Check from '@mui/icons-material/CheckCircle';
import Error from '@mui/icons-material/RemoveCircle';
import AccountBox from '@mui/icons-material/AccountBox';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PlaylistAddCheck from '@mui/icons-material/PlaylistAddCheck';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import messageStyles from 'dan-styles/Messages.scss';
import dataContact from '../../containers/SampleApps/Contact/api/contactData';
import useStyles from './widget-jss';

/* Tab Container */
function TabContainer(props) {
  const { children } = props;
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
/* END Tab Container */

/* Contact List */
function ContactList(props) {
  const { classes } = useStyles();
  const smDown = useMediaQuery(theme => theme.breakpoints.down('sm'));
  const smUp = useMediaQuery(theme => theme.breakpoints.up('sm'));

  const getItem = dataArray => dataArray.map(data => (
    <ListItem
      button
      key={data.id}
    >
      <Avatar alt={data.name} src={data.avatar} className={classes.avatar} />
      <ListItemText primary={data.name} secondary={data.title} />
      {!smDown && (
        <ListItemSecondaryAction>
          <Tooltip title="Chat">
            <IconButton className={classes.blueText} aria-label="Chat" size="large">
              <Chat />
            </IconButton>
          </Tooltip>
          <Tooltip title="Email">
            <IconButton className={classes.pinkText} aria-label="Email" size="large">
              <Mail />
            </IconButton>
          </Tooltip>
          <Tooltip title="Call">
            <IconButton className={classes.tealText} aria-label="Telp" size="large">
              <PhoneIcon />
            </IconButton>
          </Tooltip>
        </ListItemSecondaryAction>
      )}
      {!smUp && (
        <ListItemSecondaryAction>
          <IconButton
            aria-label="More"
            aria-haspopup="true"
            onClick={props.openMenu}
            size="large">
            <MoreVertIcon />
          </IconButton>
        </ListItemSecondaryAction>
      )}
    </ListItem>
  ));
  return (
    <List>
      {getItem(dataContact)}
    </List>
  );
}

ContactList.propTypes = {
  openMenu: PropTypes.func.isRequired,
};

const ContactListStyled = ContactList;
/* END Contact List */

/* Conversation List */
function MessagesList() {
  const { classes } = useStyles();
  return (
    <List>
      <ListItem button component={NavLink} to="/app/pages/chat">
        <Avatar alt={dataContact[2].name} src={dataContact[2].avatar} className={classes.avatar} />
        <ListItemText primary={dataContact[2].name} className={classes.messages} secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <ListItemSecondaryAction>
          <Typography variant="caption">10:42 PM</Typography>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem button component={NavLink} to="/app/pages/chat">
        <Avatar alt={dataContact[5].name} src={dataContact[5].avatar} className={classes.avatar} />
        <ListItemText primary={dataContact[5].name} className={classes.messages} secondary="Sed a ipsum euismod, eleifend turpis sed." />
        <ListItemSecondaryAction>
          <Typography variant="caption">11:17 AM</Typography>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem button component={NavLink} to="/app/pages/chat">
        <Avatar alt={dataContact[1].name} src={dataContact[1].avatar} className={classes.avatar} />
        <ListItemText primary={dataContact[1].name} className={classes.messages} secondary="Praesent viverra est et risus fringilla bibendum." />
        <ListItemSecondaryAction>
          <Typography variant="caption">11 Oct</Typography>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem button component={NavLink} to="/app/pages/chat">
        <Avatar alt={dataContact[0].name} src={dataContact[0].avatar} className={classes.avatar} />
        <ListItemText primary={dataContact[0].name} className={classes.messages} secondary="Praesent at ex non leo iaculis dignissim. Proin nec venenatis nulla, nec vulputate ipsum. Curabitur eu dignissim nibh, eget condimentum massa." />
        <ListItemSecondaryAction>
          <Typography variant="caption">12 Oct</Typography>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
}

const MessagesListStyled = MessagesList;
/* END Conversation List */

/* Email List */
function NotifList(props) {
  const { openMenu } = props;
  const { classes } = useStyles();
  const smUp = useMediaQuery(theme => theme.breakpoints.up('sm'));
  const smDown = useMediaQuery(theme => theme.breakpoints.down('sm'));

  return (
    <List>
      <ListItem button className={messageStyles.messageInfo}>
        <Avatar className={messageStyles.icon}>
          <Info />
        </Avatar>
        <ListItemText primary="Lorem ipsum dolor" secondary="12 Oct 2018" />
        {!smDown && (
          <ListItemSecondaryAction>
            <Button variant="outlined" size="small" color="primary" className={classes.button}>
              Fix it
            </Button>
            <Button variant="outlined" size="small" className={classes.button}>
              Skip
            </Button>
          </ListItemSecondaryAction>
        )}
        {!smUp && (
          <ListItemSecondaryAction>
            <IconButton aria-label="More" aria-haspopup="true" onClick={openMenu} size="large">
              <MoreVertIcon />
            </IconButton>
          </ListItemSecondaryAction>
        )}
      </ListItem>
      <ListItem button className={messageStyles.messageSuccess}>
        <Avatar className={messageStyles.icon}>
          <Check />
        </Avatar>
        <ListItemText primary="Lorem ipsum dolor" secondary="12 Oct 2018" />
        {!smDown && (
          <ListItemSecondaryAction>
            <Button variant="outlined" size="small" color="primary" className={classes.button}>
              Fix it
            </Button>
            <Button variant="outlined" size="small" className={classes.button}>
              Skip
            </Button>
          </ListItemSecondaryAction>
        )}
        {!smUp && (
          <ListItemSecondaryAction>
            <IconButton aria-label="More" aria-haspopup="true" onClick={openMenu} size="large">
              <MoreVertIcon />
            </IconButton>
          </ListItemSecondaryAction>
        )}
      </ListItem>
      <ListItem button className={messageStyles.messageWarning}>
        <Avatar className={messageStyles.icon}>
          <Warning />
        </Avatar>
        <ListItemText primary="Lorem ipsum dolor" secondary="12 Oct 2018" />
        {!smDown && (
          <ListItemSecondaryAction>
            <Button variant="outlined" size="small" color="primary" className={classes.button}>
              Fix it
            </Button>
            <Button variant="outlined" size="small" className={classes.button}>
              Skip
            </Button>
          </ListItemSecondaryAction>
        )}
        {!smUp && (
          <ListItemSecondaryAction>
            <IconButton aria-label="More" aria-haspopup="true" onClick={openMenu} size="large">
              <MoreVertIcon />
            </IconButton>
          </ListItemSecondaryAction>
        )}
      </ListItem>
      <ListItem button className={messageStyles.messageError}>
        <Avatar className={messageStyles.icon}>
          <Error />
        </Avatar>
        <ListItemText primary="Lorem ipsum dolor" secondary="12 Oct 2018" />
        {!smDown && (
          <ListItemSecondaryAction>
            <Button variant="outlined" size="small" color="primary" className={classes.button}>
              Fix it
            </Button>
            <Button variant="outlined" size="small" className={classes.button}>
              Skip
            </Button>
          </ListItemSecondaryAction>
        )}
        {!smUp && (
          <ListItemSecondaryAction>
            <IconButton aria-label="More" aria-haspopup="true" onClick={openMenu} size="large">
              <MoreVertIcon />
            </IconButton>
          </ListItemSecondaryAction>
        )}
      </ListItem>
    </List>
  );
}

NotifList.propTypes = {
  openMenu: PropTypes.func.isRequired,
};

const NotifListStyled = NotifList;
/* END Email List */

function ContactWidget() {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElAction, setAnchorElAction] = useState(null);

  const mdDown = useMediaQuery(theme => theme.breakpoints.down('md'));
  const mdUp = useMediaQuery(theme => theme.breakpoints.up('md'));

  const handleChange = (event, val) => {
    setValue(val);
  };

  const handleOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleOpenAction = event => {
    setAnchorElAction(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAnchorElAction(null);
  };

  const { classes } = useStyles();
  const open = Boolean(anchorEl);
  const openAct = Boolean(anchorElAction);
  return (
    <Fragment>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Chat className={classes.blueText} />
          </ListItemIcon>
          <ListItemText variant="inset" primary="Chat" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Mail className={classes.pinkText} />
          </ListItemIcon>
          <ListItemText variant="inset" primary="Email" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PhoneIcon className={classes.tealText} />
          </ListItemIcon>
          <ListItemText variant="inset" primary="Call" />
        </MenuItem>
      </Menu>
      <Menu
        id="long-menu-act"
        anchorEl={anchorElAction}
        open={openAct}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Check className={classes.tealText} />
          </ListItemIcon>
          <ListItemText variant="inset" primary="Fix it" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PlaylistAddCheck />
          </ListItemIcon>
          <ListItemText variant="inset" primary="Skip" />
        </MenuItem>
      </Menu>
      <Paper className={classes.rootContact}>
        <AppBar position="static" color="default">
          {!mdUp && (
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab icon={<AccountBox />} />
              <Tab icon={<Chat />} />
              <Tab icon={<NotificationsActive />} />
            </Tabs>
          )}
          {!mdDown && (
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab label="Contacts" icon={<AccountBox />} />
              <Tab
                label={(
                  <Badge className={classes.tabNotif} color="secondary" badgeContent={4}>
                    Messages
                  </Badge>
                )}
                icon={<Chat />}
              />
              <Tab
                label={(
                  <Badge className={classes.tabNotif} color="secondary" badgeContent={4}>
                    Notifications
                  </Badge>
                )}
                icon={<NotificationsActive />}
              />
            </Tabs>
          )}
        </AppBar>
        {value === 0 && <TabContainer><ContactListStyled openMenu={handleOpen} /></TabContainer>}
        {value === 1 && <TabContainer><MessagesListStyled /></TabContainer>}
        {value === 2 && <TabContainer><NotifListStyled openMenu={handleOpenAction} /></TabContainer>}
      </Paper>
    </Fragment>
  );
}

export default ContactWidget;
