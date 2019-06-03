import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

function LoadingCircle() {

  return (
    <div center>
      <CircularProgress style={{color: '#ff3f3f'}} center/>
    </div>
  );
}

export default LoadingCircle;