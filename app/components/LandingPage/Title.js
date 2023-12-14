import React, { useMemo, memo } from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import useStyles from './landingStyle-jss';

function Title(props) {
  const { classes, cx } = useStyles();
  const {
    title,
    desc,
    align,
    nomargin,
    monocolor
  } = props;

  const getAlignment = useMemo(() => {
    switch (align) {
      case 'center':
        return classes.center;
      case 'right':
        return classes.right;
      default:
        return classes.left;
    }
  }, [align]);

  return (
    <div
      className={
        cx(
          classes.title,
          getAlignment,
          nomargin && classes.nomargin,
          monocolor ? classes.mono : classes.color
        )
      }
    >
      <Typography component="h2" variant="h4" gutterBottom>{title}</Typography>
      {desc !== '' && (<Typography component="p" variant="h5">{desc}</Typography>)}
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
  align: PropTypes.string,
  nomargin: PropTypes.bool,
  monocolor: PropTypes.bool,
};

Title.defaultProps = {
  desc: '',
  align: 'left',
  nomargin: false,
  monocolor: false
};

const MemoizeTitle = memo(Title);

export default MemoizeTitle;
