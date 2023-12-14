import { makeStyles } from 'tss-react/mui';
import { alpha, darken } from '@mui/material/styles';

const useStyles = makeStyles()((theme, _params, classes) => ({
  root: {
    flexGrow: 1,
  },
  cover: {
    [`& .${classes.name}, & .${classes.subheading}`]: {
      color: theme.palette.common.white
    },
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    height: 480,
    backgroundColor: theme.palette.mode === 'dark' ? darken(theme.palette.primary.dark, 0.8) : theme.palette.primary.dark,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundSize: 'cover',
    textAlign: 'center',
    boxShadow: theme.shadows[7],
    backgroundPosition: 'bottom center',
    borderRadius: theme.rounded.medium,
  },
  profileTab: {
    marginTop: -72,
    [theme.breakpoints.down('md')]: {
      marginTop: -48,
    },
    borderRadius: `0 0 ${theme.rounded.medium} ${theme.rounded.medium}`,
    background: alpha(theme.palette.background.paper, 0.8),
    position: 'relative'
  },
  content: {
    background: alpha(theme.palette.secondary.main, 0.3),
    height: '100%',
    width: '100%',
    padding: `70px ${theme.spacing(3)} 30px`
  },
  name: {},
  subheading: {},
  avatar: {
    margin: `0 auto ${theme.spacing(2)}`,
    width: 120,
    height: 120,
    boxShadow: theme.glow.medium
  },
  opt: {
    position: 'absolute',
    top: 10,
    right: 10,
    '& button': {
      color: theme.palette.common.white
    }
  },
  verified: {
    margin: theme.spacing(1),
    position: 'relative'
  },
  button: {
    marginTop: theme.spacing(1)
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
