import { Box, debounce, makeStyles, TextField } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { SimpleBannerDataDef } from '../shared/BannerData';

export interface SimpleTextDef {
  text: string;
}

const useStyles = makeStyles((theme) => ({
  editor: {
    height: 'auto',
    resize: 'none',
    border: 'none'
  }
}));

const initialSimpleTextDef: SimpleTextDef = {
  text: ''
};

export const SimpleTextModifier = (props: {
  onDataChanged: (d: SimpleBannerDataDef) => void;
}) => {
  const classes = useStyles();
  const [data, setData] = useState<SimpleBannerDataDef>(() => ({
    ...initialSimpleTextDef
  }));

  const updateProperty = (key: keyof SimpleBannerDataDef, value: any) => {
    setData((prev) => ({
        ...prev,
        [key]: value
      })
    );
  };

  const updateText = debounce((v: string) => updateProperty('text', v), 300);

  useEffect(() => {
    props.onDataChanged(data);
    return;
  }, [data]);

  return (
    <Box padding='1rem'>
      <TextField
        style={{ width: '100%' }}
        className={`${classes.editor}`}
        variant='outlined'
        defaultValue={data.text || ''}
        label={'Text'}
        onChange={(e) => updateText(e.target.value)}
      />
    </Box>
  );
};
