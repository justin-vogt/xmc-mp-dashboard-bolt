import React from 'react';
import { Box, Text, SimpleGrid, Stat, StatLabel, StatNumber, Icon, Flex } from '@chakra-ui/react';
import { Image, FileText, Film, Music } from 'lucide-react';

const MediaLibrary = () => {
  return (
    <Box p={6} bg="white" borderRadius="lg" boxShadow="sm">
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Media Library Assets
      </Text>
      
      <SimpleGrid columns={2} spacing={6}>
        <Box p={4} borderWidth="1px" borderRadius="md">
          <Flex align="center" gap={2} mb={2}>
            <Icon as={Image} />
            <Text fontWeight="semibold">Images</Text>
          </Flex>
          <Stat>
            <StatNumber>1,234</StatNumber>
          </Stat>
        </Box>
        
        <Box p={4} borderWidth="1px" borderRadius="md">
          <Flex align="center" gap={2} mb={2}>
            <Icon as={FileText} />
            <Text fontWeight="semibold">Documents</Text>
          </Flex>
          <Stat>
            <StatNumber>567</StatNumber>
          </Stat>
        </Box>
        
        <Box p={4} borderWidth="1px" borderRadius="md">
          <Flex align="center" gap={2} mb={2}>
            <Icon as={Film} />
            <Text fontWeight="semibold">Videos</Text>
          </Flex>
          <Stat>
            <StatNumber>89</StatNumber>
          </Stat>
        </Box>
        
        <Box p={4} borderWidth="1px" borderRadius="md">
          <Flex align="center" gap={2} mb={2}>
            <Icon as={Music} />
            <Text fontWeight="semibold">Audio</Text>
          </Flex>
          <Stat>
            <StatNumber>45</StatNumber>
          </Stat>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default MediaLibrary;