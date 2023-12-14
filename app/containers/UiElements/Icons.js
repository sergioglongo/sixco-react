import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import Typography from '@mui/material/Typography';
import Axios from 'axios';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import LinearProgress from '@mui/material/LinearProgress';
import { makeStyles } from 'tss-react/mui';
import { PapperBlock } from 'dan-components';
import DetailIcon from './IconGallery/DetailIcon';
import SearchIcons from './IconGallery/SearchIcons';

const url = '/api/icons?src=';

const useStyles = makeStyles()((theme) => ({
  hide: {
    display: 'none'
  },
  iconsList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
    overflow: 'auto',
    maxHeight: 1000,
    position: 'relative'
  },
  iconWrap: {
    position: 'relative',
    width: 120,
    margin: 20,
    [theme.breakpoints.down('sm')]: {
      margin: 10,
    },
    textAlign: 'center'
  },
  btn: {
    textAlign: 'center',
    margin: '0 auto',
  },
  icon: {
    fontSize: 48,
  },
  preloader: {
    width: '100%'
  },
}));

function Icons() {
  const [raws, setRaws] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);
  const [iconName, setIconName] = useState('');
  const [iconCode, setIconCode] = useState('');
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    const name = 'material-icon.txt';
    setLoading(true);
    Axios.get(url + name)
      .then(response => response.data.records[0].source)
      .then(data => {
        const namesAndCodes = data.split('\n');
        const icons = namesAndCodes.map(nameAndCode => {
          const parts = nameAndCode.split(' ');
          return {
            name: parts[0],
            code: parts[1]
          };
        });
        return icons;
      })
      .then(icons => {
        setRaws(icons);
        setLoading(false);
      });
  }, []);

  const handleOpenDetail = (name, code) => {
    setOpenDetail(true);
    setIconName(name);
    setIconCode(code);
  };

  const handleCloseDetail = () => {
    setOpenDetail(false);
  };

  const handleSearch = event => {
    event.persist();
    // Show result base on keyword
    setFilterText(event.target.value.toLowerCase());
  };

  const title = brand.name + ' - UI Elements';
  const description = brand.desc;
  const {
    classes
  } = useStyles();
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <PapperBlock title="Material Icons" icon="ion-ios-flag-outline" desc="Material icons are delightful, beautifully crafted symbols for common actions and items. System icons are designed to be simple, modern, friendly, and sometimes quirky. Each icon is reduced to its minimal form, expressing essential characteristics.">
        <div>
          {loading && (
            <LinearProgress color="secondary" className={classes.preloader} />
          )}
          <SearchIcons filterText={filterText} handleSearch={(event) => handleSearch(event)} />
          <div className={classes.iconsList}>
            {raws.map((raw, index) => {
              if (raw.name.toLowerCase().indexOf(filterText) === -1) {
                return false;
              }
              return (
                <div className={classes.iconWrap} key={index.toString()}>
                  <IconButton
                    title="Click to see detail"
                    onClick={() => handleOpenDetail(raw.name, raw.code)}
                    className={classes.btn}
                    size="large">
                    <Icon className={classes.icon}>{raw.name}</Icon>
                  </IconButton>
                  <Typography gutterBottom noWrap>{raw.name}</Typography>
                </div>
              );
            })}
            <DetailIcon closeDetail={() => handleCloseDetail()} isOpenDetail={openDetail} iconName={iconName} iconCode={iconCode} />
          </div>
        </div>
      </PapperBlock>
    </div>
  );
}

export default Icons;
