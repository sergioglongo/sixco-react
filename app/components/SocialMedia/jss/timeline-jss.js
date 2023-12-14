import { makeStyles } from 'tss-react/mui';
import { pink } from '@mui/material/colors';

const useStyles = makeStyles()((theme, _params, classes) => ({
  card: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 150,
    height: 150,
  },
  avatar: {
    width: 40,
    height: 40
  },
  cardSocmed: {
    [theme.breakpoints.up('md')]: {
      marginLeft: 90,
      minWidth: 400,
    },
    marginBottom: theme.spacing(3),
    position: 'relative',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  iconBullet: {},
  icon: {},
  timeline: {
    position: 'relative',
    '&:before': {
      left: 39,
      content: '""',
      top: 40,
      height: '101%',
      borderLeft: theme.palette.mode === 'dark' ? `1px solid ${theme.palette.grey[800]}` : `1px solid ${theme.palette.grey[300]}`,
      position: 'absolute',
      [theme.breakpoints.down('md')]: {
        display: 'none'
      },
    },
    '& li': {
      position: 'relative',
      display: 'block'
    },
    '& time': {
      top: 70,
      left: 20,
      position: 'absolute',
      textAlign: 'center',
      background: theme.palette.common.white,
      boxShadow: theme.shadows[3],
      padding: '4px 40px 4px 15px',
      borderLeft: `3px solid ${theme.palette.secondary.main}`
    },
    [`& .${classes.iconBullet}`]: {
      position: 'absolute',
      borderRadius: '50%',
      top: 20,
      width: 40,
      height: 40,
      background: theme.palette.primary.main,
      boxShadow: theme.shadows[5],
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      left: 20,
      [`& .${classes.icon}`]: {
        color: theme.palette.common.white,
      },
      [theme.breakpoints.down('md')]: {
        display: 'none'
      },
    },
  },
  rightIcon: {
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center'
  },
  liked: {
    color: pink[500]
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
