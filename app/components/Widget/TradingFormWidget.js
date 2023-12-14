import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import SwipeableViews from 'react18-swipeable-views';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Grid from '@mui/material/Grid';
import Tab from '@mui/material/Tab';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import TrendingUp from '@mui/icons-material/TrendingUp';
import FormHelperText from '@mui/material/FormHelperText';
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

function TradingFormWidget() {
  const [value, setValue] = useState(0);
  const [coin, setCoin] = useState('BTC');
  const [amount, setAmount] = useState(1);

  const handleChangeTab = (event, val) => {
    setValue(val);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  const handleChangeCoin = event => {
    setCoin(event.target.value);
  };

  const handleChangeAmount = event => {
    setAmount(event.target.value);
  };

  const { classes } = useStyles();
  return (
    <PapperBlock whiteBg noMargin title="Trade Assets" icon="ion-ios-swap" desc="">
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChangeTab}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="Buy" />
          <Tab label="Sell" />
        </Tabs>
      </AppBar>
      <SwipeableViews
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabContainer dir="ltr">
          <div className={classes.tabContainer}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControl variant="standard" fullWidth className={classes.formControlTrade}>
                  <InputLabel htmlFor="adornment-amount4">Amount</InputLabel>
                  <Input
                    id="adornment-amount4"
                    value={amount}
                    onChange={handleChangeAmount}
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                  />
                  <FormHelperText>Total USD assets: $ 67.98</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl variant="standard" className={classes.formControlTrade}>
                  <InputLabel htmlFor="coin-simple">Coin</InputLabel>
                  <Select
                    variant="standard"
                    value={coin}
                    onChange={handleChangeCoin}
                    inputProps={{
                      name: 'coin',
                      id: 'coin-simple',
                    }}>
                    <MenuItem value="BNB">BNB (Binance)</MenuItem>
                    <MenuItem value="BTC">BTC (Bitcoin)</MenuItem>
                    <MenuItem value="BCN">BCN (Bytecoin)</MenuItem>
                    <MenuItem value="ADA">ADA (Cardano)</MenuItem>
                    <MenuItem value="DCR">DCR (Decred)</MenuItem>
                    <MenuItem value="ICX">ICX (Iconic)</MenuItem>
                    <MenuItem value="IOTA">IOTA (Iota)</MenuItem>
                    <MenuItem value="LTC">LTC (Litecoin)</MenuItem>
                    <MenuItem value="XMR">XMR (Monero)</MenuItem>
                    <MenuItem value="NANO">NANO (Nano Coin)</MenuItem>
                    <MenuItem value="NEM">NEM (Nem)</MenuItem>
                    <MenuItem value="PPT">PPT (Papulous)</MenuItem>
                    <MenuItem value="XRP">XRP (Ripple)</MenuItem>
                    <MenuItem value="XLM">XLM (Stellar Lumens)</MenuItem>
                    <MenuItem value="STRAT">STRAT (Stratis)</MenuItem>
                    <MenuItem value="TRX">TRX (Tron)</MenuItem>
                  </Select>
                  <FormHelperText className={classes.tradeUp}>
                    <TrendingUp />
                      &nbsp;$ 67.98
                  </FormHelperText>
                </FormControl>
              </Grid>
            </Grid>
            <Divider className={classes.divider} />
            <div className={classes.btnArea}>
              <Typography variant="subtitle1">Estimation: 0.02 BTC</Typography>
              <Button color="secondary" variant="contained" className={classes.button}>
                Exchange Now
              </Button>
            </div>
          </div>
        </TabContainer>
        <TabContainer dir="ltr">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormControl variant="standard" className={classes.formControlTrade}>
                <InputLabel htmlFor="coin-simple2">Coin</InputLabel>
                <Select
                  variant="standard"
                  value={coin}
                  onChange={handleChangeCoin}
                  inputProps={{
                    name: 'coin',
                    id: 'coin-simple2',
                  }}>
                  <MenuItem value="BNB">BNB (Binance)</MenuItem>
                  <MenuItem value="BTC">BTC (Bitcoin)</MenuItem>
                  <MenuItem value="BCN">BCN (Bytecoin)</MenuItem>
                  <MenuItem value="ADA">ADA (Cardano)</MenuItem>
                  <MenuItem value="DCR">DCR (Decred)</MenuItem>
                  <MenuItem value="ICX">ICX (Iconic)</MenuItem>
                  <MenuItem value="IOTA">IOTA (Iota)</MenuItem>
                  <MenuItem value="LTC">LTC (Litecoin)</MenuItem>
                  <MenuItem value="XMR">XMR (Monero)</MenuItem>
                  <MenuItem value="NANO">NANO (Nano Coin)</MenuItem>
                  <MenuItem value="NEM">NEM (Nem)</MenuItem>
                  <MenuItem value="PPT">PPT (Papulous)</MenuItem>
                  <MenuItem value="XRP">XRP (Ripple)</MenuItem>
                  <MenuItem value="XLM">XLM (Stellar Lumens)</MenuItem>
                  <MenuItem value="STRAT">STRAT (Stratis)</MenuItem>
                  <MenuItem value="TRX">TRX (Tron)</MenuItem>
                </Select>
                <FormHelperText className={classes.tradeUp}>
                  <TrendingUp />
                    &nbsp;$ 67.98
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl variant="standard" fullWidth className={classes.formControlTrade}>
                <InputLabel htmlFor="adornment-amount5">Amount</InputLabel>
                <Input
                  id="adornment-amount5"
                  value={amount}
                  onChange={handleChangeAmount}
                  startAdornment={<InputAdornment position="start">{coin}</InputAdornment>}
                />
                <FormHelperText>Total BTC assets: 0.012 BTC</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
          <Divider className={classes.divider} />
          <div className={classes.btnArea}>
            <Typography variant="subtitle1">Estimation: $ 342.12</Typography>
            <Button color="secondary" variant="contained" className={classes.button}>
              Exchange Now
            </Button>
          </div>
        </TabContainer>
      </SwipeableViews>
    </PapperBlock>
  );
}

export default TradingFormWidget;
