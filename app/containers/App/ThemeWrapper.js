import React, { useState, useEffect, useCallback } from 'react';
import { PropTypes } from 'prop-types';
import { makeStyles } from 'tss-react/mui';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { connect } from 'react-redux';
import Loading from '@mui/material/LinearProgress';
import { bindActionCreators } from 'redux';
import {
  changeThemeAction,
  changeModeAction,
  changeGradientAction,
  changeDecoAction,
  changeBgPositionAction,
  changeLayoutAction,
  changeDirectionAction
} from 'dan-redux/actions/uiActions';
import { TemplateSettings } from 'dan-components';
import appTheme from '../../styles/theme/applicationTheme';

const useStyles = makeStyles()(() => ({
  root: {
    width: '100%',
    minHeight: '100%',
    marginTop: 0,
    zIndex: 1,
  },
  loading: {
    zIndex: '10 !important',
    position: 'fixed !important',
    top: 0,
    left: 0,
    width: '100%',
    opacity: 1,
    transition: 'opacity .5s ease'
  },
  loadingWrap: {
    background: 'none !important'
  },
  bar: {
    background: 'rgba(255, 255, 255, 0.7) !important'
  },
  hide: {
    opacity: 0
  }
}));

const isBrowser = typeof document !== 'undefined';
let insertionPoint;

if (isBrowser) {
  const emotionInsertionPoint = document.querySelector(
    'meta[name="emotion-insertion-point"]',
  );
  insertionPoint = emotionInsertionPoint ?? undefined;
}

const cacheRTL = createCache({
  key: 'mui-style-rtl',
  stylisPlugins: [prefixer, rtlPlugin],
  insertionPoint,
});

const cacheLTR = createCache({
  key: 'mui-style-ltr',
  insertionPoint,
});

export const ThemeContext = React.createContext(undefined);

function ThemeWrapper(props) {
  const { classes } = useStyles();
  const [progress, setProgress] = useState(0);
  const {
    children,
    color, mode, palette,
    gradient, decoration, bgPosition,
    layout, direction,
    changeMode, changeTheme, changeGradient,
    changeDecoration, changeBgPosition, changeLayout,
    changeDirection,
  } = props;

  const [theme, setTheme] = useState(
    appTheme(color, mode, direction)
  );
  const [paletteState, setPalette] = useState([]);

  useEffect(() => {
    setPalette(palette);
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
        }
        const diff = Math.random() * 40;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleChangeTheme = event => {
    setTheme(appTheme(event.target.value, mode, direction));
    changeTheme(event.target.value);
  };

  const handleChangeRandomTheme = useCallback(() => {
    const paletteArray = palette;
    const randomTheme = paletteArray[Math.floor(Math.random() * paletteArray.length)];

    setTimeout(() => {
      setTheme(appTheme(randomTheme.value, mode, direction));
    }, 500);
    changeTheme(randomTheme.value);
  }, [theme]);

  const handleChangeMode = mode => { // eslint-disable-line
    setTheme(appTheme(color, mode));
    changeMode(mode);
  };

  const handleChangeGradient = value => {
    changeGradient(value);
  };

  const handleChangeDecoration = value => {
    changeDecoration(value);
  };

  const handleChangeBgPosition = value => {
    changeBgPosition(value);
  };

  const handleChangeLayout = value => {
    changeLayout(value);
  };

  const handleChangeDirection = dirVal => {
    // Set reducer state direction
    setTheme(appTheme(color, mode, dirVal));
    changeDirection(dirVal);

    // Set HTML root direction attribute
    document.dir = dirVal;
  };

  const muiTheme = createTheme(theme);

  return (
    <CacheProvider value={theme.direction === 'rtl' ? cacheRTL : cacheLTR}>
      <ThemeProvider theme={muiTheme}>
        <div className={classes.root}>
          <Loading
            variant="determinate"
            value={progress}
            className={progress >= 100 ? classes.hide : ''}
            classes={{
              root: classes.loading,
              colorPrimary: classes.loadingWrap,
              barColorPrimary: classes.bar
            }}
          />
          <TemplateSettings
            palette={paletteState}
            selectedValue={color}
            mode={mode}
            gradient={gradient}
            decoration={decoration}
            bgPosition={bgPosition}
            layout={layout}
            direction={direction}
            changeTheme={handleChangeTheme}
            changeRandomTheme={handleChangeRandomTheme}
            changeMode={handleChangeMode}
            changeGradient={handleChangeGradient}
            changeDecoration={handleChangeDecoration}
            changeBgPosition={handleChangeBgPosition}
            changeLayout={handleChangeLayout}
            changeDirection={handleChangeDirection}
          />
          <ThemeContext.Provider value={handleChangeMode}>
            {children}
          </ThemeContext.Provider>
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}

ThemeWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  gradient: PropTypes.bool.isRequired,
  decoration: PropTypes.bool.isRequired,
  bgPosition: PropTypes.string.isRequired,
  palette: PropTypes.array.isRequired,
  layout: PropTypes.string.isRequired,
  changeTheme: PropTypes.func.isRequired,
  changeMode: PropTypes.func.isRequired,
  changeGradient: PropTypes.func.isRequired,
  changeDecoration: PropTypes.func.isRequired,
  changeBgPosition: PropTypes.func.isRequired,
  changeLayout: PropTypes.func.isRequired,
  changeDirection: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  color: state.ui.theme,
  palette: state.ui.palette,
  mode: state.ui.type,
  gradient: state.ui.gradient,
  decoration: state.ui.decoration,
  bgPosition: state.ui.bgPosition,
  layout: state.ui.layout,
  direction: state.ui.direction,
});

const dispatchToProps = dispatch => ({
  changeTheme: bindActionCreators(changeThemeAction, dispatch),
  changeMode: bindActionCreators(changeModeAction, dispatch),
  changeGradient: bindActionCreators(changeGradientAction, dispatch),
  changeDecoration: bindActionCreators(changeDecoAction, dispatch),
  changeBgPosition: bindActionCreators(changeBgPositionAction, dispatch),
  changeLayout: bindActionCreators(changeLayoutAction, dispatch),
  changeDirection: bindActionCreators(changeDirectionAction, dispatch),
});

const ThemeWrapperMapped = connect(
  mapStateToProps,
  dispatchToProps
)(ThemeWrapper);

export default ThemeWrapperMapped;
