import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionActions from '@mui/material/AccordionActions';
import Tooltip from '@mui/material/Tooltip';
import Bookmark from '@mui/icons-material/Bookmark';
import Delete from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import ListSubheader from '@mui/material/ListSubheader';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Flag from '@mui/icons-material/Flag';
import People from '@mui/icons-material/People';
import QuestionAnswer from '@mui/icons-material/QuestionAnswer';
import ReportIcon from '@mui/icons-material/Report';
import LabelIcon from '@mui/icons-material/Label';
import FileIcon from '@mui/icons-material/Description';
import Download from '@mui/icons-material/CloudDownload';
import Divider from '@mui/material/Divider';
import StarBorder from '@mui/icons-material/StarBorder';
import Star from '@mui/icons-material/Star';
import isImage from '../Forms/helpers/helpers.js';
import useStyles from './email-jss';

const ITEM_HEIGHT = 80;
function EmailList(props) {
  const [anchorElOpt, setAnchorElOpt] = useState(null);
  const [itemToMove, setItemToMove] = useState(null);
  const { classes, cx } = useStyles();
  const {
    emailData,
    openMail,
    filterPage,
    keyword,
    remove,
    toggleStar,
    reply
  } = props;

  const handleClickOpt = (event, item) => {
    setAnchorElOpt(event.currentTarget);
    setItemToMove(item);
  };

  const handleCloseOpt = () => {
    setAnchorElOpt(null);
  };

  const handleMoveTo = (item, category) => {
    const { moveTo } = props;
    moveTo(item, category);
    setAnchorElOpt(null);
  };

  /* Basic Filter */
  const inbox = emailData.filter(item => item.category !== 'sent' && item.category !== 'spam');
  const stared = emailData.filter(item => item.stared);
  const sent = emailData.filter(item => item.category === 'sent');
  const spam = emailData.filter(item => item.category === 'spam');
  /* Category Filter */
  const updates = emailData.filter(item => item.category === 'updates');
  const social = emailData.filter(item => item.category === 'social');
  const forums = emailData.filter(item => item.category === 'forums');
  const promos = emailData.filter(item => item.category === 'promos');
  const getCategory = cat => {
    switch (cat) {
      case 'updates':
        return (
          <span className={cx(classes.iconOrange, classes.category)}>
            <Flag />
              &nbsp;Updates
          </span>
        );
      case 'social':
        return (
          <span className={cx(classes.iconRed, classes.category)}>
            <People />
              &nbsp;Social
          </span>
        );
      case 'promos':
        return (
          <span className={cx(classes.iconBlue, classes.category)}>
            <LabelIcon />
              &nbsp;Promos
          </span>
        );
      case 'forums':
        return (
          <span className={cx(classes.iconCyan, classes.category)}>
            <QuestionAnswer />
              &nbsp;Forums
          </span>
        );
      default:
        return false;
    }
  };
  const attachmentPreview = filesArray => filesArray.map((file, index) => {
    const base64File = URL.createObjectURL(file);
    if (isImage(file)) {
      return (
        <div key={index.toString()} className={classes.item}>
          <div className="imageContainer col fileIconImg">
            <div className="downloadBtn">
              <IconButton
                color="secondary"
                component="a"
                href={base64File}
                target="_blank"
                size="large">
                <Download />
              </IconButton>
            </div>
            <figure className="imgWrap"><img className="smallPreviewImg" src={base64File} alt="preview" /></figure>
          </div>
          <Typography noWrap>{file.name}</Typography>
        </div>
      );
    }
    return (
      <div key={index.toString()} className={classes.item}>
        <div className="imageContainer col fileIconImg">
          <div className="fileWrap">
            <div className="downloadBtn">
              <IconButton color="secondary" href={base64File} target="_blank" size="large">
                <Download />
              </IconButton>
            </div>
            <FileIcon className="smallPreviewImg" alt="preview" />
          </div>
        </div>
        <Typography noWrap>{file.name}</Typography>
      </div>
    );
  });
  const getEmail = dataArray => dataArray.map(mail => {
    const renderHTML = { __html: mail.content };
    if (mail.subject.toLowerCase().indexOf(keyword) === -1) {
      return false;
    }
    return (
      <Accordion className={classes.emailList} key={mail.id} onChange={() => openMail(mail)}>
        <AccordionSummary
          className={classes.emailSummary}
          expandIcon={<ExpandMoreIcon />}
          classes={{
            expandIcon: classes.arrowIcon
          }}
        >
          <div className={classes.fromHeading}>
            <Tooltip id="tooltip-mark" title="Stared">
              <IconButton onClick={() => toggleStar(mail)} className={classes.starBtn} size="large">{mail.stared ? (<Star className={classes.iconOrange} />) : (<StarBorder />)}</IconButton>
            </Tooltip>
            {
              mail.category !== 'spam'
                ? (<Avatar alt="avatar" src={mail.avatar} className={classes.avatar} />)
                : (<Avatar alt="avatar" className={classes.avatar}><ReportIcon /></Avatar>)
            }
            <Typography className={classes.heading} display="block">
              {mail.category === 'sent' && ('To ')}
              {mail.name}
              <Typography variant="caption" display="block">{mail.date}</Typography>
            </Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading} noWrap>{mail.subject}</Typography>
            {getCategory(mail.category)}
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <section>
            <div className={classes.topAction}>
              <Typography className={classes.headMail}>
                {mail.category !== 'sent' && (
                  <Fragment>
                    From&nbsp;
                    {mail.name}
                      &nbsp;to me
                  </Fragment>
                )}
              </Typography>
              <div className={classes.opt}>
                <Tooltip id="tooltip-mark" title="Stared">
                  <IconButton onClick={() => toggleStar(mail)} size="large">{mail.stared ? (<Star className={classes.iconOrange} />) : (<StarBorder />)}</IconButton>
                </Tooltip>
                <Tooltip id="tooltip-mark" title="Mark message to">
                  <IconButton
                    className={classes.button}
                    aria-label="mark"
                    aria-owns={anchorElOpt ? 'long-menu' : null}
                    aria-haspopup="true"
                    onClick={(event) => handleClickOpt(event, mail)}
                    size="large">
                    <Bookmark />
                  </IconButton>
                </Tooltip>
                <Tooltip id="tooltip-mark" title="Remove mail">
                  <IconButton
                    className={classes.button}
                    aria-label="Delete"
                    onClick={() => remove(mail)}
                    size="large"><Delete /></IconButton>
                </Tooltip>
              </div>
            </div>
            <div className={classes.emailContent}>
              <Typography variant="h6" gutterBottom>{mail.subject}</Typography>
              <article dangerouslySetInnerHTML={renderHTML} /> {/* eslint-disable-line */}
            </div>
            <div className={classes.preview}>
              {attachmentPreview(mail.attachment)}
            </div>
          </section>
        </AccordionDetails>
        <Divider />
        <AccordionActions>
          <div className={classes.action}>
            <Button size="small">Forwad</Button>
            <Button size="small" color="secondary" onClick={() => reply(mail)}>Reply</Button>
          </div>
        </AccordionActions>
      </Accordion>
    );
  });
  const showEmail = category => {
    switch (category) {
      case 'inbox':
        return getEmail(inbox);
      case 'stared':
        return getEmail(stared);
      case 'sent':
        return getEmail(sent);
      case 'spam':
        return getEmail(spam);
      case 'updates':
        return getEmail(updates);
      case 'social':
        return getEmail(social);
      case 'promos':
        return getEmail(promos);
      case 'forums':
        return getEmail(forums);
      default:
        return getEmail(inbox);
    }
  };
  return (
    <main className={classes.content}>
      <Menu
        id="long-menu"
        anchorEl={anchorElOpt}
        open={Boolean(anchorElOpt)}
        onClose={handleCloseOpt}
        className={classes.markMenu}
        PaperProps={{ style: { maxHeight: ITEM_HEIGHT * 4.5, width: 200 } }}
      >
        <List
          component="nav"
          subheader={<ListSubheader component="div">Mark to... </ListSubheader>}
        />
        <MenuItem onClick={() => handleMoveTo(itemToMove, 'updates')}>
          <Flag className={classes.iconOrange} />
            &nbsp;Updates
        </MenuItem>
        <MenuItem onClick={() => handleMoveTo(itemToMove, 'social')}>
          <People className={classes.iconRed} />
            &nbsp;Social
        </MenuItem>
        <MenuItem onClick={() => handleMoveTo(itemToMove, 'promos')}>
          <LabelIcon className={classes.iconBlue} />
            &nbsp;Promos
        </MenuItem>
        <MenuItem onClick={() => handleMoveTo(itemToMove, 'forums')}>
          <QuestionAnswer className={classes.iconCyan} />
            &nbsp;Forums
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => handleMoveTo(itemToMove, 'spam')}>
          <ReportIcon />
            &nbsp;Spam
        </MenuItem>
      </Menu>
      {emailData.length > 0 && showEmail(filterPage)}
    </main>
  );
}

EmailList.propTypes = {
  emailData: PropTypes.array.isRequired,
  openMail: PropTypes.func.isRequired,
  moveTo: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  toggleStar: PropTypes.func.isRequired,
  reply: PropTypes.func.isRequired,
  filterPage: PropTypes.string.isRequired,
  keyword: PropTypes.string.isRequired,
};

export default EmailList;
