import { useState, useEffect } from "react";
import NextLink from "next/link";
import { Box, Flex } from "@chakra-ui/layout";
import { InputGroup, Input, Button, Text } from "@chakra-ui/react";
import { HiUserAdd, HiUsers } from "react-icons/hi";

import { useUsersList } from "../../lib/hooks";
import { filterDataByText } from "../../lib/filters";
import InfoTable from "../../components/infoTable";

const AllUsers = () => {
  const { users } = useUsersList();
  const [usersFilteredByText, setUsersFilteredByText] = useState([]);

  useEffect(() => {
    setUsersFilteredByText(users);
  }, [users]);

  const handleInputChange = (e) => {
    setUsersFilteredByText(
      filterDataByText(
        e.target.value,
        users.map((org) => org)
      )
    );
  };

  return (
    <Box height="calc(100vh - 100px)" marginTop="100px">
      <Flex justify="space-between" align="center" height="125px">
        <Box width="400px">
          <InputGroup>
            <Input
              placeholder="Filter results..."
              onChange={(e) => handleInputChange(e)}
            />
          </InputGroup>
        </Box>
        <NextLink href="/addUser">
          <Button leftIcon={<HiUserAdd />}>Add User</Button>
        </NextLink>
      </Flex>
      <Text as="h2" fontSize="3xl" marginBottom="20px">
        <Flex align="center">
          <Box marginRight="20px">
            <HiUsers />
          </Box>
          Users
        </Flex>
      </Text>
      <Box height="65%" overflow="auto">
        <InfoTable data={usersFilteredByText} listType={"users"} />
      </Box>
    </Box>
  );
};

export default AllUsers;
