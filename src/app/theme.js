import { grommet } from 'grommet';
import merge from 'lodash/merge'

const theme = {
  global: {
    font: {
      family: 'Roboto',
    },
    colors: {
      'royal-blue': '#2194f3'
    },
    breakpoints: {
      "small": {
        "value": 600,
        "borderSize": {
          "xsmall": "1px",
          "small": "2px",
          "medium": "4px",
          "large": "6px",
          "xlarge": "12px"
        },
        "edgeSize": {
          "none": "0px",
          "hair": "1px",
          "xxsmall": "2px",
          "xsmall": "3px",
          "small": "6px",
          "medium": "12px",
          "large": "24px",
          "xlarge": "48px"
        },
        "size": {
          "xxsmall": "24px",
          "xsmall": "48px",
          "small": "96px",
          "medium": "192px",
          "large": "384px",
          "xlarge": "768px",
          "full": "100%"
        }
      },
      "medium-small": { "value": 900 },
      "medium": {"value": 1536},
      "large": {}
    }
  },
  heading: {
    level: {
      "1": {
        "medium": {
          "maxWidth": "2000px"
        },
      },
      "2": {
        "small": {
          "maxWidth": "800px"
        },
      }
    }
  },
};

export default merge(theme, grommet)
