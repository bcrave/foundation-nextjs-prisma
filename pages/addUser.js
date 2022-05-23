import { Flex, Center } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import AddUserForm from "../components/forms/addUserForm";

const AddUser = () => {
  return (
    <Flex height="90%" justify="center" align="center" direction="column">
      <Center width="700px" marginBottom="30px">
        <Text as="h1" fontSize="4xl">
          Add User
        </Text>
      </Center>
      <AddUserForm mode="addUser" />
    </Flex>
  );
};

export default AddUser;
