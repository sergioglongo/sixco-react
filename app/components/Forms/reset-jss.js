import { makeStyles } from 'tss-react/mui';
import bg from 'dan-images/petal_grey_bg.svg';
import bgLight from 'dan-images/petal_bg.svg';

const rootWraper = {
    display: 'flex',
    width: '100%',
    zIndex: 1,
    position: 'relative'
};

const wrapper = (theme, opacity) => ({
    padding: theme.spacing(3),
    textAlign: 'center',
    backgroundColor: 'white',
    backgroundRepeat: 'no-repeat',
    color: theme.palette.text.primary,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
});

const useStyles = makeStyles()((theme, _params, classes) => ({
    root: {
        ...rootWraper
    },
    rootFull: {
        ...rootWraper,
        height: '100%',
        backgroundColor: '#042630'
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        [theme.breakpoints.down('lg')]: {
            overflow: 'hidden'
        },
    },
    userFormWrap: {
        width: '94%',
        [theme.breakpoints.up('md')]: {
            width: 720
        },
        [theme.breakpoints.down('md')]: {
            marginBottom: theme.spacing(3)
        },
    },
    fullFormWrap: {
        height: '100%',
        width: '100%'
      },
    paperWrap: {
        ...wrapper(theme, 1),
    },
    sideWrap: {
        ...wrapper(theme, 1),
        // height: '100%',
        borderRadius: 0,
        [theme.breakpoints.down('md')]: {
            height: '100%',
        },
        [`& .${classes.topBar}`]: {
            marginBottom: theme.spacing(4)
        }
    },
    formWrap: {
        [theme.breakpoints.up('sm')]: {
            padding: '0 100px'
        },
        [theme.breakpoints.up('md')]: {
            padding: '0 150px'
        },
    },
    petal: {
        backgroundImage: theme.palette.mode === 'dark' ? `url(${bgLight})` : `url(${bg})`,
    },
    brand: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5px 10px',
        position: 'relative',
        height: 80,
        fontSize: 16,
        fontWeight: 500,
        color: theme.palette.text.primary,
        textDecoration: 'none',
        [`&.${classes.outer}`]: {
            color: theme.palette.common.white,
        },
        [theme.breakpoints.down('lg')]: {
            margin: theme.spacing(2),
            padding: 0
        },
        '& img': {
            width: 100,
            marginRight: 10,
        },
    },
    title: {
        color: theme.palette.primary.main,
    },
    subtitle: {
        fontSize: 14
    },
    formControl: {
        width: '100%',
        marginBottom: theme.spacing(1)
    },
    btnArea: {
        display: 'flex',
        justifyContent: 'space-around',
        margin: `${theme.spacing(2)} 0`,
        fontSize: 12,
        [`& .${classes.label}`]: {
            fontSize: 12,
            '& span': {
                fontSize: 12
            }
        },
        '& button': {
            margin: `0 ${theme.spacing(1)}`
        },
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            '& button': {
                width: '100%',
                margin: 5
            }
        },
    },
    leftIcon: {
        marginRight: theme.spacing(1),
    },
    rightIcon: {
        marginLeft: theme.spacing(1),
    },
    iconSmall: {
        fontSize: 20,
    },
    buttonLink: {
        background: 'none',
        padding: 0,
        textTransform: 'none',
        transition: 'color ease 0.3s',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: '0.875rem',
        '&:hover': {
            background: 'none',
            color: theme.palette.secondary.main
        }
    },
}));

export default useStyles;