import React from 'react';
import { ChakraProvider, Container, SimpleGrid, Box, Heading, Text, VStack } from '@chakra-ui/react';
import theme from './theme';
import PublishInfo from './components/PublishInfo';
import WebsiteCollections from './components/WebsiteCollections';
import MediaLibrary from './components/MediaLibrary';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh" bg="gray.50" py={8}>
        <Container maxW="container.xl">
          <VStack spacing={6} align="stretch" mb={8}>
            <Box>
              <Heading as="h1" size="xl" color="sitecore.600" mb={2}>
                XM Cloud - Bird's Eye View
              </Heading>
              <Text fontSize="lg" color="gray.600">
                Overview of your Sitecore XM Cloud environments
              </Text>
            </Box>
          </VStack>
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