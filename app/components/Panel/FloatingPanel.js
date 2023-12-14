import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@mui/material/useMediaQuery';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ExpandIcon from '@mui/icons-material/CallMade';
import MinimizeIcon from '@mui/icons-material/CallReceived';
import useStyles from './panel-jss';

function FloatingPanel(props) {
  const [expanded, setExpanded] = useState(false);
  const { classes, cx } = useStyles();
  const mdDown = useMediaQuery(theme => theme.breakpoints.down('lg'));
  const {
    openForm,
    closeForm,
    children,
    branch,
    title,
    extraSize,
  } = props;

  const toggleExpand = () => {
    setExpanded(expand => !expand);
  };

  return (
    <div>
      <div className={
        cx(
          classes.formOverlay,
          openForm && (mdDown || expanded) ? classes.showForm : classes.hideForm)
      }
      />
      <section className={
        cx(
          !openForm ? classes.hideForm : classes.showForm,
          expanded ? classes.expanded : '',
          classes.floatingForm,
          classes.formTheme,
          extraSize && classes.large)
      }
      >
        <header>
          {title}
          <div className={classes.btnOpt}>
            <Tooltip title={expanded ? 'Exit Full Screen' : 'Full Screen'}>
              <IconButton
                className={classes.expandButton}
                onClick={() => toggleExpand()}
                aria-label="Expand"
                size="large">
                {expanded ? <MinimizeIcon /> : <ExpandIcon />}
              </IconButton>
            </Tooltip>
            <Tooltip title="Close">
              <IconButton
                className={classes.closeButton}
                onClick={() => closeForm(branch)}
                aria-label="Close"
                size="large">
                <CloseIcon />
              </IconButton>
            </Tooltip>
          </div>
        </header>
        {children}
      </section>
    </div>
  );
}

FloatingPanel.propTypes = {
  openForm: PropTypes.bool.isRequired,
  closeForm: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  branch: PropTypes.string.isRequired,
  title: PropTypes.string,
  extraSize: PropTypes.bool,
};

FloatingPanel.defaultProps = {
  title: 'Add New Item',
  extraSize: false,
};

export default FloatingPanel;
