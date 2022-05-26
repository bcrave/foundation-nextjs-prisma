import NextLink from "next/link";
import Image from "next/image";
import { Box, Flex } from "@chakra-ui/layout";
import { Link, InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import { MdOutlineSearch } from "react-icons/md";

import DropdownMenu from "./navbarMenu";

const navLinks = [
  {
    name: "Organizations",
    route: "/organizations/all",
  },
  {
    name: "Users",
    route: "/users/all",
  },
];

const Navbar = () => {
  return (
    <Box width="100%" height="100%" borderBottom="1px solid black">
      <Flex margin="auto" justify="space-between" height="100%" width="80%">
        <Flex width="45%" justify="space-between" align="center">
          <NextLink href="/" passHref>
            <Link>
              <Flex align="center">
                <Image
                  src="/logoipsum.svg"
                  height={60}
                  width={120}
                  alt="logo - click to go home"
                />
              </Flex>
            </Link>
          </NextLink>
          {navLinks.map((link) => (
            <Box key={link.name}>
              <NextLink href={link.route} passHref>
                <Link fontWeight="bold">{link.name}</Link>
              </NextLink>
            </Box>
          ))}
        </Flex>
        <Flex width="45%" justify="space-between" align="center">
          <InputGroup width="60%">
            <Input placeholder="Search" />
            <InputRightElement>
              <MdOutlineSearch />
            </InputRightElement>
          </InputGroup>
          <DropdownMenu />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
