import { Box } from "@chakra-ui/layout";
import Navbar from "../components/navbar";

const Layout = ({ children }) => {
  return (
    <Box>
      <Navbar />
      {children}
    </Box>
  );
};

export default Layout;
