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
        <MenuItem>My Profile</MenuItem>
        <MenuItem>My Account</MenuItem>
        <MenuItem>
          <NextLink href="/signin">
            <Link>Sign Out</Link>
          </NextLink>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default NavbarMenu;
