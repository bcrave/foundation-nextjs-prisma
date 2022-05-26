import NextLink from "next/link";
import { Flex } from "@chakra-ui/layout";
import { Heading, Link, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <Flex
      height="calc(100vh - 100px)"
      justify="center"
      align="center"
      direction="column"
    >
      <Heading as="h1" size="3xl" marginBottom="30px">
        Welcome to{" "}
        <NextLink
          href="https://github.com/bcrave/foundation-nextjs-prisma/blob/main/README.md"
          passHref
        >
          <Link target="_blank" color="#044B7F">
            Foundation
          </Link>
        </NextLink>
      </Heading>
      <Heading as="h2" fontSize="xl">
        Dev Pipeline&apos;s Foundation built with{" "}
        <NextLink href="https://nextjs.org/" passHref>
          <Link target="_blank" color="#044B7F">
            Next.js
          </Link>
        </NextLink>{" "}
        and{" "}
        <NextLink href="https://chakra-ui.com/" passHref>
          <Link target="_blank" color="#044B7F">
            Chakra
          </Link>
        </NextLink>
      </Heading>
    </Flex>
  );
};

export default Home;
