import { Box } from "@chakra-ui/layout";
import Navbar from "../components/navbar";

const Layout = ({ children }) => {
  return (
    <Box>
      <Navbar />
      <Box height="calc(100vh - 100px)">{children}</Box>
    </Box>
  );
};

export default Layout;
