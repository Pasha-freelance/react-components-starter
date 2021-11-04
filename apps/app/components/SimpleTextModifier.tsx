import { Box, debounce, makeStyles, TextField } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { SimpleTextDef } from './SimpleText';
import { SimpleBannerData } from '../shared/BannerData';

const useStyles = makeStyles((theme) => ({
  editor: {
    height: 'auto',
    resize: 'none',
    border: 'none',
  },
}));

const initialSimpleTextDef: SimpleTextDef = {
  text: '',
};

export const SimpleTextModifier = (props: {
  onDataChanged: (d: SimpleBannerData) => void;
}) => {
  const classes = useStyles();
  const [data, setData] = useState<SimpleTextDef>(() => ({
    ...initialSimpleTextDef,
  }));

  const updateProperty = (key: keyof SimpleBannerData, value: any) => {
    setData((prev) => {
      const updated = {
        ...prev,
        [key]: value,
      };
      props.onDataChanged(updated);
      return updated;
    });
  };

  const updateText = debounce((v: string) => updateProperty('text', v), 300);

  useEffect(() => {
    props.onDataChanged(data);
    return;
  }, [data]);

  return (
    <Box padding="1rem">
      <TextField
        style={{ width: '100%' }}
        className={`${classes.editor}`}
        variant="outlined"
        defaultValue={data.text || ''}
        label={'Text'}
        onChange={(e) => updateText(e.target.value)}
      />
    </Box>
  );
};
