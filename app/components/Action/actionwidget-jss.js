import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme, _params, classes) => ({
    root: {
      flexGrow: 1,
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      padding: 10,
      height: 200,
      marginBottom: 6,
      display: 'flex',
      [theme.breakpoints.up('sm')]: {
        height: 126,
        marginBottom: -1,
        alignItems: 'flex-end',
      },
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        height: 'fit-content',
        alignItems: 'center',
      },
      '& > *': {
        padding: '0 5px'
      }
    },
    info: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
    },
    title: {
      color: theme.palette.common.white,
      fontSize: 16,
      lineHeight: '1.1',
      [theme.breakpoints.up('sm')]: {
        fontSize: 28,
      },
      [theme.breakpoints.down('sm')]: {
        marginRight: '10px'
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
      [theme.breakpoints.down('xs')]: {
        padding: 0.2
      },
    },
    counter: {
      color: theme.palette.common.white,
      fontSize: 28,
      fontWeight: 500,
    },
    customContent: {
      textAlign: 'right',
      alignSelf:'center',
    }
  }));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
