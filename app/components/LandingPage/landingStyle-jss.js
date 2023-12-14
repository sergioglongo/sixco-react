import { makeStyles } from 'tss-react/mui';
import { alpha, darken } from '@mui/material/styles';
import { gradientBgLight, gradientBgDark } from 'containers/Templates/appStyles-jss';
import controlScreen from 'dan-images/screen/control_screen.png';
import line1 from 'dan-images/decoration/line1.png';
import line2 from 'dan-images/decoration/line2.png';
import petal1 from 'dan-images/decoration/petal1.png';
import petal2 from 'dan-images/decoration/petal2.png';
import bgFooterDark from 'dan-images/decoration/bgFooterDark.svg';
import bgFooterLight from 'dan-images/decoration/bgFooterLight.svg';
import petalHeaderLight from 'dan-images/decoration_light.svg';
import petalHeaderDark from 'dan-images/decoration_dark.svg';

const sectionSpace = 96;
const sectionSpaceMobile = 80;
const screenPreview = {
  transform: 'scale(0.8)',
  position: 'absolute',
  bottom: 0,
  zIndex: 1,
};

const useStyles = makeStyles()((theme, _params, classes) => ({
  container: {
    padding: `0 ${theme.spacing(2)}`,
    position: 'relative',
    margin: '0 auto',
    [theme.breakpoints.up('lg')]: {
      width: 1140,
      padding: 0,
    },
  },
  spaceContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  button: {
    margin: theme.spacing(1)
  },
  mono: {},
  color: {},
  btnArea: {},
  active: {},
  header: {
    position: 'fixed',
    background: 'none',
    height: 56,
    justifyContent: 'center',
    '& nav': {
      '& li': {
        display: 'inline-block',
        position: 'relative',
        margin: `0 ${theme.spacing(1)}`,
        '&[class*="active"]': {
          '&:before': {
            content: '""',
            width: '100%',
            height: 4,
            position: 'absolute',
            bottom: -10,
            borderRadius: '8px 8px 0 0',
            background: theme.palette.primary.light
          },
        },
        '& a': {
          color: theme.palette.common.white
        }
      }
    },
    '& button': {
      color: theme.palette.common.white
    }
  },
  menuButton: {
    position: 'absolute',
    left: 8,
    top: 4
  },
  darker: {
    backgroundAttachment: 'fixed',
    boxShadow: theme.shadows[3],
    [`&.${classes.gradient}`]: {
      background: theme.palette.mode === 'dark' ? gradientBgDark(theme) : gradientBgLight(theme),
    },
    [`&.${classes.solid}`]: {
      background: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main,
    },
  },
  nomargin: {},
  title: {
    marginBottom: theme.spacing(8),
    paddingBottom: theme.spacing(3),
    display: 'block',
    position: 'relative',
    '& h2': {
      fontWeight: 700,
      [theme.breakpoints.down('md')]: {
        fontSize: 26
      }
    },
    [`&.${classes.nomargin}`]: {
      marginBottom: 0
    },
    [`&.${classes.mono}`]: {
      '& h2': {
        color: theme.palette.common.white
      },
      '&:after': {
        background: theme.palette.common.white
      },
      '& p': {
        color: theme.palette.common.white
      }
    },
    [`&.${classes.color}`]: {
      '& h2': {
        color: theme.palette.mode === 'dark' ? theme.palette.primary.main : theme.palette.primary.dark,
      },
      '&:after': {
        background: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main
      }
    },
    '&:after': {
      position: 'absolute',
      bottom: 0,
      content: '""',
      width: 140,
      height: theme.spacing(0.5),
      borderRadius: '4px 4px 0 0',
    },
    [`&.${classes.left}`]: {
      '&:after': {
        left: 0,
      }
    },
    [`&.${classes.center}`]: {
      '&:after': {
        left: 'calc(50% - 70px)',
      }
    },
    [`&.${classes.right}`]: {
      '&:after': {
        right: 0
      }
    },
    '& p': {
      fontSize: 18
    }
  },
  left: {
    textAlign: 'left'
  },
  center: {
    textAlign: 'center'
  },
  right: {
    textAlign: 'right'
  },
  brand: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    fontWeight: 500,
    color: theme.palette.common.white,
    textDecoration: 'none',
    '& img': {
      height: 30,
      marginRight: 10,
    },
  },
  gradient: {},
  solid: {},
  fit: {},
  out: {},
  banner: {
    zIndex: 1,
    position: 'relative',
    marginBottom: theme.spacing(2),
    textAlign: 'center',
    height: 640,
    [theme.breakpoints.down('lg')]: {
      top: theme.spacing(7),
    },
    [theme.breakpoints.down('md')]: {
      height: 580,
      '& h2': {
        fontSize: theme.spacing(5),
      },
      '& p': {
        fontSize: theme.spacing(2)
      }
    },
    [`&.${classes.fit}`]: {
      [theme.breakpoints.up('md')]: {
        height: 760,
        paddingTop: theme.spacing(20),
      },
      top: 0,
      paddingTop: theme.spacing(15),
      overflow: 'hidden',
      '&:after': {
        content: '""',
        width: '100%',
        height: 200,
        backgroundImage: theme.palette.mode === 'dark' ? `url(${petalHeaderDark})` : `url(${petalHeaderLight})`,
        backgroundColor: 'transparent',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        [theme.breakpoints.down('md')]: {
          backgroundPosition: '-10px 10px',
        },
        position: 'absolute',
        bottom: -2,
        left: 0
      }
    },
    [`&.${classes.out}`]: {
      background: 'none !important',
    },
    [`&.${classes.gradient}`]: {
      background: theme.palette.mode === 'dark' ? gradientBgDark(theme) : gradientBgLight(theme),
    },
    [`&.${classes.solid}`]: {
      background: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main,
    },
    '& h2': {
      fontWeight: 500,
      color: theme.palette.common.white,
    },
    '& p': {
      color: theme.palette.common.white,
    },
    [`& .${classes.btnArea}`]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      '& > *': {
        width: 130,
        fontSize: 14,
        margin: `${theme.spacing(1)} 4px`,
      },
      [theme.breakpoints.up('sm')]: {
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),
        '& > *': {
          margin: `${theme.spacing(1)} ${theme.spacing(2)}`,
          width: 200,
          fontSize: 16
        }
      },
    },
  },
  bannerParallaxWrap: {
    '& [class*="figure"]': {
      height: 800,
      width: '100%',
      position: 'absolute',
      top: 500,
    }
  },
  previewApp: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 1,
    padding: `0 ${theme.spacing(1)}`
  },
  bottom: {},
  m1: {
    margin: '0 auto',
    zIndex: 2,
    position: 'relative',
  },
  m2: {
    left: 0,
    ...screenPreview,
    [`&.${classes.bottom}`]: {
      bottom: 'auto'
    }
  },
  m3: {
    right: 0,
    ...screenPreview,
    [`&.${classes.bottom}`]: {
      bottom: 'auto'
    }
  },
  screen: {
    [theme.breakpoints.up('sm')]: {
      width: 600,
      height: 310,
    },
    overflow: 'hidden',
    boxShadow: theme.shadows[2],
    borderRadius: theme.rounded.medium,
    background: alpha(theme.palette.background.paper, 0.9),
    padding: theme.spacing(1),
    paddingTop: theme.spacing(3),
    borderBottom: `${theme.spacing(1)} solid ${alpha(theme.palette.background.paper, 0.9)}`,
    '&:before': {
      content: '""',
      position: 'absolute',
      background: `url(${controlScreen}) transparent no-repeat`,
      top: 6,
      right: 8,
      width: 54,
      height: 20
    },
    '& img': {
      width: '100%',
    },
  },
  paralaxFull: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundSize: '100%'
  },
  lineBanner1: {
    backgroundImage: `url(${line1})`,
    backgroundRepeat: 'no-repeat',
    opacity: 0.3,
  },
  lineBanner2: {
    backgroundImage: `url(${line2})`,
    backgroundRepeat: 'no-repeat',
    opacity: 0.2,
  },
  petalBanner1: {
    backgroundImage: `url(${petal1})`,
    backgroundRepeat: 'no-repeat',
    opacity: 0.1,
    top: -160
  },
  petalBanner2: {
    backgroundImage: `url(${petal2})`,
    backgroundRepeat: 'no-repeat',
    opacity: 0.05,
    top: -40
  },
  feature: {
    marginTop: sectionSpace,
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      marginTop: sectionSpaceMobile,
      textAlign: 'center',
      padding: `0 ${theme.spacing(10)}`
    },
    [theme.breakpoints.down('sm')]: {
      padding: `0 ${theme.spacing(1)}`
    },
    '& p': {
      fontSize: 18,
    },
    '& h4': {
      marginBottom: theme.spacing(3),
      '& i': {
        top: theme.spacing(1),
        position: 'relative',
        marginRight: theme.spacing(1),
        width: 48,
        height: 48,
        fontSize: 48
      }
    },
    [`&.${classes.mono}`]: {
      '& h4': {
        color: theme.palette.common.white,
        '& svg': {
          fill: theme.palette.common.white
        }
      }
    },
    [`&.${classes.color}`]: {
      '& h4': {
        color: theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.secondary.dark,
        '& svg': {
          fill: theme.palette.secondary.main
        }
      }
    }
  },
  colorWhite: {
    color: theme.palette.common.white,
  },
  showcase: {
    position: 'relative',
    marginTop: sectionSpace,
    [theme.breakpoints.down('md')]: {
      marginTop: sectionSpaceMobile,
    }
  },
  pricing: {
    position: 'relative',
    marginTop: sectionSpace,
    [theme.breakpoints.down('md')]: {
      marginTop: sectionSpaceMobile,
    }
  },
  lastShowcase: {
    [theme.breakpoints.up('md')]: {
      marginTop: 275,
    }
  },
  parallaxWrap: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 0,
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    },
    '& [class*="figure"]': {
      height: 1000,
      width: '100%',
      position: 'absolute',
      top: 800,
    }
  },
  parallaxVertical: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    [theme.breakpoints.up('lg')]: {
      transform: 'scale(1.5, 1)'
    },
    [theme.breakpoints.up('xl')]: {
      display: 'none'
    },
  },
  parallaxPetal1: {
    top: 200,
    fill: theme.palette.primary.main,
    opacity: 0.05,
  },
  parallaxPetal2: {
    top: 500,
    fill: theme.palette.primary.main,
    opacity: 0.1,
  },
  parallaxLineSide1: {
    width: 500,
    top: -500,
    left: -360,
    fill: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    opacity: 0.2,
  },
  parallaxLineSide2: {
    width: 500,
    top: -500,
    left: -130,
    fill: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    opacity: 0.2,
  },
  parallaxLineSide3: {
    width: 450,
    top: -1130,
    right: -420,
    fill: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    opacity: 0.2,
  },
  parallaxLineSide4: {
    width: 450,
    top: -650,
    right: -380,
    fill: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    opacity: 0.2,
  },
  testimonials: {
    position: 'relative',
    marginTop: sectionSpace,
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      marginTop: sectionSpaceMobile,
    }
  },
  tech: {
    position: 'relative',
    marginTop: sectionSpace,
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      marginTop: sectionSpaceMobile,
    }
  },
  sliderWrap: {
    [theme.breakpoints.up('sm')]: {
      width: 540,
    },
    [theme.breakpoints.up('md')]: {
      width: 840,
    },
    margin: '0 auto',
    '& [class*="slider-wrapper"]': {
      [theme.breakpoints.up('sm')]: {
        height: 420
      },
      height: 240,
    },
    '& [class*="track"]': {
      [theme.breakpoints.up('sm')]: {
        width: 540,
      },
      overflow: 'hidden',
      margin: '0 auto',
      height: '100%',
      position: 'relative',
      '& > *': {
        borderRadius: theme.rounded.medium,
        [theme.breakpoints.up('sm')]: {
          width: 540,
          height: 400,
        },
        height: 240,
        overflow: 'hidden'
      }
    },
    '& [class*="previousButton"], [class*="nextButton"]': {
      borderRadius: '50%',
      background: theme.palette.primary.main,
      lineHeight: '72px',
      textAlign: 'center',
      verticalAlign: 'middle',
      top: '50%',
      '& svg': {
        fill: theme.palette.common.white
      },
      [theme.breakpoints.up('sm')]: {
        width: 72,
        height: 72,
      },
      [theme.breakpoints.down('sm')]: {
        '& svg': {
          width: 10,
          height: 10,
          top: -20,
          position: 'relative',
        }
      },
    },
  },
  playIcon: {
    opacity: 0.8,
    position: 'absolute',
    top: theme.spacing(7),
    color: theme.palette.common.white,
    left: 'calc(50% - 28px)',
    zIndex: 10,
    '& svg': {
      fontSize: 36
    },
    [theme.breakpoints.up('sm')]: {
      top: 'calc(50% - 65px)',
      left: 'calc(50% - 72px)',
      '& svg': {
        fontSize: 120
      },
    },
  },
  videoCaption: {
    position: 'absolute',
    left: '-10%',
    bottom: -140,
    width: '120%',
    paddingTop: theme.spacing(4),
    borderRadius: '50%',
    height: 240,
    background: alpha(theme.palette.primary.dark, 0.3),
    textAlign: 'center',
    verticalAlign: 'middle',
    opacity: 0.7,
    '& h2, span': {
      color: theme.palette.common.white,
      display: 'block'
    },
    [`&.${classes.mono}`]: {
      background: alpha(theme.palette.primary.dark, 0.3)
    },
    [`&.${classes.color}`]: {
      [theme.breakpoints.up('sm')]: {
        background: theme.palette.mode === 'dark' ? gradientBgDark(theme) : gradientBgLight(theme),
      },
    }
  },
  slideMode: {},
  wool: {
    position: 'relative',
    margin: `${theme.spacing(6)} auto`,
    width: 195,
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      transform: 'scale(0.6)',
      display: 'inline-block',
      margin: `${theme.spacing(1) * -7}px auto`,
    },
    '&:before': {
      content: '""',
      border: `1px solid ${theme.palette.primary.main}`,
      width: 195,
      height: 195,
      borderRadius: '50%',
      position: 'absolute',
      top: 8,
      left: '-4%',
    },
    '& figure': {
      textAlign: 'center',
      verticalAlign: 'middle',
      height: 195,
      lineHeight: '195px',
      borderRadius: '50%',
      border: `1px solid ${theme.palette.secondary.main}`,
      margin: `0 auto ${theme.spacing(4)}`,
      '& img': {
        border: 'none',
        display: 'inline',
        maxWidth: 120
      },
    },
    [`&.${classes.slideMode}`]: {
      width: 135,
      '&:before': {
        width: 135,
        height: 135,
        borderColor: theme.palette.common.white,
      },
      '& h5': {
        color: theme.palette.common.white,
      },
      '& figure': {
        background: alpha(theme.palette.common.white, 0.8),
        borderColor: theme.palette.common.white,
        width: 135,
        height: 135,
        lineHeight: '135px',
        '& img': {
          maxWidth: 80
        }
      },
      '& h1': {
        color: theme.palette.common.white,
      }
    }
  },
  centerTech: {
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(1) * -7,
    },
    textAlign: 'center',
    '& button': {
      whiteSpace: 'inherit'
    }
  },
  react: {
    color: '#61DAFB',
  },
  router: {
    color: '#D72B3F',
  },
  redux: {
    color: '#764ABC',
  },
  webpack: {
    color: '#1C78C0',
  },
  mui: {
    color: '#0081CB',
  },
  jss: {
    color: '#B7A82E',
  },
  withBg: {},
  contact: {
    paddingTop: sectionSpace,
    [theme.breakpoints.down('md')]: {
      paddingTop: sectionSpaceMobile,
    },
    [`&.${classes.withBg}`]: {
      backgroundImage: theme.palette.mode === 'dark' ? `url(${bgFooterDark})` : `url(${bgFooterLight})`,
      backgroundRepeat: 'no-repeat',
      backgroundColor: theme.palette.mode === 'dark' ? darken(theme.palette.primary.main, 0.7) : theme.palette.primary.light,
      backgroundPosition: 'center -240px',
      backgroundSize: '110%',
    }
  },
  textField: {
    marginTop: 0,
  },
  contactBubble: {
    padding: theme.spacing(3),
    backgroundRepeat: 'no-repeat',
    backgroundColor: theme.palette.background.default,
    borderRadius: theme.rounded.medium,
    boxShadow: theme.shade.light,
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(10),
      backgroundImage: theme.palette.mode === 'dark' ? 'url(/images/decoration/bubbleDark.png)' : 'url(/images/decoration/bubbleLight.png)',
      backgroundColor: 'transparent',
      boxShadow: 'none',
      paddingBottom: theme.spacing(16),
    },
    [theme.breakpoints.up('sm')]: {
      minWidth: 540,
    },
    [`& .${classes.btnArea}`]: {
      padding: `${theme.spacing(3)} 0`,
      [`& .${classes.button}`]: {
        width: '100%',
        margin: `${theme.spacing(4)} 0`,
        [theme.breakpoints.up('lg')]: {
          width: 220,
          marginTop: 0,
        }
      }
    }
  },
  contactText: {
    marginTop: theme.spacing(3)
  },
  footer: {
    background: theme.palette.mode === 'dark' ? gradientBgDark(theme) : gradientBgLight(theme),
    paddingTop: theme.spacing(10),
    position: 'absolute',
    bottom: -300,
    height: 330,
    width: '100%',
    overflow: 'hidden',
    [`& .${classes.brand}`]: {
      color: theme.palette.text.primary
    },
    '& nav': {
      '& li': {
        display: 'inline-block',
        margin: `0 ${theme.spacing(3)}`,
        '& a': {
          fontSize: 11,
          textTransform: 'capitalize',
          fontWeight: theme.typography.fontWeightRegular
        }
      }
    },
    [`& .${classes.spaceContainer}`]: {
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        '& ul': {
          textAlign: 'center',
          marginTop: theme.spacing(3)
        }
      }
    },
    [`& .${classes.container}`]: {
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        alignItems: 'center',
      }
    }
  },
  footerDecoration: {
    width: '100%',
    position: 'absolute',
    top: 0,
    height: 330,
    fill: theme.palette.mode === 'dark' ? darken(theme.palette.primary.main, 0.7) : theme.palette.primary.light,
    [theme.breakpoints.up(1400)]: {
      transform: 'scale(2, 1)'
    },
    [theme.breakpoints.up('xl')]: {
      background: theme.palette.mode === 'dark' ? darken(theme.palette.primary.main, 0.7) : theme.palette.primary.light,
    },
  },
  copyright: {
    '& p': {
      flex: 1,
      fontSize: 12,
      marginTop: theme.spacing(1),
      color: theme.palette.text.secondary,
    },
    [`& .${classes.container}`]: {
      borderTop: `1px solid ${theme.palette.divider}`,
      padding: theme.spacing(1),
      marginTop: theme.spacing(1),
      display: 'flex'
    },
    '& span': {
      '& a': {
        width: 'auto',
        height: 'auto',
        '& i': {
          color: theme.palette.primary.main,
          width: 24,
          height: 24,
          fontSize: 24,
          lineHeight: '24px'
        }
      }
    }
  },
  btnLight: {
    borderColor: theme.palette.common.white,
    color: theme.palette.common.white,
    '&:hover': {
      borderColor: theme.palette.common.white,
      background: alpha(theme.palette.common.black, 0.1)
    }
  },
  formControl: {
    display: 'block',
    width: '100%',
  },
  fullSliderContent: {
    width: '100%',
    [theme.breakpoints.up('lg')]: {
      width: 'calc(100% - 240px)',
    }
  },
  sliderPageWrap: {
    '& section': {
      [theme.breakpoints.up('lg')]: {
        height: '100vh',
      },
      '& > div': {
        marginTop: 0,
        [theme.breakpoints.up('lg')]: {
          transform: 'scale(0.8)',
        },
        [theme.breakpoints.down('lg')]: {
          padding: `${sectionSpaceMobile / 2}px ${theme.spacing(3)}`
        },
        [theme.breakpoints.down('md')]: {
          padding: `${sectionSpaceMobile / 2}px ${theme.spacing(2)}`
        },
        height: '100%',
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }
    }
  },
  fullWidth: {
    width: '100%',
    maxWidth: 1024
  },
  line1: {},
  line2: {},
  petal1: {},
  petal2: {},
  odd: {},
  even: {},
  show: {},
  parallaxBg: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    '& img': {
      position: 'absolute',
      transition: 'transform 2s ease-out'
    },
    [`& .${classes.line1}`]: {
      opacity: 0.2,
      top: -60,
      left: 0,
    },
    [`& .${classes.line2}`]: {
      opacity: 0.4,
      top: -420,
      [theme.breakpoints.up('lg')]: {
        left: -190,
      }
    },
    [`& .${classes.petal1}`]: {
      opacity: 0.1,
      top: -70,
      [theme.breakpoints.up('lg')]: {
        left: -10,
      }
    },
    [`& .${classes.petal2}`]: {
      opacity: 0.05,
      top: -40,
      left: 0,
    },
    [`& .${classes.odd}, .${classes.even}`]: {
      opacity: 0,
      transition: 'opacity ease-out 1s'
    },
    [`& .${classes.show}`]: {
      opacity: 1,
      [`& .${classes.line1}`]: {
        [theme.breakpoints.up('lg')]: {
          transform: 'translateX(-10px)'
        }
      },
      [`& .${classes.line2}`]: {
        [theme.breakpoints.up('lg')]: {
          transform: 'translateX(40px)'
        }
      },
      [`& .${classes.petal1}`]: {
        [theme.breakpoints.up('lg')]: {
          transform: 'translateX(-100px)'
        }
      },
      [`& .${classes.petal2}`]: {
        [theme.breakpoints.up('lg')]: {
          transform: 'translateX(-50px)'
        }
      },
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
