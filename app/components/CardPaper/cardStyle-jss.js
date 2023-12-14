import { makeStyles } from 'tss-react/mui';
import { alpha, darken } from '@mui/material/styles';
import roundedThumbLight from 'dan-images/decoration/roundedThumbLight.png';
import roundedThumbDark from 'dan-images/decoration/roundedThumbDark.png';
import { pink, lightGreen, blueGrey as dark } from '@mui/material/colors';

const useStyles = makeStyles()((theme, _params, classes) => ({
  divider: {
    margin: `${theme.spacing(3)} 0`
  },
  card: {
    minWidth: 275,
  },
  priceCard: {
    maxWidth: 320,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  liked: {
    color: pink[500]
  },
  shared: {
    color: lightGreen[500]
  },
  num: {
    fontSize: 14,
    marginLeft: 5
  },
  rightIcon: {
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center'
  },
  button: {
    marginRight: theme.spacing(1)
  },
  cardPlayer: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 150,
    height: 150,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  btnArea: {
    justifyContent: 'center',
    padding: theme.spacing(3),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  cardSocmed: {
    minWidth: 275,
  },
  cardProduct: {
    position: 'relative'
  },
  mediaProduct: {
    height: 0,
    paddingTop: '60.25%', // 16:9
  },
  cardMedia: {
    position: 'relative',
    marginBottom: theme.spacing(3),
  },
  gutterBottom: {
    marginBottom: theme.spacing(3)
  },
  landscapeCard: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex'
    }
  },
  rightAction: {
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center'
  },
  floatingButtonWrap: {
    position: 'relative',
    paddingTop: 50
  },
  buttonAdd: {
    position: 'absolute',
    right: 20,
    top: -20,
  },
  buttonAddList: {
    display: 'none',
    marginLeft: 10
  },
  title: {
    fontSize: 20,
    height: 30,
    fontWeight: theme.typography.fontWeightMedium
  },
  ratting: {
    margin: '10px 0',
    '& button': {
      width: 24,
      height: 24
    }
  },
  status: {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: 10,
    '& > *': {
      margin: 5
    }
  },
  desc: {
    height: 45,
    overflow: 'hidden'
  },
  chipDiscount: {
    background: theme.palette.primary.light,
    color: theme.palette.primary.dark,
  },
  chipSold: {
    background: dark[500],
    color: theme.palette.getContrastText(dark[500]),
  },
  contentProfile: {
    flex: '1 0 auto',
    textAlign: 'center',
    marginTop: -70
  },
  mediaProfile: {
    height: 0,
    paddingTop: '66.25%',
    borderRadius: '50%',
    width: '120%',
    left: '-10%',
    position: 'relative',
    top: -70
  },
  actions: {
    display: 'flex',
  },
  avatar: {
    boxShadow: theme.shadows[7]
  },
  avatarBig: {
    width: 80,
    height: 80,
    margin: '-56px auto 10px',
    background: theme.palette.secondary.dark,
    boxShadow: theme.shadows[7]
  },
  name: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonProfile: {
    margin: 20
  },
  bottomLink: {
    width: '100%',
  },
  price: {
    padding: `${theme.spacing(1)} ${theme.spacing(2)} ${theme.spacing(3)}`
  },
  verified: {
    fontSize: 16,
    color: theme.palette.primary.main
  },
  cardList: {
    display: 'flex',
    justifyContent: 'space-between',
    [`& .${classes.buttonAddList}`]: {
      display: 'inline-block'
    },
    [`& .${classes.floatingButtonWrap}`]: {
      flex: 1,
    },
    [`& .${classes.buttonAdd}`]: {
      display: 'none'
    },
    [`& .${classes.status}`]: {
      right: 'auto',
      left: 0,
    },
    [`& .${classes.mediaProduct}`]: {
      width: 300,
      paddingTop: '21.25%'
    },
    [`& .${classes.price}`]: {
      flexDirection: 'column',
      justifyContent: 'center',
      '& button': {
        marginTop: 20
      }
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    position: 'relative',
  },
  playBtn: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 64,
    height: 64,
    transform: 'translate(-50%, -50%)',
    '& svg': {
      color: theme.palette.common.white,
      fontSize: 64
    }
  },
  newsList: {
    display: 'flex',
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse'
    }
  },
  newsListContent: {
    padding: theme.spacing(2),
    flex: 1,
    overflow: 'hidden'
  },
  mediaNews: {
    [theme.breakpoints.up('sm')]: {
      width: 150,
    },
    height: 150
  },
  extraRounded: {},
  roundedMedia: {
    height: 0,
    paddingTop: '86.25%',
    borderRadius: '50%',
    width: '120%',
    left: '-10%',
    position: 'relative',
    top: -70,
    backgroundPosition: '45% 60px',
    backgroundSize: '85%',
    marginBottom: -70,
    [`&.${classes.extraRounded}`]: {
      left: '-30%',
      width: '160%',
      top: -100,
      marginBottom: -100,
      [theme.breakpoints.up('sm')]: {
        top: -200,
        marginBottom: -200,
      },
    }
  },
  roundedThumb: {
    position: 'relative',
    paddingTop: '50%',
    backgroundPosition: 'center',
    [theme.breakpoints.up('sm')]: {
      width: '70%',
      '&:after': {
        content: '""',
        right: -1,
        top: 0,
        position: 'absolute',
        backgroundSize: '100% 100%',
        height: '100%',
        width: 40,
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'transparent',
        backgroundImage: theme.palette.mode === 'dark' ? `url(${roundedThumbDark})` : `url(${roundedThumbLight})`
      }
    },
  },
  priceHead: {
    height: 300,
    position: 'relative',
    borderRadius: '50%',
    width: '150%',
    left: '-25%',
    paddingTop: 120,
    marginBottom: -60,
    top: -70,
    textAlign: 'center',
    background: alpha(theme.palette.common.white, 0.3),
    color: theme.palette.common.white,
    '& h5': {
      color: theme.palette.common.white
    },
    '& h4': {
      textShadow: '0 0 22px #a0a0a0',
      fontWeight: 'bold',
      color: theme.palette.common.white,
      marginTop: theme.spacing(3)
    }
  },
  featureList: {
    padding: 0,
    textAlign: 'center',
    color: theme.palette.common.white,
    '& li': {
      lineHeight: '32px'
    }
  },
  lightButton: {
    color: theme.palette.common.white,
    borderColor: theme.palette.common.white,
  },
  free: {
    background: theme.palette.secondary.main,
  },
  cheap: {
    background: theme.palette.primary.main,
  },
  expensive: {
    background: darken(theme.palette.primary.dark, 0.2),
  },
  moreExpensive: {
    background: darken(theme.palette.secondary.dark, 0.7),
  },
  mainFeaturedPost: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    overflow: 'hidden'
  },
  mainFeaturedPostContent: {
    padding: theme.spacing(2),
    minHeight: 200,
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
    [theme.breakpoints.down('md')]: {
      alignItems: 'center',
      display: 'flex',
    },
  },
  imageFull: {
    position: 'relative',
    width: '100%',
    '&:hover': {
      zIndex: 1,
      [`& .${classes.imageBackdrop}`]: {
        opacity: 0.15,
      },
    },
  },
  imageButton: {
    zIndex: 1,
    position: 'relative',
    top: 0,
    bottom: 0,
    color: theme.palette.common.white,
    whiteSpace: 'normal',
    textAlign: 'left',
    [theme.breakpoints.down('lg')]: {
      '& h1': {
        fontSize: 32,
        lineHeight: '42px',
      },
      '& p': {
        fontSize: 16
      }
    },
    [theme.breakpoints.only('sm')]: {
      '& h1': {
        width: '60%'
      },
    }
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
