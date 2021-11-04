import React, { FC } from 'react';
import { SimpleText } from './SimpleText';
import { PageElementProps } from '../shared/PageElementProps';
import { SimpleBannerData } from '../shared/BannerData';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles( theme => ({
  root: {
    border: '2px solid black',
    padding:'10px',
    marginTop:'10px',
    overflow: 'auto'
  }
}))

const SimpleBanner : FC<
  { data: SimpleBannerData} & PageElementProps
  > = (props) => {
  const classes = useStyles()
  const className = `${props.className} ${classes.root}`
  const style = {
    height: `${props.data?.height}px`
  }
  return (
    <Box className={className}
         style={{...props.style, ...style}}
         id={props.id}
         onMouseMove={props.onMouseMove}
         onDoubleClick={props.onDoubleClick}
         onClick={props.onClick}
    >
      <SimpleText data={props.data}/>
    </Box>
  );
};

export default SimpleBanner;
