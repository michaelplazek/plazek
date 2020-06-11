import React, { useContext } from "react";
import { Box, Grid, Heading, ResponsiveContext, Text } from "grommet";

import {
  DiReact as ReactIcon,
  DiJavascript1 as JsIcon,
  DiAws as AwsIcon,
  DiCss3Full as CssIcon
} from 'react-icons/di';
import {
  RiGatsbyLine as GatsbyIcon,
} from 'react-icons/ri';
import {
  GrGraphQl as GraphQlIcon,
} from 'react-icons/gr';
import {
  FaJava as JavaIcon,
  FaNodeJs as NodeIcon,
  FaDocker as DockerIcon
} from 'react-icons/fa';
import {
  GrGrommet as GrommetIcon,
} from 'react-icons/gr';
import {
  FiFigma as FigmaIcon,
} from 'react-icons/fi';

import { withApp } from "../HOCs";
import PageContainer from "../components/PageContainer";
import face from '../images/face.jpg';
import ReduxIcon from "../svgs/icons/Redux";
import WebpackIcon from "../svgs/icons/Webpack";
import GolangIcon from "../svgs/icons/Golang";
import KubernetesIcon from "../svgs/icons/Kubernetes";
import BabelIcon from "../svgs/icons/Babel";
import TerraformIcon from "../svgs/icons/Terraform";
import LambdaIcon from "../svgs/icons/Lambda";
import NetlifyIcon from "../svgs/icons/Netlify";
import FramerIcon from "../svgs/icons/Framer";

const getImageStyle = size => {
  switch(size) {
    case "small":
      return { width: '200px', height: '200px' };
    case "medium-small":
      return { width: '100px', height: '100px' };
    case "medium":
      return { width: '150px', height: '150px' }
  }
};

const use = [
  {
    name: 'React',
    icon: ReactIcon
  },
  {
    name: 'Redux',
    icon: ReduxIcon
  },
  {
    name: 'Gatsby',
    icon: GatsbyIcon
  },
  {
    name: 'JavaScript',
    icon: JsIcon
  },
  {
    name: 'Grommet',
    icon: GrommetIcon
  },
  {
    name: 'AWS',
    icon: AwsIcon
  },
  {
    name: 'GraphQL',
    icon: GraphQlIcon
  },
  {
    name: 'Webpack',
    icon: WebpackIcon
  },
  {
    name: 'CSS',
    icon: CssIcon
  },
  {
    name: 'Babel',
    icon: BabelIcon
  },
  {
    name: 'Node',
    icon: NodeIcon
  },
  {
    name: 'Terraform',
    icon: TerraformIcon
  },
  {
    name: 'Serverless',
    icon: LambdaIcon
  },
  {
    name: 'Netlify',
    icon: NetlifyIcon
  },
];

const know = [
  {
    name: 'Java',
    icon: JavaIcon
  },
  {
    name: 'Go',
    icon: GolangIcon
  },
  {
    name: 'Kubernetes',
    icon: KubernetesIcon
  },
  {
    name: 'Docker',
    icon: DockerIcon
  },
  {
    name: 'Figma',
    icon: FigmaIcon
  },
];

const play = [
  {
    name: 'Framer',
    icon: FramerIcon
  },
];

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
        // rows='medium'
        columns='medium'
      >
        <Box>
          <Heading level={2}>Things I <b>use</b></Heading>
          <Box
            wrap={true}
            height='small'
          >
            {
              use.map(({ name, icon }) => (
                <Box direction='row' gap='small' align='center'>
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
            height='small'
          >
            {
              know.map(({ name, icon }) => (
                <Box direction='row' gap='small' align='center'>
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
            height='small'
          >
            {
              play.map(({ name, icon }) => (
                <Box direction='row' gap='small' align='center'>
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
