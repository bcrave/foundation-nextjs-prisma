import { useRef, useState, useReducer } from "react";
import {
  editProfileInitialState,
  editProfileFormReducer,
} from "../lib/reducers/editProfileFormReducer";
import { auth } from "../lib/mutations";
import {
  Button,
  Text,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import { MdOutlineModeEditOutline } from "react-icons/md";

const EditProfileModal = ({ mode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [state, dispatch] = useReducer(
    editProfileFormReducer,
    editProfileInitialState
  );
  const { firstName, lastName, email, phoneNumber } = state;

  const handleInputChange = (e) => {
    dispatch({
      type: e.target.id,
      payload: { input: e.target.value },
    });
    getStateFromChild({ firstName, lastName, email, phoneNumber });
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef();
  const finalRef = useRef();

  const getStateFromChild = (state) => state;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const user = await auth(mode, {
      firstName: firstName.input,
      lastName: lastName.input,
      email: email.input,
      phoneNumber: phoneNumber.input,
    });
    setIsLoading(false);
    onClose();
    window.location.reload(false);
  };

  return (
    <>
      <Button variant="ghost" onClick={onOpen}>
        <Text fontSize="2xl">
          <MdOutlineModeEditOutline />
        </Text>
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit your Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={(e) => handleSubmit(e)} id="edit-profile-form">
              <FormControl>
                <FormLabel>First name</FormLabel>
                <Input
                  ref={initialRef}
                  id="first-name"
                  placeholder="First name"
                  value={firstName.input}
                  onChange={(e) => handleInputChange(e)}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Last name</FormLabel>
                <Input
                  id="last-name"
                  placeholder="Last name"
                  value={lastName.input}
                  onChange={(e) => handleInputChange(e)}
                />
              </FormControl>
              <FormControl mt={4} isInvalid={email.isError}>
                <FormLabel>Email</FormLabel>
                <Input
                  id="email"
                  placeholder="Email"
                  type="email"
                  value={email.input}
                  onChange={(e) => handleInputChange(e)}
                />
                {email.isError && (
                  <FormErrorMessage>Email is required.</FormErrorMessage>
                )}
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Phone</FormLabel>
                <Input
                  id="phone"
                  placeholder="phone"
                  value={phoneNumber.input}
                  onChange={(e) => handleInputChange(e)}
                />
              </FormControl>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button
              isLoading={isLoading}
              type="submit"
              colorScheme="blue"
              mr={3}
              onClick={(e) => handleSubmit(e)}
              form="edit-profile-form"
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditProfileModal;
