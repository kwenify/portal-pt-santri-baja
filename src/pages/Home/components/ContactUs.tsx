import {
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    Icon,
} from '@chakra-ui/react';
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdOutlineEmail,
} from 'react-icons/md';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BsPerson } from 'react-icons/bs';

export default function ContactUs() {
    return (
        <Flex 
            bg="green.100"
            gap={{ base: 20, sm: 3, md: 5, lg: 20 }} 
            justifyContent='space-around'
            borderRadius="lg"
            padding='50px 20px'
            margin='50px 0px'
            direction={{ base: 'column', md: 'row'}}
        >
            <Flex direction='column'>
                <Heading color='black'>Hubungi</Heading>
                <Text mt={{ sm: 3, md: 3, lg: 5 }} color='black'>
                    Isi formulir untuk menghubungi
                </Text>
                <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Button
                            size="md"
                            height="48px"
                            variant="ghost"
                            color='black'
                            _hover={{}}
                            leftIcon={<Icon as={MdPhone} color="primary" size="20px" />}>
                            +62 8534 3434 294
                        </Button>
                        <Button
                            size="md"
                            height="48px"
                            variant="ghost"
                            color='black'
                            _hover={{}}
                            leftIcon={<Icon as={MdEmail} color="primary" size="20px" />}>
                            team@santribaja.com
                        </Button>
                        <Button
                            size="md"
                            height="48px"
                            variant="ghost"
                            color='black'
                            _hover={{}}
                            leftIcon={<Icon as={MdLocationOn} color="primary" size="20px" />}>
                            Pondok Indah
                        </Button>
                    </VStack>
                </Box>
                <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start">
                    <IconButton
                        aria-label="twitter"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<FaTwitter size="28px" />}
                    />
                    <IconButton
                        aria-label="youtube"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<FaYoutube size="28px" />}
                    />
                    <IconButton
                        aria-label="instagram"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<FaInstagram size="28px" />}
                    />
                </HStack>
            </Flex>
            <VStack 
                padding='20px'
                color="#0B0E3F" 
                bg="white" 
                borderRadius="lg" 
                spacing={5}
            >
                <FormControl id="name">
                    <FormLabel>Nama</FormLabel>
                    <InputGroup borderColor="#E0E1E7">
                        <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                        />
                        <Input type="text" size="md" />
                    </InputGroup>
                </FormControl>
                <FormControl id="name">
                    <FormLabel>Email</FormLabel>
                    <InputGroup borderColor="#E0E1E7">
                        <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                        />
                        <Input type="text" size="md" />
                    </InputGroup>
                </FormControl>
                <FormControl id="name">
                    <FormLabel>Pesan</FormLabel>
                    <Textarea
                        borderColor="gray.300"
                        _hover={{
                            borderRadius: 'gray.300',
                        }}
                        placeholder="Halo ..."
                    />
                </FormControl>
                <FormControl id="name" float="right">
                    <Button
                        variant="solid"
                        bg="primary"
                        color="white"
                        _hover={{}}>
                        Kirim Pesan
                    </Button>
                </FormControl>
            </VStack>
        </Flex>
    );
}