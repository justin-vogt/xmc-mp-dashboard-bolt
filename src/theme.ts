import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    sitecore: {
      50: '#E5F3FF',
      100: '#B8E0FF',
      200: '#8ACDFF',
      300: '#5CB9FF',
      400: '#2EA6FF',
      500: '#0093FF',
      600: '#0074CC',
      700: '#005699',
      800: '#003766',
      900: '#001933',
    },
  },
  fonts: {
    heading: '"SourceSansPro", sans-serif',
    body: '"SourceSansPro", sans-serif',
  },
});

export default theme;