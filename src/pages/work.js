import React, { useContext } from "react";
import { graphql, useStaticQuery } from "gatsby";

import { Anchor, Box, Grid, Heading, ResponsiveContext } from "grommet";

import {
  DiJavascript1 as JS,
  DiReact as ReactJs,
  DiHtml5 as Html5,
  DiCss3Full as Css3,
  DiJava as Java,
  DiNpm as NpmIcon,
  DiGithubBadge as GithubIcon,
} from 'react-icons/di'

import {
  FiExternalLink as LinkIcon,
} from 'react-icons/fi';

import find from 'lodash/find';
import uniqueId from 'lodash/uniqueId';

import get from 'lodash/fp/get';
import compose from 'lodash/fp/compose';
import map from 'lodash/fp/map';
import filter from 'lodash/fp/filter';

import { withApp } from "../HOCs";
import PageContainer from "../components/PageContainer";
import WorkWidget from "../components/WorkWidget";

const languageIconMap = {
  javascript: [JS, ReactJs],
  html: [Html5],
  css: [Css3],
  java: [Java]
};

const typeIconMap = {
  site: LinkIcon,
  npm: NpmIcon,
  repo: GithubIcon,
};

const displayRepos = [
  {
    name: 'blockparty',
    symbol: 'BP',
    site: 'https://blockparty.global',
    type: 'site',
    description: 'Peer-to-peer cryptocurrency forum for exchanging cash for crypto. Avoid long wait times, transaction fees, and remain 100% anonymous. Mobile only.',
  },
  {
    name: 'plazekproperties',
    symbol: 'PP',
    site: 'https://www.plazekproperties.com',
    type: 'site',
    description: 'Real estate site built for Plazek Properties. Quickly search for available units and view pictures of properties.'
  },
  {
    name: 'mocha-grommet-reporter',
    symbol: 'MGR',
    site: 'https://www.npmjs.com/package/mocha-grommet-reporter',
    type: 'npm',
    description: 'Custom web reporter plugin for the Mocha test framework. Designed to give visibility into the unit test metrics of various teams.',
  },
  {
    name: 'SNAKE',
    symbol: 'S',
    type: 'repo',
    description: 'Classic Snake game built in MIPS Assembly language.'
  },
  {
    name: 'plazek',
    symbol: 'ME',
    type: 'repo',
    description: 'The code for this website! Built using Gatsby and deployed using Netlify.'
  },
  {
    name: 'on-track',
    symbol: 'OT',
    type: 'repo',
    description: 'High definition train monitoring system and simulator built for use by the PAAC.'
  },
];

const getLanguages = compose(
  map(item => ({
    color: item.node.color,
    size: item.size,
    name: item.node.name,
    icons: languageIconMap[item.node.name.toLowerCase()]
  })),
  get('edges')
);

const getRepositories = compose(
  map(item => {
    const record = find(displayRepos, ['name', item.name]);
    return {
      ...item,
      ...record,
      icon: typeIconMap[record.type],
      languages: getLanguages(item.languages) ,
    }
  }),
  filter(item => displayRepos.map(item => item.name).includes(item.name)),
  map(item => ({ ...item.node })),
  get('github.viewer.repositories.edges')
);

const Work = () => {

  const size = useContext(ResponsiveContext);
  const data = useStaticQuery(graphql`
    query GitHubQuery {
      github {
        viewer {
          repositories(last: 20, affiliations: OWNER) {
            edges {
              node {
                id
                name
                url
                updatedAt
                createdAt
                languages(last: 20) {
                  edges {
                    node {
                      id
                      name
                      color
                    }
                    size
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const repos = getRepositories(data);

  return (
    <PageContainer title="Work">
      <Box
        fill={true}
        pad={{ vertical: 'small', horizontal: 'small' }}
      >
        <Heading level={2}>Some things I've built on the side...</Heading>
        <Grid
          gap='medium'
          columns={size !== 'small' ? 'medium' : undefined}
        >
          {repos.map(repo => <WorkWidget key={uniqueId()} repo={repo} />)}
        </Grid>
        <Box
          align='center'
          justify='center'
          margin={{ top: 'large' }}
        >
          <Anchor
            color='black'
            href='https://github.com/michaelplazek'
            icon={<GithubIcon size='1.5em' />}
            label='Visit my Github to see more work'
            target='_blank'
          />
        </Box>
      </Box>
    </PageContainer>
  );
};

export default withApp(Work);
