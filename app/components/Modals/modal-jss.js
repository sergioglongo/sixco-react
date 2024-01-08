import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme, _params, classes) => ({
    close: {
        width: theme.spacing(4),
        height: theme.spacing(4),
        padding: 0,
    },
})
);

export default useStyles;