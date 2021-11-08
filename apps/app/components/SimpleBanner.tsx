import React, { FC } from 'react';
import { PageElementProps } from '../shared/PageElementProps';
import { SimpleBannerDataStylesDef, SimpleBannerDataDef } from '../shared/BannerData';
import { Box, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles<Theme, SimpleBannerDataStylesDef>({
  root: {
    border: '2px solid black',
    padding: '10px',
    marginTop: '10px',
    overflow: 'auto',
    height: props => `${props.height}px`
  },
  text: {
    padding: '1rem',
    background: 'rgba(0,0,0,.2)'
  }
});

const SimpleBanner: FC<
  { data: SimpleBannerDataDef } & PageElementProps
> = (props) => {
  const classesProps: SimpleBannerDataStylesDef = {
    height: props.data?.height
  };
  const classes = useStyles(classesProps)
  const className = `${props.className} ${classes.root}`
  return (
    <Box className={className}>
      <Box
        className={classes.text}
        style={props.style}
        id={props.id}
        onMouseMove={props.onMouseMove}
        onDoubleClick={props.onDoubleClick}
        onClick={props.onClick}
      >
        {props.data?.text}
      </Box>
    </Box>
  );
};

export default SimpleBanner;
