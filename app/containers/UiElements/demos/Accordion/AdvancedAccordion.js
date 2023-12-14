import React from 'react';
import { makeStyles } from 'tss-react/mui';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionActions from '@mui/material/AccordionActions';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

const useStyles = makeStyles()((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightMedium,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightMedium,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
    display: 'flex'
  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  },
  link: {
    color: theme.palette.secondary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

function AdvancedAccordion() {
  const {
    classes,
    cx
  } = useStyles();
  return (
    <div className={classes.root}>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div className={classes.column}>
            <Typography className={classes.heading}>Location</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>Select trip destination</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <div className={classes.column} />
          <div className={classes.column}>
            <Chip label="Barbados" className={classes.chip} onDelete={() => {}} />
          </div>
          <div className={cx(classes.column, classes.helper)}>
            <Typography variant="caption">
              Select your destination of choice
              <br />
              <a href="#sub-labels-and-columns" className={classes.link}>
                Learn more
              </a>
            </Typography>
          </div>
        </AccordionDetails>
        <Divider />
        <AccordionActions>
          <Button size="small">Cancel</Button>
          <Button size="small" color="secondary">
            Save
          </Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
}

export default AdvancedAccordion;
