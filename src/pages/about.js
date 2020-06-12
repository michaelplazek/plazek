import React, { useContext } from "react";
import { Box, Grid, Heading, ResponsiveContext, Text } from "grommet";
import uniqueId from 'lodash/uniqueId';

import { withApp } from "../HOCs";
import PageContainer from "../components/PageContainer";
import face from '../images/face.jpg';
import { use, know, play } from '../constants/icons';
import { getImageStyle } from "../utils";

const About = () => {

  const size = useContext(ResponsiveContext);

  return (
    <PageContainer>
      <Box margin={{ top: 'medium' }}>
        <Heading margin='none' level={2}>About me</Heading>
        <Box
          direction={size === 'small' ? 'column' : 'row'}
          align='center'
        >
          <Box pad={{ vertical: 'small' }} basis='3/4'>
            <Text>
              Anomaly at the moon was the attitude of alignment, accelerated to a mysterious creature.
              It is an extraterrestrial love, sir. None of these deaths will be lost in nuclear fluxs like galaxies in resistances.
              Red alert. Reproduce, scotty. This coordinates has only been transfered by a carnivorous space suit.
              Ship-wide beauties lead to the ionic cannon. Carnivorous sensors, to the saucer section.
            </Text>
          </Box>
          <Box basis='1/4' align='center' pad={{ vertical: 'medium' }}>
            <Box
              round={size === 'small' ? 'none' : 'xlarge'}
              margin={size === 'small' ? { top: 'large' } : {}}
              background={{ image: `url(${face})` }}
              style={getImageStyle(size)}
            />
          </Box>
        </Box>
      </Box>
      <Grid
        columns='medium'
        gap={size === 'small' || size === 'medium-small' ? undefined : 'medium'}
      >
        { /* TODO: create a component for these fellas */}
        <Box>
          <Heading level={2}>Things I <b>use</b></Heading>
          <Box
            wrap={true}
            style={{ height: '256px' }}
            gap='small'
          >
            {
              use.map(({ name, icon }) => (
                <Box key={uniqueId()} direction='row' gap='small' align='center'>
                  {React.createElement(icon, { color: 'black' })}
                  <Text>{name}</Text>
                </Box>
              ))
            }
          </Box>
        </Box>
        <Box>
          <Heading level={2}>Things I <b>know</b></Heading>
          <Box
            wrap={true}
            style={{ height: '256px' }}
            gap='small'
          >
            {
              know.map(({ name, icon }) => (
                <Box key={uniqueId()} direction='row' gap='small' align='center'>
                  {React.createElement(icon, { color: 'black' })}
                  <Text>{name}</Text>
                </Box>
              ))
            }
          </Box>
        </Box>
        <Box>
          <Heading level={2}>Things I've <b>played with</b></Heading>
          <Box
            wrap={true}
            gap='small'

          >
            {
              play.map(({ name, icon }) => (
                <Box key={uniqueId()} direction='row' gap='small' align='center'>
                  {React.createElement(icon, { color: 'black' })}
                  <Text>{name}</Text>
                </Box>
              ))
            }
          </Box>
        </Box>
      </Grid>
    </PageContainer>
  );
};

export default withApp(About);
