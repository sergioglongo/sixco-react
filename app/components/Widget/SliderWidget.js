import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import Type from 'dan-styles/Typography.scss';
import Slider from 'dandelion-animated-slider';
import 'dan-styles/vendors/react-animated-slider/react-animated-slider.css';
import imgApi from 'dan-api/images/photos';

const useStyles = makeStyles()((theme) => ({
  tag: {
    background: alpha(theme.palette.primary.light, 0.8),
    color: theme.palette.primary.dark,
    position: 'absolute',
    right: 10,
    top: 10,
    padding: theme.spacing(1),
    borderRadius: theme.rounded.big,
    fontSize: 11,
    fontWeight: theme.typography.fontWeightMedium,
    boxShadow: theme.shadows[3]
  },
  title: {
    color: theme.palette.common.white
  }
}));

const content = [
  {
    title: 'Vulputate Mollis Ultricies',
    description:
    'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
    button: 'Watch Video',
    image: imgApi[8],
    label: 'Uploaded to',
    tag: 'Just Uploaded',
    to: 'Lorem Video',
    userProfile: imgApi[54],
    type: 'video',
  },
  {
    title: 'Tortor Dapibus Fermentum',
    description:
    'Cras mattis consectetur purus sit amet fermentum.',
    button: 'See Post',
    image: imgApi[15],
    label: 'Posted to',
    tag: 'Newest Post',
    to: 'Ipsum Media',
    userProfile: imgApi[53],
    type: 'article'
  },
  {
    title: 'Phasellus volutpat',
    description:
    'Lorem ipsum dolor sit amet',
    button: 'Read Article',
    image: imgApi[29],
    label: 'Posted to',
    tag: 'Latest Article',
    to: 'Dolor Sit News',
    userProfile: imgApi[58],
    type: 'article'
  }
];

function SliderWidget() {
  const {
    classes,
    cx
  } = useStyles();
  return (
    <div>
      <Slider className="slider-wrapper short">
        {content.map((item, index) => (
          <div
            key={index.toString()}
            className="slider-content"
            style={{ background: `url('${item.image}') no-repeat center center` }}
          >
            <span className={classes.tag}>{item.tag}</span>
            <div className="inner">
              <Typography variant="subtitle1" component="h3" className={cx(classes.title, Type.light)} gutterBottom>{item.title}</Typography>
              <Button variant="contained" color="primary">
                {item.type === 'video' && <Icon>play_arrow</Icon>}
                {item.button}
              </Button>
            </div>
            <section>
              <img src={item.userProfile} alt={item.user} />
              <span>
                {item.label}
                &nbsp;
                <strong>
                  {item.to}
                </strong>
              </span>
            </section>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderWidget;
