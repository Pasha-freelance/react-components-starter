import { Box, makeStyles } from '@material-ui/core';
import { FC } from 'react';
import { Device } from '../shared/Device';
import { PageElementProps } from '../shared/PageElementProps';

export interface SimpleTextDef {
  text?: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '1rem',
    background: 'rgba(0,0,0,.2)'
  },
}));

// do not remove PageElementProps to avoid collission later, we need this interface in the full app for integration
export const SimpleText: FC<
  { data: SimpleTextDef; device?: Device } & PageElementProps
> = (props) => {
  const classes = useStyles();
  const className = `${props.className} ${classes.root}`;
  return (
    <Box
      className={className}
      style={props.style}
      id={props.id}
      onMouseMove={props.onMouseMove}
      onDoubleClick={props.onDoubleClick}
      onClick={props.onClick}
    >
      {props.data?.text}
    </Box>
  );
};
