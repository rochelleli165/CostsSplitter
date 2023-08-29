import { Modal, Button, Center, FormControl, Input, VStack, WarningOutlineIcon} from "native-base";
import { useState } from "react";

export const SignUpModal = () => {
    const [showModal, setShowModal] = useState(false);
    return <Center>
        <Button onPress={() => setShowModal(true)}>Sign Up</Button>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modal.Content maxWidth="400px">
            <Modal.CloseButton />
            <Modal.Header>Create New Account</Modal.Header>
            <Modal.Body>
            <FormControl isRequired>
          <VStack mx="4">
            <FormControl.Label>Username</FormControl.Label>
            <Input type="username" placeholder="username"  onChangeText={newUsername => setUsername(newUsername)}/>
            <FormControl.HelperText>
              Enter in username or email.
            </FormControl.HelperText>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" placeholder="password"  onChangeText={newPassword => setPassword(newPassword)}/>
            <FormControl.HelperText>
              Must be atleast 6 characters.
            </FormControl.HelperText>
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              Atleast 6 characters are required.
            </FormControl.ErrorMessage>
          </VStack>
        </FormControl>
          <FormControl isRequired action="">
          <VStack mx="4">
           
          </VStack>
        </FormControl>
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                setShowModal(false);
              }}>
                  Cancel
                </Button>
                <Button onPress={() => {
                setShowModal(false);
              }}>
                  Save
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </Center>;
  };