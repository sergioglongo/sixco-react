import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link, Route } from 'react-router-dom';
import useStyles from './breadCrumb-jss';

const Breadcrumbs = (props) => {
  const {
    theme,
    separator,
    location
  } = props;
  const { classes } = useStyles();
  return (
    <section className={classes.breadcrumbs}>
      <Route
        path="*"
        render={() => {
          let parts = location.pathname.split('/');
          let place = parts[parts.length - 1];
          place = place.replace('perfil', 'Perfil');
          parts = parts.slice(1, parts.length - 1);

          return (
            <p>
              Estas aquí:
              <span>
                {
                  parts.map((part, partIndex) => {
                    if (part !== 'pages' && !part.match(/17x/g)) {
                      if (part === 'app') {
                        part = 'Inicio';
                      }
                      const path = ['', ...parts.slice(0, partIndex + 1)].join('/');
                      return (
                        <Fragment key={path}>
                          <Link to={path}>{part}</Link>
                          { separator }
                        </Fragment>
                      );
                    }
                    if (part === 'Cambiar-Contraseña') {
                      part = 'Cambiar-Contraseña';
                    }
                  })
                }
                &nbsp;
                {place}
              </span>
            </p>
          );
        }}
      />
    </section>
  );
};

Breadcrumbs.propTypes = {
  location: PropTypes.object.isRequired,
  theme: PropTypes.string.isRequired,
  separator: PropTypes.string.isRequired,
};

export default (Breadcrumbs);
