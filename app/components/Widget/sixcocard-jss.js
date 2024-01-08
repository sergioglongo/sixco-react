import { makeStyles } from 'tss-react/mui';
import { lighten } from '@mui/material/styles';

const useStyles = makeStyles()((theme, _params, classes) => ({
  rootCounterFull: {
    flexGrow: 1,
  },
  counterIcon: {
    color: theme.palette.common.white,
    opacity: 0.7,
    fontSize: 84,
    [theme.breakpoints.down('sm')]: {
      fontSize: 50,
    },
  },
  badgeIcon:{
    color: theme.palette.common.white,
    opacity: 0.9,
    fontSize: 50,
    backgroundColor: 'transparent',
    height: 50,
    width: 50,
    position: 'relative',
    bottom: 50,
    left: 30,
    [theme.breakpoints.down('sm')]: {
      fontSize: 27,
      height: 27,
      width: 27,
      bottom: 30,
      left: 18,
    },  
  },
  progressCircle: {
    borderRadius: '50%',
    background: lighten(theme.palette.divider, 0.7)
  },
  button: {
    marginRight: theme.spacing(1)
  },

}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
