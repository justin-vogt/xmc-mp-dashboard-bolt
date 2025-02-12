import React from 'react';
import { ChakraProvider, Container, SimpleGrid, Box } from '@chakra-ui/react';
import theme from './theme';
import PublishInfo from './components/PublishInfo';
import WebsiteCollections from './components/WebsiteCollections';
import MediaLibrary from './components/MediaLibrary';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh" bg="gray.50" py={8}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
            <PublishInfo />
            <MediaLibrary />
            <Box gridColumn={{ lg: "span 2" }}>
              <WebsiteCollections />
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;