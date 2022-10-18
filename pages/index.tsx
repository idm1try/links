import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { TbBrandGithub, TbBrandTwitter, TbMail } from 'react-icons/tb';

export default function Home() {
  return (
    <Center py={20}>
      <Box
        maxW='270px'
        w='full'
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow='2xl'
        rounded='md'
        overflow='hidden'
      >
        <Image
          alt='bg'
          h='120px'
          w='full'
          src='https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
          objectFit='cover'
        />
        <Flex justify='center' mt={-12}>
          <Avatar src='/avatar.webp' size='xl' />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align='center'>
            <Heading fontSize='2xl' fontWeight={500} fontFamily='body'>
              idm1try
            </Heading>
            <Text color='gray.500'>Frontend Developer</Text>
          </Stack>
          <Button
            as='a'
            href='https://github.com/idm1try'
            w='full'
            mt={8}
            bg={useColorModeValue('#151f21', 'gray.900')}
            color='white'
            rounded='lg'
            leftIcon={<TbBrandGithub />}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}
          >
            GitHub
          </Button>
          <Button
            as='a'
            href='https://twitter.com/idm1try'
            w='full'
            mt={3}
            bg={useColorModeValue('#151f21', 'gray.900')}
            color='white'
            rounded='lg'
            leftIcon={<TbBrandTwitter />}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}
          >
            Twitter
          </Button>
          <Button
            as='a'
            href='mailto:admin@idm1try.ru'
            w='full'
            mt={3}
            bg={useColorModeValue('#151f21', 'gray.900')}
            color='white'
            rounded='lg'
            leftIcon={<TbMail />}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}
          >
            Mail
          </Button>
        </Box>
      </Box>
    </Center>
  );
}
