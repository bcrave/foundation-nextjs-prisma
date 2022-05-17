import { Box, Flex } from "@chakra-ui/layout";
import {
  Button,
  Text,
  InputGroup,
  Input,
  InputRightElement,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { MdOutlineSearch } from "react-icons/md";
import { IoChevronDown } from "react-icons/io5";
import Image from "next/image";

const Navbar = () => {
  return (
    <Flex height="60px" width="100vw">
      <Flex width="50%" justify="space-evenly" align="center">
        <Flex align="center">
          <Image
            src="/logoipsum.svg"
            height={60}
            width={120}
            alt="logo - click to go home"
          />
        </Flex>
        <Box>
          <Text>Organizations</Text>
        </Box>
        <Box>
          <Text>Users</Text>
        </Box>
      </Flex>
      <Flex width="50%" justify="space-evenly" align="center">
        <InputGroup width="50%">
          <Input placeholder="Search" />
          <InputRightElement>
            <MdOutlineSearch />
          </InputRightElement>
        </InputGroup>
        <Menu>
          <MenuButton as={Button} rightIcon={<IoChevronDown />}>
            Actions
          </MenuButton>
          <MenuList>
            <MenuItem>My Profile</MenuItem>
            <MenuItem>My Account</MenuItem>
            <MenuItem>Log Out</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default Navbar;
