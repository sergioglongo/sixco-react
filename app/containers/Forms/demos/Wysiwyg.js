import React, { useState } from 'react';
import { convertFromRaw, EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import draftToMarkdown from 'draftjs-to-markdown';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import 'dan-styles/vendors/react-draft-wysiwyg/react-draft-wysiwyg.css';
import useStyles from 'dan-components/Email/email-jss';

const content = {
  blocks: [{
    key: '637gr',
    text: 'Lorem ipsum dolor sit amet 😀',
    type: 'unstyled',
    depth: 0,
    inlineStyleRanges: [],
    entityRanges: [],
    data: {}
  }],
  entityMap: {}
};

function Wysiwyg() {
  const { classes } = useStyles();
  const contentBlock = convertFromRaw(content);
  const tempEditorState = EditorState.createWithContent(contentBlock);
  const [dataEditorState, setEditorState] = useState(tempEditorState);

  const onEditorStateChange = editorStateParam => {
    setEditorState(editorStateParam);
  };

  return (
    <Grid
      container
      alignItems="flex-start"
      justifyContent="space-around"
      direction="row"
      spacing={3}
    >
      <Grid item xs={12}>
        <Editor
          editorState={dataEditorState}
          editorClassName={classes.textEditor}
          toolbarClassName={classes.toolbarEditor}
          onEditorStateChange={onEditorStateChange}
        />
      </Grid>
      <Grid item md={4} xs={12}>
        <Typography variant="button">JSON Result :</Typography>
        <textarea
          className={classes.textPreview}
          disabled
          value={JSON.stringify(dataEditorState, null, 4)}
        />
      </Grid>
      <Grid item md={4} xs={12}>
        <Typography variant="button">HTML Result :</Typography>
        <textarea
          className={classes.textPreview}
          disabled
          value={draftToHtml(convertToRaw(dataEditorState.getCurrentContent()))}
        />
      </Grid>
      <Grid item md={4} xs={12}>
        <Typography variant="button">Markdown Result :</Typography>
        <textarea
          className={classes.textPreview}
          disabled
          value={dataEditorState && draftToMarkdown(convertToRaw(dataEditorState.getCurrentContent()))}
        />
      </Grid>
    </Grid>
  );
}

export default Wysiwyg;
