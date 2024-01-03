import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme, _params, classes) => ({
  dark: {},
  breadcrumbs: {
    position: 'relative',
    display: 'block',
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.9)',
    '& p': {
      display: 'block',
      margin: 0,
      color: theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.primary.main,
      '& span': {
        textTransform: 'capitalize',
        marginLeft: 5,
      },
      '& a': {
        textDecoration: 'none',
        color: theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.primary.main,
        margin: '0 5px'
      }
    },
    [`&.${classes.dark}`]: {
      color: theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.primary.main,
      '& a': {
        color: theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.primary.main
      }
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
