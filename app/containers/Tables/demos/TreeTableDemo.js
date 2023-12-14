import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TreeTable } from 'dan-components';
import useStyles from 'dan-components/Tables/tableStyle-jss';
import openAction from '../actions/treeTbActions';
import data from './dataTreeTable.js';

function TreeTableDemo() {
  // Redux State
  const branch = 'treeTableArrow';
  const treeOpen = useSelector(state => state.treeTableArrow.treeOpen);
  const arrowMore = useSelector(state => state.treeTableArrow.arrowMore);

  // Dispatcher
  const toggleTree = useDispatch();

  const { classes } = useStyles();
  return (
    <div className={classes.rootTable}>
      <TreeTable
        treeOpen={treeOpen}
        toggleTree={(id, payload) => toggleTree(openAction(id, payload, branch))}
        arrowMore={arrowMore}
        dataTable={data}
        branch={branch}
      />
    </div>
  );
}

export default TreeTableDemo;
