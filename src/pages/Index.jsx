import { Box, Flex, Text, Input, Button, VStack, HStack, Image } from "@chakra-ui/react";
import { FaSearch, FaCloudSun, FaTemperatureHigh, FaWind, FaTint } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="blue.500" minH="100vh" p={4}>
      <Flex justifyContent="center" pt={10}>
        <VStack spacing={4}>
          <Text fontSize="2xl" fontWeight="bold" color="white">
            Weather App
          </Text>
          <HStack>
            <Input placeholder="Search city" size="md" />
            <Button leftIcon={<FaSearch />} colorScheme="teal" variant="solid">
              Search
            </Button>
          </HStack>
          <Box bg="white" p={4} borderRadius="lg" boxShadow="md" w="full">
            <VStack spacing={4}>
              <Text fontSize="xl" fontWeight="bold">
                New York, NY
              </Text>
              <HStack spacing={4}>
                <FaCloudSun size="3em" />
                <Text fontSize="5xl" fontWeight="bold">
                  23°C
                </Text>
              </HStack>
              <HStack spacing={10} justifyContent="center">
                <VStack>
                  <FaTemperatureHigh />
                  <Text>High: 18°C</Text>
                </VStack>
                <VStack>
                  <FaWind />
                  <Text>Wind: 5 km/h</Text>
                </VStack>
                <VStack>
                  <FaTint />
                  <Text>Humidity: 78%</Text>
                </VStack>
              </HStack>
            </VStack>
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Index;
