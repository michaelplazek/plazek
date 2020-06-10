import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import find from 'lodash/find';

import get from 'lodash/fp/get';
import compose from 'lodash/fp/compose';
import map from 'lodash/fp/map';
import filter from 'lodash/fp/filter';

import { withApp } from "../HOCs";
import PageContainer from "../components/PageContainer";
import WorkWidget from "../components/WorkWidget";
import { Grid } from "grommet";

const displayRepos = [
  {
    name: 'blockparty',
    symbol: 'BP',
  },
  {
    name: 'plazekproperties',
    symbol: 'PP',
  },
  {
    name: 'mocha-grommet-reporter',
    symbol: 'MGR',
  },
  {
    name: 'SNAKE',
    symbol: 'S',
  },
];

const getRepositories = compose(
  map(item => ({ ...item, symbol: get('symbol')(find(displayRepos, ['name', item.name]))  })),
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
        gap='medium'
        rows='small'
        columns='small'
      >
        {repos.map(repo => <WorkWidget repo={repo} />)}
      </Grid>
    </PageContainer>
  );
};

export default withApp(Work);
