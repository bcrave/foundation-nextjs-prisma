import { useState, useEffect } from "react";
import NextLink from "next/link";
import { Box, Flex } from "@chakra-ui/layout";
import { Link, Input, InputGroup, Button, Text } from "@chakra-ui/react";
import { HiFolderAdd } from "react-icons/hi";
import { GrOrganization } from "react-icons/gr";

import { useOrgsList } from "../../lib/hooks";
import { filterDataByText } from "../../lib/filters";
import InfoTable from "../../components/infoTable";

const AllOrganizations = () => {
  const { organizations } = useOrgsList();
  const [orgsFilteredByText, setOrgsFilteredByText] = useState([]);

  useEffect(() => {
    setOrgsFilteredByText(organizations);
  }, [organizations]);

  const handleInputChange = (e) => {
    setOrgsFilteredByText(
      filterDataByText(
        e.target.value,
        organizations.map((org) => org)
      )
    );
  };

  return (
    <Box height="calc(100vh - 100px)" marginTop="100px">
      <Flex justify="space-between" align="center" height="120px">
        <Box width="400px">
          <InputGroup>
            <Input
              placeholder="Filter results..."
              onChange={(e) => handleInputChange(e)}
            />
          </InputGroup>
        </Box>
        <NextLink href="/addOrganization">
          <Link>
            <Button leftIcon={<HiFolderAdd />}>Add Organization</Button>
          </Link>
        </NextLink>
      </Flex>
      <Text as="h2" fontSize="3xl" marginBottom="20px">
        <Flex align="center">
          <Box marginRight="20px">
            <GrOrganization />
          </Box>
          Organizations
        </Flex>
      </Text>
      <Box height="65%" overflow="auto">
        <InfoTable data={orgsFilteredByText} listType={"organizations"} />
      </Box>
    </Box>
  );
};

export default AllOrganizations;
