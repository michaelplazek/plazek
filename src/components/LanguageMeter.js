import React, { Fragment } from "react";
import { Box, Meter, Text } from "grommet";
import uniqueId from "lodash/uniqueId";
import map from "lodash/fp/map";
import compose from "lodash/fp/compose";
import orderBy from "lodash/fp/orderBy";

const transformData = compose(
  orderBy("size", "desc"),
  map(item => ({
    ...item,
    value: item.size,
    label: item.name,
  }))
);

const LanguageMeter = ({ languages }) => {
  const values = transformData(languages);

  return (
    <Fragment>
      <Meter size="full" values={values} />
      <Box
        direction="row"
        justify="center"
        align="center"
        gap="medium"
        margin={{ top: "small" }}
      >
        {values.map(item => (
          <Box
            key={uniqueId()}
            direction="row"
            justify="center"
            align="center"
            gap="small"
          >
            <Box
              style={{
                background: item.color,
                width: "0.5em",
                height: "0.5em",
              }}
            />
            <Text>{item.name}</Text>
          </Box>
        ))}
      </Box>
    </Fragment>
  );
};

export default LanguageMeter;
