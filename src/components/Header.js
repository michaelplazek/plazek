import React, { useContext, Fragment } from "react";
import { Link, useStaticQuery, graphql, navigate } from "gatsby"
import { Box, Menu, ResponsiveContext, Text } from "grommet";
import { Menu as MenuIcon } from "grommet-icons";
import uniqueId from 'lodash/uniqueId';
import get from 'lodash/get';

import DesktopLogo from "./DesktopLogo";
import MobileLogo from "./MobileLogo";

import { isActive, isSmall } from "../utils";

const linkStyle = () => ({
  textDecoration: 'none',
  color: 'black'
});

const Header = () => {

  const size = useContext(ResponsiveContext);
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          links {
            label
            path
          }
        }
      }
    }
  `);



  const links = get(data, 'site.siteMetadata.links');

  console.log(data);

  return (
    <Box
      style={{
        position: 'fixed',
        zIndex: 2
      }}
      fill='horizontal'
      height='xsmall'
      justify='between'
      direction='row'
      align='center'
    >
      {
        !isSmall(size) ? (
          <Fragment>
            <Box
              margin={{ vertical: 'medium', horizontal: 'small' }}
              onClick={() => navigate('/')}
            >
              <DesktopLogo />
            </Box>
            <Box
              margin={{ vertical: 'medium', horizontal: 'large' }}
              direction='row'
              gap='medium'
            >
              {
                links.map(item => (
                  <Text>
                    <Link
                      style={linkStyle()}
                      key={uniqueId()}
                      to={item.path}
                      getProps={isActive}

                    >
                      {item.label}
                    </Link>
                  </Text>
                ))
              }
            </Box>
          </Fragment>
        ) : (
          <Fragment>
            <Box margin={{ left: 'large' }}>
              <Menu
                icon={<MenuIcon size='large' color='black' />}
                items={
                  links.map(link => ({
                    ...link,
                    label: <Box margin={{ horizontal: 'medium', vertical: 'small' }}><Text>{link.label}</Text></Box>,
                    onClick: () => navigate(link.path)
                  }))
                }
                size='large'
              />
            </Box>
            <Box onClick={() => navigate('/')}>
              <MobileLogo />
            </Box>
          </Fragment>
        )
      }
    </Box>
  );
};

export default Header;
