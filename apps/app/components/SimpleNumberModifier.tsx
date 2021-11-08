import { Box, debounce, makeStyles, TextField } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { SimpleBannerDataDef } from '../shared/BannerData';

export interface SimpleNumberDef {
  height?: number
}

const useStyles = makeStyles((theme) => ({
  editor: {
    height: 'auto',
    resize: 'none',
    border: 'none',
  },
}));

const initialSimpleNumberDef: SimpleNumberDef = {
  height: 500
};

export const SimpleNumberModifier = (props: {
  onDataChanged: (d: SimpleBannerDataDef) => void;
}) => {
  const classes = useStyles();
  const [data, setData] = useState<SimpleBannerDataDef>(() => ({
    ...initialSimpleNumberDef,
  }));

  const updateProperty = (key: keyof SimpleBannerDataDef, value: any) => {
    setData((prev) => ({
        ...prev,
        [key]: value
      })
    );
  };
  const updateHeight = debounce((v: string) => updateProperty('height', v), 300);

  useEffect(() => {
    props.onDataChanged(data);
    return;
  }, [data]);

  return (
    <Box padding="1rem">
      <TextField
      style={{ width: '100%' }}
      type={'number'}
      className={`${classes.editor}`}
      variant="outlined"
      defaultValue={500}
      label={'Height'}
      onChange={(e) => updateHeight( e.target.value)}
      />
  </Box>
);
};
