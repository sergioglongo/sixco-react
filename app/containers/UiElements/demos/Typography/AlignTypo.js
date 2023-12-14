import React from 'react';
import { makeStyles } from 'tss-react/mui';
import Typography from '@mui/material/Typography';
import Type from 'dan-styles/Typography.scss';
import Divider from '@mui/material/Divider';

const useStyles = makeStyles()((theme) => ({
  divider: {
    margin: `${theme.spacing(3)} 0`,
  }
}));

function AlignTypo() {
  const {
    classes
  } = useStyles();
  return (
    <div>
      <Typography variant="subtitle1" className={Type.textCenter} gutterBottom>
        Align center: Nullam in
        <span className={Type.bold}> tortor </span>
        <span className={Type.italic}> ligula </span>
      </Typography>
      <Divider className={classes.divider} />
      <Typography variant="h5" className={Type.textLeft} gutterBottom>
        Align Left
      </Typography>
      <Typography variant="h5" className={Type.textRight} gutterBottom>
        Align Right
      </Typography>
      <Divider className={classes.divider} />
      <Typography variant="h4" className={Type.medium} gutterBottom>Justify Align</Typography>
      <Typography gutterBottom className={Type.textJustify}>
        Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula, eget suscipit orci. Suspendisse potenti.
        Nulla eget lobortis lacus. Aliquam venenatis magna et odio lobortis maximus. Nullam in tortor ligula. Proin maximus risus nunc, eu aliquam nibh tempus a. Interdum et malesuada fames ac ante ipsum primis in faucibus.
      </Typography>
    </div>
  );
}

export default AlignTypo;
