import { Box, Container, Flex, Heading, HStack, Link, Text, VStack, Switch } from "@chakra-ui/react";

const Index = ({ colorMode, toggleColorMode }) => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box bg={colorMode === "dark" ? "gray.900" : "brand.700"} color={colorMode === "dark" ? "gray.100" : "white"} py={4}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Heading as="h1" size="lg">
            Financial Times
          </Heading>
          <HStack spacing={8}>
            <Link href="#" _hover={{ textDecoration: "none", color: colorMode === "dark" ? "gray.400" : "gray.200" }}>
              Home
            </Link>
            <Link href="#" _hover={{ textDecoration: "none", color: colorMode === "dark" ? "gray.400" : "gray.200" }}>
              Markets
            </Link>
            <Link href="#" _hover={{ textDecoration: "none", color: colorMode === "dark" ? "gray.400" : "gray.200" }}>
              Companies
            </Link>
            <Link href="#" _hover={{ textDecoration: "none", color: colorMode === "dark" ? "gray.400" : "gray.200" }}>
              Economy
            </Link>
            <Link href="#" _hover={{ textDecoration: "none", color: colorMode === "dark" ? "gray.400" : "gray.200" }}>
              Opinion
            </Link>
            <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
          </HStack>
        </Flex>
      </Box>

      {/* Main Content Area */}
      <Flex direction={{ base: "column", md: "row" }} mt={8} px={4}>
        {/* Featured Article */}
        <Box flex="3" mr={{ md: 8 }}>
          <Box mb={8}>
            <Heading as="h2" size="xl" mb={4}>
              Featured Article
            </Heading>
            <Text fontSize="lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
          </Box>

          {/* Recent Articles */}
          <Box>
            <Heading as="h3" size="lg" mb={4}>
              Recent Articles
            </Heading>
            <VStack spacing={4} align="stretch">
              <Box p={4} borderWidth="1px" borderRadius="md">
                <Heading as="h4" size="md">
                  Article Title 1
                </Heading>
                <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
              </Box>
              <Box p={4} borderWidth="1px" borderRadius="md">
                <Heading as="h4" size="md">
                  Article Title 2
                </Heading>
                <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
              </Box>
              <Box p={4} borderWidth="1px" borderRadius="md">
                <Heading as="h4" size="md">
                  Article Title 3
                </Heading>
                <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
              </Box>
            </VStack>
          </Box>
        </Box>

        {/* Sidebar */}
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <Box mb={8}>
            <Heading as="h3" size="lg" mb={4}>
              Market Data
            </Heading>
            <Text>Market data content goes here.</Text>
          </Box>
          <Box>
            <Heading as="h3" size="lg" mb={4}>
              Trending Topics
            </Heading>
            <Text>Trending topics content goes here.</Text>
          </Box>
        </Box>
      </Flex>

      {/* Footer */}
      <Box bg={colorMode === "dark" ? "gray.900" : "white"} color={colorMode === "dark" ? "gray.100" : "gray.800"} py={4} mt={8}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Text>&copy; 2023 Financial Times</Text>
          <HStack spacing={8}>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>
              About
            </Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>
              Contact
            </Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>
              Privacy Policy
            </Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;