import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import LocalPhone from '@mui/icons-material/LocalPhone';
import DateRange from '@mui/icons-material/DateRange';
import LocationOn from '@mui/icons-material/LocationOn';
import Divider from '@mui/material/Divider';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import imgData from 'dan-api/images/imgData';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Send from '@mui/icons-material/Send';
import { PapperBlock } from 'dan-components';
import useStyles from './blogStyle-jss';

function SidebarBlog() {
  const { classes, cx } = useStyles();
  const [email, setEmail] = useState('');

  const handleChange = event => {
    setEmail(event.target.value);
  };

  return (
    <div>
      {/* Subscribe */}
      <PapperBlock title="Subscribe" icon="ion-ios-wifi-outline" colorMode whiteBg noMargin desc="Get lates update from us">
        <div className={classes.subscribeForm}>
          <FormControl variant="standard">
            <TextField
              variant="standard"
              label="Email"
              className={classes.textField}
              value={email}
              onChange={handleChange}
              margin="normal"
              classes={{
                root: classes.whiteInputRoot,
                input: classes.whiteInputInput,
              }} />
          </FormControl>
          <Fab size="small" color="secondary" type="submit">
            <Send />
          </Fab>
        </div>
      </PapperBlock>
      {/* ----------------------------------------------------------------------*/}
      <Divider className={classes.divider} />
      {/* About */}
      <PapperBlock title="About Me" icon="ion-ios-contact-outline" whiteBg noMargin desc="Consectetur adipiscing elit. Suspendisse sed urna in justo euismod condimentum.">
        <List dense className={classes.profileList}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <DateRange />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Born" secondary="Jan 9, 1994" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <LocalPhone />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Phone" secondary="(+62)8765432190" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <LocationOn />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Address"
              secondary="Chicendo Street no.105 Block A/5A - Barcelona, Spain"
              classes={{
                root: classes.listText
              }}
            />
          </ListItem>
        </List>
      </PapperBlock>
      {/* ----------------------------------------------------------------------*/}
      <Divider className={classes.divider} />
      {/* latest Posts */}
      <PapperBlock title="latest Posts" icon="ion-ios-bookmark-outline" whiteBg desc="">
        <div className={classes.albumRoot}>
          <List>
            <ListItem button>
              <ListItemText primary="Curabitur egestas consequat " secondary="Jan 9, 2014" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Interdum et malesuada fames" secondary="Jan 7, 2014" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Pellentesque ullamcorper" secondary="July 20, 2014" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Quisque a consequat ante" secondary="July 20, 2014" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Donec dignissim odio ac" secondary="July 20, 2014" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Curabitur egestas consequat " secondary="Jan 9, 2014" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Interdum et malesuada fames" secondary="Jan 7, 2014" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Pellentesque ullamcorper" secondary="July 20, 2014" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Quisque a consequat ante" secondary="July 20, 2014" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Donec dignissim odio ac" secondary="July 20, 2014" />
            </ListItem>
          </List>
        </div>
      </PapperBlock>
      {/* latest comment */}
      <PapperBlock title="Latest Comment" icon="ion-ios-text-outline" whiteBg desc="">
        <List dense className={classes.profileList}>
          <ListItem button>
            <Avatar className={cx(classes.avatar, classes.orangeAvatar)}>H</Avatar>
            <ListItemText primary="Harry Wells" secondary="in Vestibulum bibendum" />
          </ListItem>
          <ListItem button>
            <Avatar className={cx(classes.avatar, classes.purpleAvatar)}>J</Avatar>
            <ListItemText primary="John DOe" secondary="in Quisque ut metus" />
          </ListItem>
          <ListItem button>
            <Avatar className={cx(classes.avatar, classes.pinkAvatar)}>V</Avatar>
            <ListItemText primary="Victor Wanggai" secondary="in Vestibulum bibendum" />
          </ListItem>
          <ListItem button>
            <Avatar className={cx(classes.avatar, classes.greenAvatar)}>H</Avatar>
            <ListItemText primary="Baron Phoenix" secondary="Aenean sit amet magna" />
          </ListItem>
          <ListItem button>
            <Avatar className={cx(classes.avatar, classes.greenAvatar)}>H</Avatar>
            <ListItemText primary="Baron Phoenix" secondary="Aenean sit amet magna" />
          </ListItem>
        </List>
      </PapperBlock>
      {/* ----------------------------------------------------------------------*/}
      {/* Archived */}
      <PapperBlock title="Archived" icon="ion-ios-folder-open-outline" whiteBg desc="">
        <div className={classes.albumRoot}>
          <List>
            <ListItem button>
              <ListItemText primary="October 2018" />
              <ListItemIcon>
                <KeyboardArrowRight />
              </ListItemIcon>
            </ListItem>
            <ListItem button>
              <ListItemText primary="September 2018" />
              <ListItemIcon>
                <KeyboardArrowRight />
              </ListItemIcon>
            </ListItem>
            <ListItem button>
              <ListItemText primary="Augustus 2018" />
              <ListItemIcon>
                <KeyboardArrowRight />
              </ListItemIcon>
            </ListItem>
            <ListItem button>
              <ListItemText primary="July 2018" />
              <ListItemIcon>
                <KeyboardArrowRight />
              </ListItemIcon>
            </ListItem>
            <ListItem button>
              <ListItemText primary="Jun 2018" />
              <ListItemIcon>
                <KeyboardArrowRight />
              </ListItemIcon>
            </ListItem>
            <ListItem button>
              <ListItemText primary="May 2018" />
              <ListItemIcon>
                <KeyboardArrowRight />
              </ListItemIcon>
            </ListItem>
            <ListItem button>
              <ListItemText primary="April 2018" />
              <ListItemIcon>
                <KeyboardArrowRight />
              </ListItemIcon>
            </ListItem>
            <ListItem button>
              <ListItemText primary="Marh 2018" />
              <ListItemIcon>
                <KeyboardArrowRight />
              </ListItemIcon>
            </ListItem>
            <ListItem button>
              <ListItemText primary="Febuary 2018" />
              <ListItemIcon>
                <KeyboardArrowRight />
              </ListItemIcon>
            </ListItem>
            <ListItem button>
              <ListItemText primary="January 2018" />
              <ListItemIcon>
                <KeyboardArrowRight />
              </ListItemIcon>
            </ListItem>
          </List>
        </div>
      </PapperBlock>
      {/* ----------------------------------------------------------------------*/}
      {/* Albums Post */}
      <PapperBlock title="Album Posts" icon="ion-ios-images-outline" whiteBg desc="">
        <div className={classes.albumRoot}>
          <ImageList rowHeight={180} className={classes.gridList}>
            {
              imgData.map((tile, index) => {
                if (index >= 4) {
                  return false;
                }
                return (
                  <ImageListItem key={index.toString()}>
                    <img src={tile.img} className={classes.img} alt={tile.title} />
                    <ImageListItemBar
                      title={tile.title}
                      subtitle={(
                        <span>
                          by:&nbsp;
                          {tile.author}
                        </span>
                      )}
                      actionIcon={(
                        <IconButton className={classes.icon} size="large">
                          <InfoIcon />
                        </IconButton>
                      )}
                    />
                  </ImageListItem>
                );
              })
            }
          </ImageList>
        </div>
        <Divider className={classes.divider} />
        <Grid container justifyContent="center">
          <Button color="secondary" className={classes.button}>
            See All
          </Button>
        </Grid>
      </PapperBlock>
    </div>
  );
}

export default SidebarBlog;
