import React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

function DelayTooltips() {
  return (
    <Tooltip title="Add" enterDelay={500} leaveDelay={200}>
      <Button>[500ms, 200ms]</Button>
    </Tooltip>
  );
}

export default DelayTooltips;
