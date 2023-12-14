import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import ArchiveIcon from '@mui/icons-material/Archive';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import useStyles from '../tableStyle-jss';

function TableToolbar(props) {
  const { classes, cx } = useStyles();
  const {
    numSelected,
    filterText,
    placeholder,
    title,
    onUserInput
  } = props;

  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = useCallback(() => {
    setShowSearch(show => !show);
  }, []);

  const handleChange = useCallback((event) => {
    event.persist();
    onUserInput(event.target.value);
  }, [onUserInput]);

  return (
    <Toolbar
      className={cx(classes.toolbar, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      <div className={classes.title}>
        {numSelected > 0 ? (
          <Typography color="inherit" variant="subtitle1">
            {numSelected}
              &nbsp;selected
          </Typography>
        ) : (
          <Typography variant="h6">{title}</Typography>
        )}
      </div>
      <div className={classes.spacer} />
      <div className={classes.actionsToolbar}>
        {numSelected > 0 ? (
          <div>
            <Tooltip title="Bookmark">
              <IconButton aria-label="Bookmark" size="large">
                <BookmarkIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Archive">
              <IconButton aria-label="Archive" size="large">
                <ArchiveIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton aria-label="Delete" size="large">
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </div>
        ) : (
          <div className={classes.actions}>
            {showSearch && (
              <FormControl variant="standard" className={cx(classes.textField)}>
                <Input
                  id="search_filter"
                  type="text"
                  placeholder={placeholder}
                  value={filterText}
                  onChange={(event) => handleChange(event)}
                  endAdornment={(
                    <InputAdornment position="end">
                      <IconButton aria-label="Search filter" size="large">
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  )}
                />
              </FormControl>
            )}
            <Tooltip title="Filter list">
              <IconButton
                aria-label="Filter list"
                className={classes.filterBtn}
                onClick={() => toggleSearch()}
                size="large">
                <FilterListIcon />
              </IconButton>
            </Tooltip>
          </div>
        )}
      </div>
    </Toolbar>
  );
}

TableToolbar.propTypes = {
  filterText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onUserInput: PropTypes.func.isRequired,
  numSelected: PropTypes.number.isRequired,
};

export default TableToolbar;
