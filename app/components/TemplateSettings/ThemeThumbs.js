import React from 'react';
import Radio from '@mui/material/Radio';
import PropTypes from 'prop-types';
import Tooltip from '@mui/material/Tooltip';
import { connect } from 'react-redux';
import themePalette from 'dan-api/palette/themePalette';
import useStyles from './settings-jss';

const ThemeThumb = props => {
  const { classes, cx } = useStyles();
  const {
    theme,
    value,
    selectedValue,
    handleChange,
    name
  } = props;
  return (
    <div className={cx(classes.thumb, theme === value ? classes.selectedTheme : '')}>
      <Radio
        checked={selectedValue === value}
        value={value}
        onChange={handleChange}
      />
      <Tooltip title={name} placement="top">
        <div className={classes.appPreview}>
          <div className={classes.decoration} style={{ backgroundImage: `linear-gradient(-45deg, ${themePalette[value].palette.primary.main} 0%, ${themePalette[value].palette.primary.main} 33%, ${themePalette[value].palette.secondary.main} 100%)` }} />
          <ul>
            <li style={{ backgroundColor: themePalette[value].palette.primary.main }} />
            <li style={{ backgroundColor: themePalette[value].palette.secondary.main }} />
          </ul>
        </div>
      </Tooltip>
    </div>
  );
};

ThemeThumb.propTypes = {
  theme: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  selectedValue: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

// Redux
const mapStateToProps = state => ({
  theme: state.ui.theme
});

const ThumbsMapped = connect(
  mapStateToProps,
)(ThemeThumb);

export default ThumbsMapped;
