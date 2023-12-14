import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';
import {
  deepOrange, deepPurple, pink, green, cyan, indigo, red
} from '@mui/material/colors';

const useStyles = makeStyles()((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('lg')]: {
      marginLeft: 'auto',
      marginRight: 'auto',
      width: 1140,
    },
  },
  divider: {
    margin: `${theme.spacing(2)} 0`,
    [theme.breakpoints.up('sm')]: {
      margin: `${theme.spacing(1.5)} 0`,
    },
    background: 'none'
  },
  dividerBordered: {
    margin: `${theme.spacing(3)} 0`
  },
  title: {
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    fontSize: 22,
    padding: '16px 20px',
    position: 'relative',
    fontWeight: 600,
    marginBottom: theme.spacing(3),
    zIndex: 1,
    '&:after': {
      content: '""',
      position: 'absolute',
      width: 60,
      height: 4,
      background: theme.palette.primary.main,
      bottom: 0,
      left: 20
    },
  },
  title2: {
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    fontSize: 22,
    padding: '16px 20px',
    position: 'relative',
    fontWeight: 600,
    marginTop: theme.spacing(3)
  },
  content: {
    padding: `0 ${theme.spacing(4)}`
  },
  postList: {
    [theme.breakpoints.down('lg')]: {
      marginTop: theme.spacing(3)
    }
  },
  article: {
    color: theme.palette.text.primary,
    '& ul, ol': {
      marginLeft: theme.spacing(5),
      paddingBottom: theme.spacing(2),
    },
    '& ul': {
      listStyleType: 'disc'
    },
    '& ol': {
      listStyleType: 'decimal'
    },
    '& code': {
      whiteSpace: 'normal',
    }
  },
  redBtn: {
    color: red[500],
    borderColor: red[500],
    '&:hover': {
      borderColor: red[700],
    },
  },
  blueBtn: {
    color: indigo[300],
    borderColor: indigo[300],
    '&:hover': {
      borderColor: indigo[500],
    },
  },
  cyanBtn: {
    color: cyan[500],
    borderColor: cyan[500],
    '&:hover': {
      borderColor: cyan[700],
    },
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
  btnArea: {
    '& button': {
      margin: theme.spacing(1)
    }
  },
  pagination: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(3)
  },
  profileList: {
    padding: 0,
    '& li': {
      paddingLeft: 0
    }
  },
  subscribeForm: {
    marginTop: theme.spacing(1) * -6,
    display: 'flex',
    '& > div': {
      flex: 1
    },
    '& button': {
      marginTop: theme.spacing(4.5),
      marginLeft: theme.spacing(1)
    }
  },
  whiteInputRoot: {
    '& label, input': {
      color: `${theme.palette.common.white} !important`,
    },
    '& > div': {
      borderColor: alpha(theme.palette.common.white, 0.6),
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
  listText: {
    whiteSpace: 'normal'
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
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
