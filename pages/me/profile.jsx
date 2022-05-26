import { useMe } from "../../lib/hooks";
import { formatPhoneNumber } from "../../lib/formatters";
import { Box, Flex } from "@chakra-ui/layout";
import { SkeletonCircle, SkeletonText, Image, Text } from "@chakra-ui/react";

import EditProfileModal from "../../components/editProfileModal";

const MyProfile = () => {
  const { user, isLoading } = useMe();

  return (
    <Flex
      align="center"
      justify="center"
      height="calc(90vh - 100px)"
      marginTop="100px"
    >
      <Box
        backgroundColor="lightgray"
        width="900px"
        height="500px"
        borderRadius="20px"
      >
        {!isLoading && (
          <Box height="100%" width="100%" borderRadius="inherit">
            <Box
              height="35%"
              width="100%"
              bg="lightblue"
              borderTopRadius="inherit"
              background="url('https://picsum.photos/700/500')"
              backgroundPosition="center"
              backgroundSize="cover"
              position="relative"
            >
              <Image
                src="https://picsum.photos/150"
                alt="profile-pic"
                borderRadius="100%"
                marginRight="50px"
                position="absolute"
                left="30px"
                top="100%"
                transform="translateY(-70%)"
                border="4px solid lightgray"
              />
            </Box>

            <Box paddingY="70px" paddingX="40px" position="relative">
              <Box position="absolute" right="20px" top="10px">
                <EditProfileModal mode="updateProfile" />
              </Box>
              <Flex width="80%" justify="space-between">
                <Text as="h3" fontSize="4xl">
                  {user.firstName} {user.lastName}
                </Text>
                <Text fontSize="2xl">{user?.organization.name}</Text>
              </Flex>
              <Text fontSize="lg">{user.email}</Text>
              <Text fontSize="lg">{formatPhoneNumber(user.phoneNumber)}</Text>
            </Box>
          </Box>
        )}
        {isLoading && (
          <Box paddingX="20" paddingY="16" width="100%">
            <SkeletonCircle size="20" marginBottom="50px" />
            <SkeletonText mt="4" noOfLines={4} spacing="4" />
          </Box>
        )}
      </Box>
    </Flex>
  );
};

export default MyProfile;
