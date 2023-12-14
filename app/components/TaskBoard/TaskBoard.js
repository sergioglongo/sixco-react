import React from 'react';
import { PropTypes } from 'prop-types';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Board from 'react-trello';
import Tag from 'react-trello/dist/components/Card/Tag';
import DeleteButton from 'react-trello/dist/widgets/DeleteButton';
import HeaderBoard from './HeaderBoard';
import useStyles from './taskBoard-jss';

const handleDragStart = (cardId, laneId) => {
  console.log('drag started');
  console.log(`cardId: ${cardId}`);
  console.log(`laneId: ${laneId}`);
};

const handleDragEnd = (cardId, sourceLaneId, targetLaneId) => {
  console.log('drag ended');
  console.log(`cardId: ${cardId}`);
  console.log(`sourceLaneId: ${sourceLaneId}`);
  console.log(`targetLaneId: ${targetLaneId}`);
};

/* Custom Card */
function CustomCard(props) {
  const { classes } = useStyles();
  const {
    title,
    label,
    description,
    tags,
    onDelete
  } = props;

  const clickDelete = e => {
    onDelete();
    e.stopPropagation();
  };

  return (
    <div className={classes.card}>
      <header className={classes.headerCard}>
        <div className={classes.title}>{title}</div>
        <div className={classes.label}>{label}</div>
        <DeleteButton onClick={clickDelete} />
      </header>
      {tags !== [] && <div className={classes.tags}>{tags.map((tag, index) => <Tag key={index.toString()} {...tag} />)}</div>}
      <div className={classes.content}>
        {description}
      </div>
    </div>
  );
}

CustomCard.propTypes = {
  tags: PropTypes.array,
  title: PropTypes.string.isRequired,
  label: PropTypes.string,
  description: PropTypes.string,
  onDelete: PropTypes.func.isRequired
};

CustomCard.defaultProps = {
  tags: [],
  label: '',
  description: '',
};

const CustomCardStyled = CustomCard;

/* Custom Add Button */
const ButtonAdd = ({ onClick }) => {
  const { classes } = useStyles();
  return (
    <Button onClick={onClick}>
      <AddIcon className={classes.leftIcon} />
      &nbsp;Add Task
    </Button>
  );
};

ButtonAdd.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const ButtonAddStyled = ButtonAdd;

function TaskBoard(props) {
  const { classes } = useStyles();
  const {
    data,
    dataLoaded,
    removeBoard
  } = props;
  const handleCardAdd = (card, laneId) => {
    console.log(`New card added to lane ${laneId}`);
    console.dir(card);
  };

  const LaneHeaderCustom = (headerProps) => (
    <HeaderBoard removeBoard={removeBoard} {...headerProps} />
  );

  return (
    <div data-loaded={dataLoaded} className={classes.boardWrap}>
      <Board
        editable
        onCardAdd={handleCardAdd}
        data={data}
        draggable
        handleDragStart={handleDragStart}
        handleDragEnd={handleDragEnd}
        tagStyle={{ fontSize: '80%' }}
        components={{
          AddCardLink: ButtonAddStyled,
          Card: CustomCardStyled,
          LaneHeader: LaneHeaderCustom
        }}
      />
    </div>
  );
}

TaskBoard.propTypes = {
  data: PropTypes.object.isRequired,
  removeBoard: PropTypes.func.isRequired,
  dataLoaded: PropTypes.bool.isRequired,

};

export default TaskBoard;
