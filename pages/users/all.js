import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

const AllUsers = () => {
  return (
    <NextLink href="/addUser" passHref>
      <Link>Add User</Link>
    </NextLink>
  );
};

export default AllUsers;
