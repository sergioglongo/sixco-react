import { makeStyles } from 'tss-react/mui';
import { alpha, darken } from '@mui/material/styles';

const gradientBgLight = (theme) => `linear-gradient(-45deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.main} 33%, ${theme.palette.secondary.main} 100%);`;
const gradientBgDark = (theme) => `linear-gradient(-45deg, ${darken(theme.palette.primary.main, 0.4)} 0%, ${darken(theme.palette.primary.main, 0.4)} 33%, ${darken(theme.palette.secondary.main, 0.4)} 100%);`;

const useStyles = makeStyles()((theme, _params, classes) => ({
  appBar: {
    position: 'relative',
    backgroundImage: theme.palette.mode === 'dark' ? gradientBgDark(theme) : gradientBgLight(theme),
    backgroundAttachment: 'fixed',
    textAlign: 'center'
  },
  paperStyled: {
    background: darken(theme.palette.primary.main, 0.2),
    padding: theme.spacing(3),
    color: theme.palette.common.white
  },
  profile: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    width: 80,
    height: 80,
  },
  profileText: {
    marginLeft: theme.spacing(2),
    fontSize: 12,
    '& h4': {
      marginBottom: theme.spacing(1),
      fontSize: 18,
    },
  },
  quickAccess: {
    display: 'flex',
    justifyContent: 'space-around',
    [`& .${classes.icon}`]: {
      fontSize: 36,
      display: 'block',
      [theme.breakpoints.down('sm')]: {
        fontSize: 18,
      }
    },
    '& button': {
      [theme.breakpoints.down('sm')]: {
        fontSize: 12,
      },
      color: theme.palette.primary.light,
      '& > span:first-of-type': {
        flexDirection: 'column'
      }
    }
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
  flex: {
    flex: 1,
  },
  searchSettings: {
    marginBottom: theme.spacing(4),
    borderRadius: theme.rounded.medium,
    backgroundColor: theme.palette.mode === 'dark' ? alpha(theme.palette.grey[200], 0.15) : alpha(theme.palette.grey[200], 0.95),
    '& svg': {
      fill: theme.palette.text.secondary
    }
  },
  wrapper: {
    fontFamily: theme.typography.fontFamily,
    position: 'relative',
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(1),
    borderRadius: 2,
    display: 'block',
  },
  search: {
    width: 'auto',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    font: 'inherit',
    padding: `${theme.spacing(1)} ${theme.spacing(1)} ${theme.spacing(1)} ${theme.spacing(4)}`,
    border: 0,
    display: 'block',
    verticalAlign: 'middle',
    whiteSpace: 'normal',
    background: 'none',
    margin: 0, // Reset for Safari
    color: theme.palette.text.primary,
    width: '100%',
    '&:focus': {
      outline: 0,
    },
  },
  button: {
    display: 'flex',
    width: '100%',
    height: '100%',
    background: theme.palette.background.paper,
    borderRadius: theme.spacing(1.5),
    '&:hover': {
      background: theme.palette.mode === 'dark' ? theme.palette.grey[700] : theme.palette.secondary.light
    },
    '& > span:first-of-type': {
      display: 'table-row',
    },
    [`& .${classes.icon}`]: {
      margin: '0 auto',
      display: 'table-cell',
      fontSize: 64,
    },
    [`& .${classes.text}`]: {
      width: 210,
      textAlign: 'left',
      paddingLeft: theme.spacing(1),
      verticalAlign: 'middle',
      display: 'table-cell'
    },
    [`& .${classes.info}`]: {
      display: 'block',
      textTransform: 'none',
      color: theme.palette.grey[500],
      whiteSpace: 'initial'
    }
  },
  text: {},
  info: {},
  icon: {},
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginTop: theme.spacing(1) * -1
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  iconSmall: {
    fontSize: 20,
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  detailWrap: {
    paddingTop: theme.spacing(10)
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
