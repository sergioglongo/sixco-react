import React, { useState } from 'react';
import { createUltimatePagination } from 'react18-ultimate-pagination';
import PropTypes from 'prop-types';
import { makeStyles } from 'tss-react/mui';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import IconButton from '@mui/material/IconButton';
import NavigationFirstPage from '@mui/icons-material/FirstPage';
import NavigationLastPage from '@mui/icons-material/LastPage';
import NavigationChevronLeft from '@mui/icons-material/ChevronLeft';
import NavigationChevronRight from '@mui/icons-material/ChevronRight';

const flatButtonStyle = {
  minWidth: 36
};

const useStyles = makeStyles()(() => ({
  paging: {
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

function Page({
  value,
  isActive,
  onClick,
  disabled
}) {
  return (
    <Button
      variant="text"
      style={flatButtonStyle}
      color={isActive ? 'primary' : 'inherit'}
      onClick={onClick}
      disabled={disabled}
    >
      {value}
    </Button>
  );
}

Page.propTypes = {
  value: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

const Ellipsis = ({ onClick, isDisabled }) => (
  <Button
    style={flatButtonStyle}
    onClick={onClick}
    disabled={isDisabled}
  >
    ...
  </Button>
);

Ellipsis.propTypes = {
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

const FirstPageLink = ({ onClick, isDisabled }) => (
  <IconButton
    style={flatButtonStyle}
    onClick={onClick}
    disabled={isDisabled}
    size="large">
    <NavigationFirstPage />
  </IconButton>
);

FirstPageLink.propTypes = {
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

const PreviousPageLink = ({ onClick, isDisabled }) => (
  <IconButton
    style={flatButtonStyle}
    onClick={onClick}
    disabled={isDisabled}
    size="large">
    <NavigationChevronLeft />
  </IconButton>
);

PreviousPageLink.propTypes = {
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

const NextPageLink = ({ onClick, isDisabled }) => (
  <IconButton
    style={flatButtonStyle}
    onClick={onClick}
    disabled={isDisabled}
    size="large"
  >
    <NavigationChevronRight />
  </IconButton>
);

NextPageLink.propTypes = {
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

const LastPageLink = ({ onClick, isDisabled }) => (
  <IconButton
    style={flatButtonStyle}
    onClick={onClick}
    disabled={isDisabled}
    size="large">
    <NavigationLastPage />
  </IconButton>
);

LastPageLink.propTypes = {
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

const itemTypeToComponent = {
  PAGE: Page,
  ELLIPSIS: Ellipsis,
  FIRST_PAGE_LINK: FirstPageLink,
  PREVIOUS_PAGE_LINK: PreviousPageLink,
  NEXT_PAGE_LINK: NextPageLink,
  LAST_PAGE_LINK: LastPageLink
};

const UltmPagination = createUltimatePagination({ itemTypeToComponent });

function Pagination(props) {
  const { totpages } = props;
  const [totalPages] = useState(totpages);

  const smDown = useMediaQuery(theme => theme.breakpoints.down('sm'));

  const hide = true;
  const {
    classes
  } = useStyles();
  const {
    curpage,
    onChange,
    onGoFirst,
    onPrev,
    onNext,
    onGoLast,
    ...rest
  } = props;
  return (
    <div className={classes.paging}>
      <FirstPageLink isDisabled={curpage <= 1} onClick={onGoFirst} />
      <PreviousPageLink isDisabled={curpage <= 1} onClick={onPrev} />
      {!smDown && (
        <UltmPagination
          currentPage={curpage}
          totalPages={totalPages}
          onChange={onChange}
          hidePreviousAndNextPageLinks={hide}
          hideFirstAndLastPageLinks={hide}
          {...rest}
        />
      )}
      <NextPageLink isDisabled={curpage >= totalPages} onClick={onNext} />
      <LastPageLink isDisabled={curpage >= totalPages} onClick={onGoLast} />
    </div>
  );
}

Pagination.propTypes = {
  curpage: PropTypes.number.isRequired,
  totpages: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onGoFirst: PropTypes.func.isRequired,
  onGoLast: PropTypes.func.isRequired,

};

export default Pagination;
