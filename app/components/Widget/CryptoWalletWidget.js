import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Input from '@mui/material/Input';
import ContentCopy from '@mui/icons-material/FileCopy';
import FormHelperText from '@mui/material/FormHelperText';
import Avatar from '@mui/material/Avatar';
import bitcoinLogo from 'dan-images/crypto/bitcoin.png';
import litecoinLogo from 'dan-images/crypto/litecoin.png';
import cardanoLogo from 'dan-images/crypto/cardano.png';
import useStyles from './widget-jss';
import PapperBlock from '../PapperBlock/PapperBlock';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

function CryptoWalletWidget() {
  const bitcoin = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
  const litecoin = 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy';
  const cardano = 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz';

  const { classes, cx } = useStyles();
  return (
    <PapperBlock whiteBg noMargin title="My Wallet" icon="ion-ios-archive-outline" desc="">
      <FormHelperText className={classes.walletLabel}>Bitcoin wallet address</FormHelperText>
      <FormControl variant="standard" fullWidth className={classes.formControlTrade}>
        <Input
          id="adornment-amount1"
          value={bitcoin}
          disabled
          startAdornment={(
            <InputAdornment position="start">
              <Avatar alt="bitcoin" src={bitcoinLogo} className={cx(classes.avatar, classes.mc)} />
            </InputAdornment>
          )}
          endAdornment={(
            <InputAdornment position="end">
              <Tooltip title="copy">
                <IconButton size="large">
                  <ContentCopy />
                </IconButton>
              </Tooltip>
            </InputAdornment>
          )}
        />
      </FormControl>
      <FormHelperText className={classes.walletLabel}>Litecoin wallet address</FormHelperText>
      <FormControl variant="standard" fullWidth className={classes.formControlTrade}>
        <Input
          id="adornment-amount2"
          value={litecoin}
          disabled
          startAdornment={(
            <InputAdornment position="start">
              <Avatar alt="bitcoin" src={litecoinLogo} className={cx(classes.avatar, classes.mc)} />
            </InputAdornment>
          )}
          endAdornment={(
            <InputAdornment position="end">
              <Tooltip title="copy">
                <IconButton size="large">
                  <ContentCopy />
                </IconButton>
              </Tooltip>
            </InputAdornment>
          )}
        />
      </FormControl>
      <FormHelperText className={classes.walletLabel}>Cardano wallet address</FormHelperText>
      <FormControl variant="standard" fullWidth className={classes.formControlTrade}>
        <Input
          id="adornment-amount3"
          value={cardano}
          disabled
          startAdornment={(
            <InputAdornment position="start">
              <Avatar alt="bitcoin" src={cardanoLogo} className={cx(classes.avatar, classes.mc)} />
            </InputAdornment>
          )}
          endAdornment={(
            <InputAdornment position="end">
              <Tooltip title="copy">
                <IconButton size="large">
                  <ContentCopy />
                </IconButton>
              </Tooltip>
            </InputAdornment>
          )}
        />
      </FormControl>
      <Divider className={classes.divider} />
      <div className={classes.textRight}>
        <Button color="secondary" variant="outlined" className={classes.button}>
          View All
        </Button>
        <Button color="secondary" variant="contained" className={classes.button}>
          Settings
        </Button>
      </div>
    </PapperBlock>
  );
}

export default CryptoWalletWidget;
