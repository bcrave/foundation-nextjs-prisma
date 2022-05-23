import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { Table, Thead, Td, Tr, Th, Tbody, IconButton } from "@chakra-ui/react";

const AllOrganizations = () => {
  return (
    <NextLink href="/addOrganization">
      <Link>Add Organization</Link>
    </NextLink>
  );
};

export default AllOrganizations;
