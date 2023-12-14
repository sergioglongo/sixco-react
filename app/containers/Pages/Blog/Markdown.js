import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from 'tss-react/mui';
import ReactMarkdown from 'react-markdown';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles()((theme) => ({
  listItem: {
    marginTop: theme.spacing(1),
  },
}));

function ListItem(props) {
  const { children } = props;
  const {
    classes
  } = useStyles();
  return (
    <li className={classes.listItem}>
      {children}
    </li>
  );
}

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
};

const ListItemStyled = ListItem;

const renderers = {
  h1: props => <Typography {...props} gutterBottom variant="h4" />,
  h2: props => <Typography {...props} gutterBottom variant="subtitle1" />,
  h3: props => <Typography {...props} gutterBottom variant="h6" />,
  h4: props => <Typography {...props} gutterBottom variant="caption" paragraph />,
  h5: props => <Typography {...props} gutterBottom />,
  h6: props => <Typography {...props} gutterBottom />,
  li: ({
    tight, // eslint-disable-line
    ordered, // eslint-disable-line
    ...props
  }) => (
    <ListItemStyled>
      <Typography component="span" {...props} />
    </ListItemStyled>
  ),
  p: props => <Typography {...props} paragraph />,
};

export default function Markdown(props) {
  return <ReactMarkdown components={renderers} {...props} />;
}
