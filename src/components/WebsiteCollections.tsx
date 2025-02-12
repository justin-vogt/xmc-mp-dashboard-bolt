import React from 'react';
import { Box, Text, SimpleGrid, Stat, StatLabel, StatNumber, Progress } from '@chakra-ui/react';

const WebsiteCollections = () => {
  const collections = [
    {
      name: 'Marketing Sites',
      websites: 5,
      totalPages: 230,
    },
    {
      name: 'E-commerce',
      websites: 3,
      totalPages: 180,
    },
    {
      name: 'Blog Network',
      websites: 8,
      totalPages: 450,
    },
  ];

  return (
    <Box p={6} bg="white" borderRadius="lg" boxShadow="sm">
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Website Collections
      </Text>
      
      <SimpleGrid columns={1} spacing={6}>
        {collections.map((collection) => (
          <Box key={collection.name} p={4} borderWidth="1px" borderRadius="md">
            <Text fontWeight="semibold" mb={2}>
              {collection.name}
            </Text>
            <SimpleGrid columns={2} spacing={4}>
              <Stat>
                <StatLabel>Websites</StatLabel>
                <StatNumber>{collection.websites}</StatNumber>
              </Stat>
              <Stat>
                <StatLabel>Total Pages</StatLabel>
                <StatNumber>{collection.totalPages}</StatNumber>
              </Stat>
            </SimpleGrid>
            <Progress value={80} colorScheme="sitecore" mt={4} />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default WebsiteCollections;