import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from 'tss-react/mui';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';

const useStyles = makeStyles()((theme) => ({
  search: {
    display: 'block',
    marginBottom: 10,
    padding: 5,
    borderRadius: theme.rounded.medium,
    '& > div': {
      boxShadow: theme.shadows[2],
      background: theme.palette.background.paper,
      width: '100%',
      border: 'none'
    },
    '& input': {
      padding: '10px 8px'
    }
  }
}));

function SearchIcons(props) {
  const { filterText, handleSearch } = props;
  const {
    classes
  } = useStyles();
  return (
    <FormControl variant="standard" fullWidth className={classes.search}>
      <Input
        id="search_filter"
        type="text"
        placeholder="Search more than 800 icons"
        value={filterText}
        onChange={handleSearch}
        endAdornment={(
          <InputAdornment position="end">
            <IconButton className={classes.icon} aria-label="Search filter" size="large">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        )}
      />
    </FormControl>
  );
}

SearchIcons.propTypes = {
  filterText: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default SearchIcons;
