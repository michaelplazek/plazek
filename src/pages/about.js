import React from "react";
import { Box, Heading, Text } from "grommet";

import { withApp } from "../HOCs";
import PageContainer from "../components/PageContainer";

import face from '../images/face.jpg';

const About = () => {
  return (
    <PageContainer>
      <Heading margin={{ bottom: 'none' }} level={2}>About me</Heading>
      <Box
        direction='row'
        align='center'
      >
        <Box pad={{ vertical: 'small' }} basis='2/3'>
          <Text>
            Anomaly at the moon was the attitude of alignment, accelerated to a mysterious creature.
            It is an extraterrestrial love, sir. None of these deaths will be lost in nuclear fluxs like galaxies in resistances.
            Red alert. Reproduce, scotty. This coordinates has only been transfered by a carnivorous space suit.
          </Text>
        </Box>
        <Box basis='1/3' pad={{ left: 'medium' }}>
          <Box
            round='xxlarge'
            background={{ image: `url(${face})` }}
            style={{ width: '150px', height: '150px' }}
          />
        </Box>
      </Box>
    </PageContainer>
  );
};

export default withApp(About);
