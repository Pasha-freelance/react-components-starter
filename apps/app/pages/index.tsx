import { Box } from '@material-ui/core';
import { useState } from 'react';
import { SimpleBannerDataDef } from '../shared/BannerData';
import SimpleBannerModifier from '../components/SimpleBannerModifier';
import SimpleBanner from '../components/SimpleBanner';

export const Index = () => {
  const [data, setData] = useState<SimpleBannerDataDef>({height: 500});
  const updateData = (params) => setData(prev => ({...prev,...params}))
  return (
    <Box>
      <SimpleBannerModifier onDataChanged={(d) => updateData(d)}/>
      <SimpleBanner data={data}/>
    </Box>
  );
};

export default Index;
