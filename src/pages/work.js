import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import find from 'lodash/find';
import uniqueId from 'lodash/uniqueId';

import get from 'lodash/fp/get';
import compose from 'lodash/fp/compose';
import map from 'lodash/fp/map';
import filter from 'lodash/fp/filter';

import { withApp } from "../HOCs";
import PageContainer from "../components/PageContainer";
import WorkWidget from "../components/WorkWidget";

import { Grid } from "grommet";
import {
  DiJavascript1 as JS,
  DiReact as ReactJs,
  DiHtml5 as Html5,
  DiCss3Full as Css3,
  DiJava as Java
} from 'react-icons/di'

const iconMap = {
  javascript: [JS, ReactJs],
  html: [Html5],
  css: [Css3],
  java: [Java]
};

const displayRepos = [
  {
    name: 'blockparty',
    symbol: 'BP',
    website: 'https://blockparty.global'
  },
  {
    name: 'plazekproperties',
    symbol: 'PP',
    website: 'https://www.plazekproperties.com'
  },
  {
    name: 'mocha-grommet-reporter',
    symbol: 'MGR',
  },
  {
    name: 'SNAKE',
    symbol: 'S',
  },
  {
    name: 'plazek',
    symbol: 'ME',
  },
  {
    name: 'on-track',
    symbol: 'OT',
  },
];

const getLanguages = compose(
  map(item => ({ name: item.node.name, icons: iconMap[item.node.name.toLowerCase()] })),
  get('edges')
);

const getRepositories = compose(
  map(item => {
    const record = find(displayRepos, ['name', item.name]);
    return {
      ...item,
      ...record,
      languages: getLanguages(item.languages),
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
                    }
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
      <Grid
        style={{
          transform: 'translateY(100px)',
        }}
        gap='medium'
        // rows='small'
        columns='small'
      >
        {repos.map(repo => <WorkWidget key={uniqueId()} repo={repo} />)}
      </Grid>
    </PageContainer>
  );
};

export default withApp(Work);
