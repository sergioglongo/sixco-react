import { makeStyles } from 'tss-react/mui';
import {
  deepOrange, deepPurple, pink, green
} from '@mui/material/colors';

const useStyles = makeStyles()((theme, _params, classes) => ({
  profileList: {
    padding: 0,
    '& li': {
      paddingLeft: 0
    }
  },
  avatar: {
    margin: 10,
  },
  orangeAvatar: {
    backgroundColor: deepOrange[500],
  },
  purpleAvatar: {
    backgroundColor: deepPurple[500],
  },
  pinkAvatar: {
    backgroundColor: pink[500],
  },
  greenAvatar: {
    backgroundColor: green[500],
  },
  divider: {
    margin: `${theme.spacing(1.5)} 0`,
    background: 'none',
  },
  albumRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    '& > *': {
      width: '100%'
    }
  },
  gridList: {
    width: 500,
    height: 'auto',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  img: {
    maxWidth: 'none'
  },
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
  },
  progressRoot: {
    marginBottom: theme.spacing(3),
  },
  styledPaper: {
    backgroundColor: theme.palette.secondary.main,
    padding: 20,
    [`& .${classes.title}, & .${classes.subtitle}`]: {
      color: theme.palette.common.white
    }
  },
  progress: {
    marginTop: 20,
    background: theme.palette.secondary.dark,
    '& div': {
      background: theme.palette.primary.light,
    }
  },
  chip: {
    marginTop: 20,
    background: theme.palette.common.white,
    color: theme.palette.secondary.main,
    '& div': {
      background: green[500],
      color: theme.palette.common.white
    }
  },
  colList: {
    '& li': {
      padding: '10px 0'
    },
    [`& .${classes.avatar}`]: {
      margin: 0
    }
  },
  title: {},
  subtitle: {},
  rootAlbum: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  image: {
    position: 'relative',
    height: 'auto',
    boxShadow: theme.shadows[6],
    borderRadius: theme.rounded.medium,
    overflow: 'hidden',
    marginBottom: 30,
    width: '100% !important', // Overrides inline-style
    [`&:hover, &.${classes.focusVisible}`]: {
      zIndex: 1,
      [`& .${classes.imageBackdrop}`]: {
        opacity: 0.6,
      },
      [`& .${classes.imageMarked}`]: {
        opacity: 0,
      },
      [`& .${classes.imageTitle}`]: {
        border: '4px solid currentColor',
      },
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
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
  focusVisible: {},
  gridListAlbum: {
    height: 'auto',
    background: theme.palette.common.black
  },
  subheader: {
    width: '100%',
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
