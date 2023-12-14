import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { makeStyles } from 'tss-react/mui';
import brand from 'dan-api/dummy/brand';
import Button from '@mui/material/Button';
import PrintIcon from '@mui/icons-material/Print';
import ReactToPrint from 'react-to-print';
import { PapperBlock, CommercialInvoice } from 'dan-components';

const useStyles = makeStyles()((theme) => ({
  button: {
    margin: theme.spacing(1),
    marginBottom: theme.spacing(3),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  btnArea: {
    textAlign: 'center'
  },
  wrapper: {
    width: '100%',
    overflow: 'auto'
  }
}));

function Invoice() {
  const {
    classes
  } = useStyles();
  const componentRef = useRef(null);
  const title = brand.name + ' - Dynamic Invoice';
  const description = brand.desc;
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
      <PapperBlock title="Editable Invoice" icon="ion-ios-document-outline" desc="An Editable/Printable HTML Invoice">
        <div className={classes.btnArea}>
          <ReactToPrint
            trigger={() => (
              <Button className={classes.button} size="small" variant="contained" color="secondary">
                <PrintIcon className={classes.extendedIcon} />
                Print this out!
              </Button>
            )}
            content={() => componentRef.current}
          />
        </div>
        <section className={classes.wrapper}>
          <CommercialInvoice ref={(el) => { componentRef.current = el; }} />
        </section>
      </PapperBlock>
    </div>
  );
}

export default Invoice;
