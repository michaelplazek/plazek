import React, { useContext, Fragment } from "react";
import { Link, useStaticQuery, graphql, navigate } from "gatsby"
import { Box, Menu, ResponsiveContext, Text } from "grommet";
import { Menu as MenuIcon } from "grommet-icons";

import uniqueId from 'lodash/uniqueId';
import get from 'lodash/get';

import DesktopLogo from "../svgs/DesktopLogo";
import MobileLogo from "../svgs/MobileLogo";

import { isActive, isSmall } from "../utils";
import resume from '../images/plazek_resume.pdf';

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

  return (
    <Box
      style={{
        position: 'fixed',
        zIndex: 2
      }}
      fill='horizontal'
      height='xsmall'
      justify='between'
      // background='white'
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
                  <Text key={uniqueId()}>
                    <Link
                      style={linkStyle()}
                      to={item.path}
                      partiallyActive={true}
                      getProps={isActive}
                      replace

                    >
                      {item.label}
                    </Link>
                  </Text>
                ))
              }
              <a style={linkStyle()} href={resume} download={true}>Resume</a>
            </Box>
          </Fragment>
        ) : (
          <Fragment>
            <Box margin={{ left: 'large' }}>
              <Menu
                icon={<MenuIcon size='large' color='white' />}
                items={
                  links.map(link => ({
                    ...link,
                    key: uniqueId(),
                    label: (
                      <Box margin={{ horizontal: 'medium', vertical: 'small' }}>
                        <Text>
                          <Link
                            style={linkStyle()}
                            to={link.path}
                            partiallyActive={true}
                            getProps={isActive}
                            replace
                          >
                            {link.label}
                          </Link>
                        </Text>
                      </Box>
                    ),
                  })).concat({
                    key: uniqueId(),
                    label: (
                      <Box margin={{ horizontal: 'medium', vertical: 'small' }}>
                        <a style={linkStyle()} href={resume} download={true}>
                          Resume
                        </a>
                      </Box>)
                  })
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
