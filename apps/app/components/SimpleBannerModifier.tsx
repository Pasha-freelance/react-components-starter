import React from 'react';
import { SimpleNumberModifier } from './SimpleNumberModifier';
import { SimpleTextModifier } from './SimpleTextModifier';
import { Box, makeStyles } from '@material-ui/core';
import { SimpleBannerData } from '../shared/BannerData';

const useStyles = makeStyles(theme => ({
  root: {
    border: '2px solid red',
    padding: '10px'
  }
}))

const SimpleBannerModifier = (props: {
  onDataChanged: (d: SimpleBannerData) => void;
}) => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <SimpleTextModifier onDataChanged={(d) => props.onDataChanged(d)}/>
      <SimpleNumberModifier
        onDataChanged={(d) => props.onDataChanged(d)}
      />
    </Box>
  );
};

export default SimpleBannerModifier;
