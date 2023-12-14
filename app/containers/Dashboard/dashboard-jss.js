import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    flexGrow: 1,
  },
  rootGeneral: {
    padding: theme.spacing(3)
  },
  divider: {
    margin: `${theme.spacing(1.5)} 0`,
    background: 'none'
  },
  sliderWrap: {
    position: 'relative',
    display: 'block',
    boxShadow: theme.shadows[1],
    width: '100%',
    borderRadius: theme.rounded.medium,
    overflow: 'hidden'
  },
  noPadding: {
    paddingTop: '0 !important',
    paddingBottom: '0 !important',
    [theme.breakpoints.up('sm')]: {
      padding: '0 !important'
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
