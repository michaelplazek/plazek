import React, { useContext } from "react";
import { Anchor, Box, Grid, Heading, ResponsiveContext, Text } from "grommet";
import uniqueId from 'lodash/uniqueId';

import {
  FaLinkedin as LinkedInIcon,
  FaTwitterSquare as TwitterIcon
} from 'react-icons/fa'
import {
  DiGithubBadge as GithubIcon
} from 'react-icons/di'
import {
  AiOutlineMail as EmailIcon,
} from 'react-icons/ai'

import { withApp } from "../HOCs";
import PageContainer from "../components/PageContainer";
import face from '../images/face.jpg';
import { use, know, play } from '../constants/icons';
import { getImageStyle } from "../utils";

import Timeline from "../components/Timeline";

const contact = [
  {
    href: 'https://github.com/michaelplazek',
    icon: GithubIcon,
  },
  {
    icon: LinkedInIcon,
    href: 'https://www.linkedin.com/in/michael-plazek-8559b8aa/'
  },
  {
    icon: TwitterIcon,
    href: 'https://twitter.com/PlazekaaS'
  },
  {
    icon: EmailIcon,
    href: 'mailto:michael.plazek91@gmail.com'
  },
];

const About = () => {

  const size = useContext(ResponsiveContext);

  return (
    <PageContainer>
      <Box margin={{ vertical: 'medium' }}>
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
            <Box
              direction='row'
              gap='medium'
              margin={{ top: size === 'small' ? 'large' : 'medium' }}
              align='center'
              justify='center'
            >
              {contact.map(item => (
                <Anchor
                  icon={React.createElement(item.icon, { size: '1.5em' })}
                  href={item.href}
                  target='_blank'
                  color='dark-1'
                  key={uniqueId()}
                />
              ))}
            </Box>
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
        gap="large"
      >
        { /* TODO: create a component for these fellas */}
        <Box
          background='light-1'
          round={true}
          pad='medium'
        >
          <Heading
            margin={{
              top: 'small',
              left: 'small',
              bottom: 'medium'
            }}
            level={2}
          >
            Things I <b>use</b>
          </Heading>
          <Box
            wrap={true}
            style={{ height: '256px' }}
            gap='medium'
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
        <Box
          background='light-1'
          round={true}
          pad='medium'
        >
          <Heading
            margin={{
              top: 'small',
              left: 'small',
              bottom: 'medium'
            }}
            level={2}
          >
            Things I <b>know</b>
          </Heading>
          <Box
            wrap={true}
            style={{ height: '256px' }}
            gap='medium'
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
        <Box
          background='light-1'
          round={true}
          pad='medium'
        >
          <Heading
            margin={{
              top: 'small',
              left: 'small',
              bottom: 'medium'
            }}
            level={2}
          >
            Things I've <b>played with</b>
          </Heading>
          <Box
            wrap={true}
            style={{ height: '256px' }}
            gap='medium'
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
      <Box
        background='light-1'
        margin={{ top: 'large' }}
        pad='medium'
        round={true}
      >
        <Box
          direction='row'
          justify='between'
          align='center'
          margin={{ bottom: 'small', horizontal: 'medium' }}
        >
          <Heading margin='none' level={2}>My Timeline</Heading>
          <Heading level={3} size='small'>2014 - Present</Heading>
        </Box>
      <Timeline />
      </Box>
    </PageContainer>
  );
};

export default withApp(About);
