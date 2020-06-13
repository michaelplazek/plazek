import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { Box, Grid } from "grommet";

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
  },
  {
    name: 'plazekproperties',
    symbol: 'PP',
    site: 'https://www.plazekproperties.com',
    type: 'site',
  },
  {
    name: 'mocha-grommet-reporter',
    symbol: 'MGR',
    site: 'https://www.npmjs.com/package/mocha-grommet-reporter',
    type: 'npm',
  },
  {
    name: 'SNAKE',
    symbol: 'S',
    type: 'repo',
  },
  {
    name: 'plazek',
    symbol: 'ME',
    type: 'repo',
  },
  {
    name: 'on-track',
    symbol: 'OT',
    type: 'repo',
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

  console.log(repos);

  return (
    <PageContainer>
      <Box
        fill={true}
      >
        <Grid
          gap='medium'
          columns='medium'
        >
          {repos.map(repo => <WorkWidget key={uniqueId()} repo={repo} />)}
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default withApp(Work);
