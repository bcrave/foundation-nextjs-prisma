import { Role } from "@prisma/client";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSWRConfig } from "swr";
import { validateEmail } from "../../lib/validators";
import { auth } from "../../lib/mutations";

import { Box, Flex } from "@chakra-ui/layout";

import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";

const SigninForm = ({ mode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const isInvalidEmail = !validateEmail(email) && email !== "";
  let isInvalidPassword; // TODO

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const user = await auth(mode, { email, password });
    setIsLoading(false);
    router.push("/");
  };

  return (
    <Box
      width="600px"
      border="1px solid black"
      borderRadius="6px"
      paddingY="20px"
      paddingX="40px"
    >
      <form onSubmit={(e) => handleSubmit(e)}>
        <Flex align="end" direction="column">
          <FormControl isInvalid={isInvalidEmail} marginBottom="30px">
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {isInvalidEmail ? (
              <FormHelperText>Please enter a valid email</FormHelperText>
            ) : (
              <FormErrorMessage>Email is required.</FormErrorMessage>
            )}
          </FormControl>
          <FormControl marginBottom="30px" isInvalid={isInvalidPassword}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button
            backgroundColor="lightblue"
            width="49%"
            type="submit"
            isLoading={isLoading}
          >
            {mode === "signin" && "Sign in"}
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default SigninForm;
