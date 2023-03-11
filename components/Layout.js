import Head from 'next/head';
import { Box, Flex } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';

function Layout({ children, noHeader, profile, activityBtn, painel }) {
  return (
    <Box>
      <Head>
        <title>TCC Startup</title>
        <meta
          name="description"
          content="Empoderar gente para transformar realidades: acessibilidade, sustentabilidade e comunicação."
        />
        <meta property="og:title" content="Inova" />
        <meta
          property="og:description"
          content="Inova - Empoderar gente para transformar realidades: acessibilidade, sustentabilidade e comunicação."
        />
        <meta property="og:image" content="screenshot.png" />
        <meta property="og:url" content="https://inova.uaiinovei.com.br/" />
      </Head>
      <Box
        id="main"
        backgroundColor="var(--wine)"
        color="var(--white)"
        overflow="hidden"
        zIndex="1"
      >
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <Flex flexDirection="column" w="100%" zIndex="888">
          {noHeader ? null : (
            <Header
              profile={profile}
              activityBtn={activityBtn}
              painel={painel}
            />
          )}
          {children}
          <Footer />
        </Flex>
      </Box>
    </Box>
  );
}

export default Layout;
