import NextLink from "next/link";
import {
  Button,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { IoChevronDown } from "react-icons/io5";

const NavbarMenu = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<IoChevronDown />}>
        Actions
      </MenuButton>
      <MenuList>
        <NextLink href="/me/profile">
          <MenuItem>My Profile</MenuItem>
        </NextLink>
        <NextLink href="/me/account">
          <MenuItem>My Account</MenuItem>
        </NextLink>
        <NextLink href="/signin">
          <MenuItem>Sign Out</MenuItem>
        </NextLink>
      </MenuList>
    </Menu>
  );
};

export default NavbarMenu;
