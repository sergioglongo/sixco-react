import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import GraphicEq from '@mui/icons-material/GraphicEq';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import 'dan-styles/vendors/rechart/styles.css';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { dataCrypto } from 'dan-api/chart/chartData';
import colorfull from 'dan-api/palette/colorfull';
import useStyles from './widget-jss';
import PapperBlock from '../PapperBlock/PapperBlock';

const color = ({
  main: colorfull[2],
  secondary: colorfull[3],
  third: colorfull[0],
  fourth: colorfull[1],
});

function CryptoChartWidget() {
  const [coin, setCoin] = useState('BTC');
  const [checked, setChecked] = useState(['bolinger', 'stoch', 'rsi', 'parabolic']);

  const handleChange = event => {
    setCoin(event.target.value);
  };

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const { classes } = useStyles();
  return (
    <PapperBlock whiteBg noMargin title="Trading Chart" icon="ion-ios-analytics-outline" desc="">
      <Grid container spacing={2}>
        <Grid item md={8} xs={12}>
          <Grid container spacing={2}>
            <Grid item md={5} xs={12}>
              <form autoComplete="off">
                <FormControl variant="standard" className={classes.formControl}>
                  <InputLabel htmlFor="coin-simple4">Coin</InputLabel>
                  <Select
                    variant="standard"
                    value={coin}
                    onChange={handleChange}
                    inputProps={{
                      name: 'coin',
                      id: 'coin-simple4',
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
                </FormControl>
              </form>
            </Grid>
            <Grid item md={2} xs={6}>
              <Typography variant="caption">Last Price</Typography>
              <Typography variant="subtitle1">$ 8,901</Typography>
            </Grid>
            <Grid item md={2} xs={6}>
              <Typography variant="caption">Daily Changes</Typography>
              <Typography variant="subtitle1">$ 267.89</Typography>
            </Grid>
            <Grid item md={3} xs={12}>
              <Typography variant="caption">24H Volume</Typography>
              <Typography variant="subtitle1">16,900,222 BTC</Typography>
            </Grid>
          </Grid>
          <div className={classes.chartWrap}>
            <div className={classes.chartFluid}>
              <ResponsiveContainer width={640} height="80%">
                <ComposedChart
                  data={dataCrypto}
                >
                  <XAxis dataKey="name" tickLine={false} />
                  <YAxis axisLine={false} tickSize={3} tickLine={false} tick={{ stroke: 'none' }} />
                  <CartesianGrid vertical={false} strokeDasharray="3 3" />
                  <Tooltip />
                  <Bar stackId="2" barSize={10} fillOpacity="0.8" dataKey="RSI" fill={color.secondary} />
                  <Bar stackId="5" barSize={10} fillOpacity="0.8" dataKey="ParabolicSAR" fill={color.third} />
                  {checked.indexOf('parabolic') > -1 && <Line type="monotone" stackId="4" dataKey="ParabolicSAR" strokeWidth={2} stroke={color.main} />}
                  {checked.indexOf('rsi') > -1 && <Line type="monotone" stackId="3" dataKey="RSI" strokeWidth={2} stroke={color.third} />}
                  {checked.indexOf('bolinger') > -1 && <Area type="monotone" stackId="1" dataKey="BolingerBands" stroke={color.fourth} fill={color.fourth} />}
                  {checked.indexOf('stoch') > -1 && <Area type="monotone" stackId="6" dataKey="Stochastic" stroke={color.main} fill={color.secondary} />}
                  <Legend iconType="circle" verticalALign="bottom" iconSize={10} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Grid>
        <Grid item md={4} xs={12}>
          <Typography className={classes.smallTitle} variant="button">
            <GraphicEq className={classes.leftIcon} />
            Chart Indicator
          </Typography>
          <Divider className={classes.divider} />
          <div className={classes.root}>
            <List component="nav">
              <ListItem
                role={undefined}
                dense
                button
                onClick={handleToggle('bolinger')}
                className={classes.listItem}
              >
                <Checkbox
                  checked={checked.indexOf('bolinger') !== -1}
                  tabIndex={-1}
                  disableRipple
                />
                <ListItemText primary="Bolinger Bands" secondary="Maecenas nisl libero, tincidunt id odio id" />
              </ListItem>
              <ListItem
                role={undefined}
                dense
                button
                onClick={handleToggle('parabolic')}
                className={classes.listItem}
              >
                <Checkbox
                  checked={checked.indexOf('parabolic') !== -1}
                  tabIndex={-1}
                  disableRipple
                />
                <ListItemText primary="Parabolic SAR" secondary="Quisque ut metus sit amet" />
              </ListItem>
              <ListItem
                role={undefined}
                dense
                button
                onClick={handleToggle('stoch')}
                className={classes.listItem}
              >
                <Checkbox
                  checked={checked.indexOf('stoch') !== -1}
                  tabIndex={-1}
                  disableRipple
                />
                <ListItemText primary="Stochastic" secondary="Vestibulum nec mi suscipit" />
              </ListItem>
              <ListItem
                role={undefined}
                dense
                button
                onClick={handleToggle('rsi')}
                className={classes.listItem}
              >
                <Checkbox
                  checked={checked.indexOf('rsi') !== -1}
                  tabIndex={-1}
                  disableRipple
                />
                <ListItemText primary="RSI" secondary="Interdum et malesuada fames" />
              </ListItem>
            </List>
          </div>
        </Grid>
      </Grid>
    </PapperBlock>
  );
}

export default CryptoChartWidget;
