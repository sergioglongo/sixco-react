import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme, _params, classes) => ({
    root: {
      flexGrow: 1,
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      padding: 10,
      height: 190,
      marginBottom: 6,
      display: 'flex',
      [theme.breakpoints.up('sm')]: {
        height: 126,
        marginBottom: -1,
        alignItems: 'flex-end',
      },
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        height: 'fit-content'
      },
      '& > *': {
        padding: '0 5px'
      }
    },
    title: {
      color: theme.palette.common.white,
      fontSize: 16,
      [theme.breakpoints.up('md')]: {
        fontSize: 28,
      },
      fontWeight: 400
    },
    btnlist: {
      display: 'flex',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      }
    },
    btn: {
      position: 'relative',
      marginRight: '10px',
      [theme.breakpoints.down('xs')]: {
        padding: 0.2
      },
    },
    counter: {
      color: theme.palette.common.white,
      fontSize: 28,
      fontWeight: 500
    },
    customContent: {
      textAlign: 'right'
    }
  }));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
