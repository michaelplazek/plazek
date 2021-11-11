import React, { useContext, useState } from "react";
import posed from "react-pose";

import { ResponsiveContext, Heading, Box } from "grommet";

import { GRADIENT, INVERSE } from "../constants/colors";
import Fab from "../components/Fab";
import { isSmall } from "../utils";
import TerminalWrapper from "../components/TerminalWrapper";
import Seo from "../components/Seo";

const title = "Front End";

const AppearTransition = posed.div({
  visible: { opacity: 1, transition: { duration: 1000 } },
  hidden: { opacity: 0, transition: { duration: 1000 } },
});

const Home = () => {
  const size = useContext(ResponsiveContext);
  const [hasTerminal, setTerminal] = useState(false);

  return (
    <Box fill="vertical" style={GRADIENT}>
      <Seo title="Home" />
      <Box fill="vertical" style={INVERSE} align="center" justify="center">
        <Box
          align="center"
          style={hasTerminal ? { position: "relative", bottom: "20vh" } : {}}
          direction={!isSmall(size) ? "row" : "column"}
          gap={!isSmall(size) ? "large" : "none"}
        >
          <Box>
            <AppearTransition pose={!hasTerminal ? "visible" : "hidden"}>
              <Heading margin="none" size="xlarge">
                {title}
              </Heading>
            </AppearTransition>
            {((size === "small" && !hasTerminal) || size !== "small") && (
              <Heading margin="none" size="xlarge">
                {title}
              </Heading>
            )}
            <AppearTransition pose={!hasTerminal ? "visible" : "hidden"}>
              <Heading margin="none" size="xlarge">
                {title}
              </Heading>
            </AppearTransition>
          </Box>
          <Box
            style={(() =>
              size !== "small" && !hasTerminal
                ? {
                    position: "relative",
                    top: "1.55em",
                  }
                : {
                    position: "absolute",
                    top: "70vh",
                  })()}
          >
            <Heading margin="none" level={2}>
              DEVELOPER
            </Heading>
          </Box>
        </Box>
      </Box>
      <Fab onClick={() => setTerminal(!hasTerminal)} />
      {hasTerminal && (
        <Box
          fill="horizontal"
          style={{
            position: "absolute",
            bottom: "0px",
            width: "100vw",
          }}
        >
          {size === "small" && (
            <Box
              justify="center"
              margin={{ vertical: "large" }}
              direction="row"
              gap="small"
              align="center"
            >
              <Heading color="black" margin="none" size="large">
                {title}
              </Heading>
            </Box>
          )}

          <TerminalWrapper setTerminal={setTerminal} />
        </Box>
      )}
    </Box>
  );
};

export default Home;
