import React from 'react';
import { Box, Text, Stat, StatLabel, StatNumber, StatGroup, Badge, Flex, Icon } from '@chakra-ui/react';
import { Clock, User, Settings } from 'lucide-react';

const PublishInfo = () => {
  return (
    <Box p={6} bg="white" borderRadius="lg" boxShadow="sm">
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Latest Publish Job
      </Text>
      
      <Flex gap={4} mb={4}>
        <Flex align="center" gap={2}>
          <Icon as={User} />
          <Text>John Doe</Text>
        </Flex>
        <Flex align="center" gap={2}>
          <Icon as={Clock} />
          <Text>March 1, 2024 14:30</Text>
        </Flex>
        <Flex align="center" gap={2}>
          <Icon as={Settings} />
          <Text>Full Site Publish</Text>
        </Flex>
      </Flex>

      <StatGroup>
        <Stat>
          <StatLabel>Published</StatLabel>
          <StatNumber>245</StatNumber>
          <Badge colorScheme="green">Success</Badge>
        </Stat>
        <Stat>
          <StatLabel>Skipped</StatLabel>
          <StatNumber>32</StatNumber>
          <Badge colorScheme="yellow">Warning</Badge>
        </Stat>
        <Stat>
          <StatLabel>Failed</StatLabel>
          <StatNumber>3</StatNumber>
          <Badge colorScheme="red">Error</Badge>
        </Stat>
      </StatGroup>
    </Box>
  );
};

export default PublishInfo;