import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme, _params, classes) => ({
  masonry: { /* Masonry container */
    [theme.breakpoints.up('sm')]: {
      columnCount: 2,
    },
    [theme.breakpoints.up('md')]: {
      columnCount: 3,
    },
    columnGap: '1em',
    columnFill: 'initial',
    marginTop: 20
  },
  item: {
    display: 'inline-block',
    margin: `0 0 ${theme.spacing(2)}`,
    width: '100%',
    boxShadow: theme.shadows[4],
    borderRadius: 2,
    transition: 'box-shadow .3s',
    '&:hover': {
      cursor: 'pointer',
      boxShadow: theme.shadows[7],
    },
    '& img': {
      marginBottom: -7
    }
  },
  image: {
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
    },
    [`&:hover, &.${classes.focusVisible}`]: {
      zIndex: 1,
      [`& .${classes.imageBackdrop}`]: {
        opacity: 0.15,
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    color: theme.palette.common.white,
    paddingBottom: 10
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} calc(${theme.spacing(1)} + 6px)`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
