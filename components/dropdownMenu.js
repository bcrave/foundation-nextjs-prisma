import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { IoChevronDown } from "react-icons/io5";

const DropdownMenu = () => {
  return (
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
  );
};

export default DropdownMenu;
