import NextLink from "next/link";
import { Flex } from "@chakra-ui/layout";
import { Heading, Link } from "@chakra-ui/react";

const Home = () => {
  return (
    <Flex height="80%" justify="center" align="center">
      <Heading as="h1" size="3xl">
        <NextLink href="#" passHref>
          <Link>Welcome to Foundation</Link>
        </NextLink>
      </Heading>
    </Flex>
  );
};

export default Home;
