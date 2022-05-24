import NextLink from "next/link";
import { Box, Flex } from "@chakra-ui/layout";
import { Link, InputGroup, Input, Button, Text } from "@chakra-ui/react";
import { HiUserAdd, HiUsers } from "react-icons/hi";

import { useUsersList } from "../../lib/hooks";
import InfoTable from "../../components/infoTable";

const AllUsers = () => {
  const { users } = useUsersList();

  return (
    <Box height="calc(100vh - 100px)" marginTop="100px">
      <Flex justify="space-between" align="center" height="125px">
        <Box width="400px">
          <InputGroup>
            <Input placeholder="Filter results..." />
          </InputGroup>
        </Box>
        <NextLink href="/addUser">
          <Link>
            <Button leftIcon={<HiUserAdd />}>Add User</Button>
          </Link>
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
        <InfoTable data={users} listType={"users"} />
      </Box>
    </Box>
  );
};

export default AllUsers;
