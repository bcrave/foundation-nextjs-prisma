import { Flex } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/react";

const Home = () => {
  return (
    <Flex height="80%" justify="center" align="center">
      <Heading as="h1" size="3xl">
        Welcome to Foundation
      </Heading>
    </Flex>
  );
};

export default Home;
