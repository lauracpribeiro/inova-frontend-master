/* eslint-disable react/no-danger */
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Container, Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
// import ReactMarkdown from 'react-markdown';
import Short from '@components/Short';
import api from '@services/api';
import umCompleta from '@content/completa/um.md';
import doisCompleta from '@content/completa/dois.md';
import tresCompleta from '@content/completa/tres.md';
import quatroCompleta from '@content/completa/quatro.md';

import umMaratona from '@content/maratona/um.md';
import doisMaratona from '@content/maratona/dois.md';
import tresMaratona from '@content/maratona/tres.md';
import quatroMaratona from '@content/maratona/quatro.md';

import Layout from '@components/Layout';
import { getAPI } from '@services/axios';

export default function BlogPost({ trail }) {
  const Router = useRouter();
  const { trailId, stage } = Router.query;

  useEffect(() => {
    let isMounted = true;
    const getData = async () => {
      // eslint-disable-next-line consistent-return
      await api.get(`game-responses/${trailId}`).then((res) => {
        const page = Number(stage);
        if (page === 1) {
          return null;
        }
        if (!res.data[page - 1]) {
          // eslint-disable-next-line no-return-assign
          window.location.href = '/minha-conta';
        }
      });
    };

    if (isMounted) {
      getData();
    }
    return () => {
      isMounted = false;
    };
  }, [trailId]);

  function createMarkupCompleta(content) {
    if (content === '1') {
      return {
        __html: umCompleta,
      };
    }
    if (content === '2') {
      return {
        __html: doisCompleta,
      };
    }
    if (content === '3') {
      return {
        __html: tresCompleta,
      };
    }

    return {
      __html: quatroCompleta,
    };
  }

  function createMarkupMaratona(content) {
    if (content === '1') {
      return {
        __html: umMaratona,
      };
    }
    if (content === '2') {
      return {
        __html: doisMaratona,
      };
    }
    if (content === '3') {
      return {
        __html: tresMaratona,
      };
    }

    return {
      __html: quatroMaratona,
    };
  }

  return (
    <>
      <Layout profile>
        <Box w="100%" maxW="100%" zIndex="900" pb="5rem">
          <Container
            mt="3rem"
            bgColor="white"
            color="black"
            maxW="800px"
            py="40px"
            px="40px"
            borderRadius="4px"
          >
            <Box mb="30px">
              ←{' '}
              <Link href={`/trilha/${trailId}`}>
                <a>Voltar</a>
              </Link>
            </Box>
            <Text>Planeta {stage}</Text>
            <Box>
              {trail.type === 'maratona' ? (
                <div
                  className="archive"
                  dangerouslySetInnerHTML={createMarkupMaratona(stage)}
                />
              ) : (
                <div
                  className="archive"
                  dangerouslySetInnerHTML={createMarkupCompleta(stage)}
                />
              )}
              <Short stage={stage} trailId={trailId} />
            </Box>
          </Container>
        </Box>
      </Layout>
    </>
  );
}

export async function getServerSideProps(ctx) {
  try {
    const apiServer = getAPI(ctx);
    const { trailId, stage } = ctx.query;

    const res = await apiServer.get(`game-responses/${trailId}`);
    const trail = await apiServer.get(`trail/${trailId}`);

    const page = Number(stage);

    if (page === 1) {
      return {
        props: {
          trail: trail.data,
        },
      };
    }
    if (!res.data[page - 1]) {
      return {
        redirect: {
          destination: '/minha-conta',
          permanent: false,
        },
      };
    }

    return {
      props: { trail: trail.data },
    };
  } catch (err) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
}
