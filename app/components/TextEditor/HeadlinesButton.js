import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import HeadlinesPicker from './HeadlinesPicker';
import useStyles from './editorStyles-jss';

function HeadlinesButton(props) {
  const { onOverrideContent } = props;
  const { classes } = useStyles();
  // When using a click event inside overridden content, mouse down
  // events needs to be prevented so the focus stays in the editor
  // and the toolbar remains visible  onMouseDown = (event) => event.preventDefault()
  const onMouseDown = (event) => event.preventDefault();

  const onClick = useCallback(() => {
    // A button can call `onOverrideContent` to replace the content
    // of the toolbar. This can be useful for displaying sub
    // menus or requesting additional information from the user.
    onOverrideContent(HeadlinesPicker);
  }, [onOverrideContent]);

  return (
    <div role="button" tabIndex={0} onMouseDown={onMouseDown} className={classes.headlineButtonWrapper}>
      <button type="button" onClick={onClick} className={classes.headlineButton}>
        H
      </button>
    </div>
  );
}

HeadlinesButton.propTypes = {
  onOverrideContent: PropTypes.func.isRequired,
};

export default HeadlinesButton;
