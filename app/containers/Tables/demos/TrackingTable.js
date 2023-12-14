import React from 'react';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';
import LinearProgress from '@mui/material/LinearProgress';
import Avatar from '@mui/material/Avatar';
import Icon from '@mui/material/Icon';
import messageStyles from 'dan-styles/Messages.scss';
import progressStyles from 'dan-styles/Progress.scss';
import avatarApi from 'dan-api/images/avatars';
import { PapperBlock } from 'dan-components';
import useStyles from 'dan-components/Widget/widget-jss';

let id = 0;
function createData(name, avatar, title, type, taskNumber, taskTitle, progress, status) {
  id += 1;
  return {
    id,
    name,
    avatar,
    title,
    type,
    taskNumber,
    taskTitle,
    progress,
    status,
  };
}

const data = [
  createData('John Doe', avatarApi[6], 'Front End Developer', 'bug_report', 2214, 'Vivamus sit amet interdum elit', 30, 'Error'),
  createData('Jim Doe', avatarApi[8], 'System Analyst', 'flag', 2455, 'Nam sollicitudin dignissim nunc', 70, 'Success'),
  createData('Jane Doe', avatarApi[2], 'Back End Developer', 'whatshot', 3450, 'Quisque ut metus sit amet augue rutrum', 50, 'Warning'),
  createData('Jack Doe', avatarApi[9], 'CTO', 'settings', 4905, 'Cras convallis lacus orci', 85, 'Info'),
  createData('Jessica Doe', avatarApi[5], 'Project Manager', 'book', 4118, 'Aenean sit amet magna vel magna', 33, 'Default'),
];

function TrackingTable() {
  const { classes, cx } = useStyles();
  const getStatus = status => {
    switch (status) {
      case 'Error': return messageStyles.bgError;
      case 'Warning': return messageStyles.bgWarning;
      case 'Info': return messageStyles.bgInfo;
      case 'Success': return messageStyles.bgSuccess;
      default: return messageStyles.bgDefault;
    }
  };
  const getProgress = status => {
    switch (status) {
      case 'Error': return progressStyles.bgError;
      case 'Warning': return progressStyles.bgWarning;
      case 'Info': return progressStyles.bgInfo;
      case 'Success': return progressStyles.bgSuccess;
      default: return progressStyles.bgDefault;
    }
  };
  const getType = type => {
    switch (type) {
      case 'bug_report': return classes.red;
      case 'flag': return classes.indigo;
      case 'whatshot': return classes.orange;
      case 'settings': return classes.lime;
      default: return classes.purple;
    }
  };
  return (
    <PapperBlock title="Team Progress" icon="ion-ios-podium-outline" whiteBg desc="Monitoring Your Team progress. Tracking task, current progress, and task status here.">
      <div className={classes.rootTable}>
        <Table className={cx(classes.table)}>
          <TableHead>
            <TableRow>
              <TableCell padding="normal" width="300">Name</TableCell>
              <TableCell>Task</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(n => ([
              <TableRow key={n.id}>
                <TableCell padding="normal">
                  <div className={classes.flex}>
                    <Avatar alt={n.name} src={n.avatar} className={classes.avatar} />
                    <div>
                      <Typography variant="subtitle1">{n.name}</Typography>
                      <Typography>{n.title}</Typography>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className={classes.taskStatus}>
                    <Icon className={cx(classes.taskIcon, getType(n.type))}>{n.type}</Icon>
                    <a href="#">
                      #
                      {n.taskNumber}
                    </a>
                    <Chip label={n.status} className={cx(classes.chip, getStatus(n.status))} />
                  </div>
                  <LinearProgress variant="determinate" className={getProgress(n.status)} value={n.progress} />
                </TableCell>
              </TableRow>
            ]))}
          </TableBody>
        </Table>
      </div>
    </PapperBlock>
  );
}

export default TrackingTable;
