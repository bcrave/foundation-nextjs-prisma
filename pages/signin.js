import { Flex, Center } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";

import SigninForm from "../components/forms/signinForm";

const Signin = () => {
  return (
    <Flex height="90vh" justify="center" align="center" direction="column">
      <Center width="700px" marginBottom="30px">
        <Text as="h1" fontSize="4xl">
          Sign In
        </Text>
      </Center>
      <SigninForm mode="signin" />
    </Flex>
  );
};

Signin.authPage = true;

export default Signin;
