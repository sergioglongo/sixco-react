import React from 'react';
import Radio from '@mui/material/Radio';
import PropTypes from 'prop-types';
import useStyles from './settings-jss';

const LayoutThumbs = props => {
  const { classes, cx } = useStyles();
  const {
    handleChange,
    selectedLayout,
    value,
    name,
    preview
  } = props;
  return (
    <div className={cx(classes.thumb, selectedLayout === value ? classes.selectedTheme : '')}>
      <Radio
        checked={selectedLayout === value}
        value={value}
        onChange={handleChange}
      />
      <div className={classes.appPreview}>
        {preview}
        {name}
      </div>
    </div>
  );
};

LayoutThumbs.propTypes = {
  value: PropTypes.string.isRequired,
  selectedLayout: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  preview: PropTypes.node.isRequired,
};

export default LayoutThumbs;
