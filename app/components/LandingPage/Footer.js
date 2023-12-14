import React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from 'dan-images/logo.svg';
import brand from 'dan-api/dummy/brand';
import link from 'dan-api/ui/link';
import useStyles from './landingStyle-jss';

let counter = 0;
function createData(name, url) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
  };
}

function Decoration() {
  const { classes } = useStyles();
  return (
    <div>
      <svg fill="#fff" className={classes.footerDecoration}>
        <use xlinkHref="/images/decoration/petal5.svg#Petal-Bottom" />
      </svg>
    </div>
  );
}

const DecorationStyled = Decoration;

function Footer() {
  const { classes } = useStyles();
  const menuList = [
    createData('feature', '#feature'),
    createData('showcase', '#showcase'),
    createData('terstimonials', '#testi'),
    createData('technology', '#tech'),
    createData('pricing', '#pricing'),
    createData('contact', '#contact'),
  ];

  return (
    <footer className={classes.footer}>
      <DecorationStyled />
      <div className={classes.container}>
        <div className={classes.spaceContainer}>
          <div className={classes.brand}>
            <img src={logo} alt={brand.name} />
            {brand.name}
          </div>
          <nav>
            <ul>
              {menuList.map(item => (
                <li key={item.id.toString()}>
                  <Button size="small" href={item.url}>{item.name}</Button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className={classes.copyright}>
        <div className={classes.container}>
          <p>&copy; 2022 Dandelion Designs. All Right Reserved </p>
          <span>
            <IconButton
              color="primary"
              className={classes.button}
              href={link.twitter}
              target="_blank"
              size="large"><i className="ion-logo-twitter" /></IconButton>
            <IconButton
              color="primary"
              className={classes.button}
              href={link.pinterest}
              target="_blank"
              size="large"><i className="ion-logo-pinterest" /></IconButton>
            <IconButton
              color="primary"
              className={classes.button}
              href={link.github}
              target="_blank"
              size="large"><i className="ion-logo-github" /></IconButton>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
