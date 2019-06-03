import React from 'react';
import { lighten } from '@material-ui/core/styles/colorManipulator'
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core';

const BorderLinearProgress = withStyles({
  root: {
    height:3,
    marginTop: '-19.05px',
    backgroundColor: lighten('#ff3f3f', 0.5),
  },
  bar: {
    borderRadius: 20,
    backgroundColor: '#ff3f3f',
  },
})(LinearProgress);

function Loading() {
  return (
      <BorderLinearProgress color="secondary"/>
  );
}

export default Loading;