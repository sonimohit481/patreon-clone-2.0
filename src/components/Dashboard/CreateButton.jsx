import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { Center, Text } from "@chakra-ui/react";
import { FaRegEdit } from "react-icons/fa";
import { IoTextOutline } from "react-icons/io5";
import { BiPoll } from "react-icons/bi";
import { BsLink45Deg, BsCardImage } from "react-icons/bs";
import { RiVideoLine } from "react-icons/ri";
import { AiOutlineAudio } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
export default function CreateButton({ props }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { openBox, setOpenBox } = props;
  const navigate = useNavigate();
  return (
    <>
      <Box textAlign="center">
        {/* <Button leftIcon={<FaRegEdit fill='black' />} colorScheme="whiteAlpha" margin="0 20px" width="12rem"  color="black" fontSize={"sm"} textAlign="center" variant={"outline"} onClick={onOpen}>Create 2</Button> */}
      </Box>
      <Modal isCentered isOpen={openBox || isOpen} onClose={onClose} w={"full"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader style={{ fontSize: "16px" }}>
            Choose Post Type
          </ModalHeader>
          <ModalCloseButton
            onClick={() => {
              setOpenBox(!openBox);
            }}
          />
          <ModalBody
            style={{
              display: "grid",
              gridTemplateColumns: "30% 30% 30%",
              gap: "20px",
              width: "100%",
            }}>
            <Center
              p={8}
              onClick={(prop) =>
                navigate("/createpost", {
                  state: {
                    prop: "text",
                  },
                })
              }>
              <Button
                w={"small"}
                maxW={"md"}
                variant={"outline"}
                style={{ padding: "20%", border: "none" }}>
                <Center style={{ display: "flex", flexDirection: "column" }}>
                  <IoTextOutline style={{ fontSize: "25px" }} />
                  <Text>Text</Text>
                </Center>
              </Button>
            </Center>
            <Center p={8}>
              <Button
                w={"small"}
                maxW={"md"}
                variant={"outline"}
                style={{ padding: "20%", border: "none" }}>
                <Center style={{ display: "flex", flexDirection: "column" }}>
                  <BiPoll style={{ fontSize: "25px" }} />
                  <Text>Poll</Text>
                </Center>
              </Button>
            </Center>
            <Center p={8}>
              <Button
                w={"small"}
                maxW={"md"}
                variant={"outline"}
                style={{ padding: "20%", border: "none" }}>
                <Center style={{ display: "flex", flexDirection: "column" }}>
                  <BsLink45Deg style={{ fontSize: "25px" }} />
                  <Text>Link</Text>
                </Center>
              </Button>
            </Center>
            <Center
              p={8}
              onClick={(prop) =>
                navigate("/createpost", {
                  state: {
                    prop: "image",
                  },
                })
              }>
              <Button
                w={"small"}
                maxW={"md"}
                variant={"outline"}
                style={{ padding: "20%", border: "none" }}>
                <Center style={{ display: "flex", flexDirection: "column" }}>
                  <BsCardImage style={{ fontSize: "25px" }} />
                  <Text>Image</Text>
                </Center>
              </Button>
            </Center>
            <Center p={8}>
              <Button
                w={"small"}
                maxW={"md"}
                variant={"outline"}
                style={{ padding: "20%", border: "none" }}>
                <Center style={{ display: "flex", flexDirection: "column" }}>
                  <RiVideoLine style={{ fontSize: "25px" }} />
                  <Text>Video</Text>
                </Center>
              </Button>
            </Center>
            <Center p={8}>
              <Button
                w={"small"}
                maxW={"md"}
                variant={"outline"}
                style={{ padding: "20%", border: "none" }}>
                <Center style={{ display: "flex", flexDirection: "column" }}>
                  <AiOutlineAudio style={{ fontSize: "25px" }} />
                  <Text>Audio</Text>
                </Center>
              </Button>
            </Center>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
