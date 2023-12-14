import React from 'react';
import { withStyles, makeStyles } from 'tss-react/mui';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

const LightTooltip = withStyles(Tooltip, (theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

const useStylesBootstrap = makeStyles()((theme) => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
  },
}));

function BootstrapTooltip(props) {
  const { classes } = useStylesBootstrap();

  return <Tooltip arrow classes={classes} {...props} />;
}

const HtmlTooltip = withStyles(Tooltip, (theme) => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}));

export default function CustomizedTooltips() {
  return (
    <div>
      <LightTooltip title="Add">
        <Button>Light</Button>
      </LightTooltip>
      <BootstrapTooltip title="Add">
        <Button>Bootstrap</Button>
      </BootstrapTooltip>
      <HtmlTooltip
        title={(
          <React.Fragment>
            <Typography color="inherit">Tooltip with HTML</Typography>
            <em>
              And here&quote;s
            </em>
            <b>some</b>
            <u>amazing content</u>
            It&quote;s very engaging. Right?
          </React.Fragment>
        )}
      >
        <Button>HTML</Button>
      </HtmlTooltip>
    </div>
  );
}
