import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  chartFluid: {
    width: '100%',
    minWidth: 500,
    height: 450
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
