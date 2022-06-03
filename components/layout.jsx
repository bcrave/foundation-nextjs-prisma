import { useMe } from "../lib/hooks";
import { Box } from "@chakra-ui/layout";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  const { user, isLoading } = useMe();
  return (
    <Box>
      <Box
        backgroundColor="white"
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="1"
        height="100px"
        width="100%"
      >
        <Navbar user={user} isLoading={isLoading} />
      </Box>
      <Box height="calc(100vh - 100px)" width="80%" margin="auto">
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
