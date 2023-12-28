import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Button,
  Link,
  Avatar,
  Portal,
} from "@chakra-ui/react";
import { FiHome, FiSettings, FiMenu, FiMail } from "react-icons/fi";


import { IoPeopleOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgInsights } from "react-icons/cg";
import { HiOutlineDatabase } from "react-icons/hi";
import { useContext, useEffect, useState } from "react";
import { SidebarContext, SidebarProvider } from "../../context/SidebarContext";
import CreateButton from "./CreateButton";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SidebarPopoverFooter from "./SidebarPopoverFooter";
import { useSelector } from "react-redux";



export default function Sidebar({ LinkItems, children }) {
  
  

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        LinkItems={LinkItems} 
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }}>{children}</Box>
    </Box>
  );
}

const SidebarContent = ({ LinkItems, onClose, ...rest }) => {
  
  const { token } = useSelector((state) => state.auth);
  const [subsTo, setSubsTo] = useState([]);

  function getFollowings() {
    fetch(`https://patreon-data.herokuapp.com/users/${token}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.patron_mode.subscribed_to);
        data.patron_mode.subscribed_to.forEach((ele) => {
          fetch(`https://patreon-data.herokuapp.com/users/${ele.id}`)
            .then((res) => res.json())
            .then((data) => {
              let obj = {
                name: data.creator_mode.creatormode_name,
                pic: data.creator_mode.profilePic,
              };
              console.log(obj);
              setSubsTo((prev) => [...prev, obj]);
            });
        });
      });
  }
  useEffect(() => {
    getFollowings();
  }, []);

  const [openBox, setOpenBox] = useState(false);
  const n = useNavigate();
  const [, ToggleSidebarButtonValue] = useContext(SidebarContext);
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      // zIndex={"2000"}
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Box
          onClick={() => {
            n("/creatorhome");
          }}
          cursor={"pointer"}
          _hover={{ opacity: "80%" }}>
          <svg
            fill="#ff424d"
            width={"1.2em"}
            viewBox="0 0 569 546"
            xmlns="http://www.w3.org/2000/svg">
            <title>Patreon logo</title>
            <g>
              <circle
                cx="362.589996"
                cy="204.589996"
                data-fill="1"
                r="204.589996"></circle>
              <rect
                data-fill="1"
                height="545.799988"
                width="100"
                x="0"
                y="0"></rect>
            </g>
          </svg>
        </Box>

        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Box>
        {LinkItems.map((link) => (
          <NavItem
            onClick={() => {
              ToggleSidebarButtonValue(link.name);
            }}
            key={link.name}
            icon={link.icon}>
            {link.name}
          </NavItem>
        ))}
        <Box textAlign="center">
          {LinkItems[0].name === "My page" ? (
            <Button
              leftIcon={<FaRegEdit fill="black" />}
              colorScheme="whiteAlpha"
              margin="0 20px"
              width="12rem"
              color="black"
              fontSize={"sm"}
              textAlign="center"
              variant={"outline"}
              onClick={() => setOpenBox(!openBox)}>
              Create
            </Button>
          ) : (
            <>
              <Text align={"start"}>following</Text>
              {subsTo.map((sub) => (
                <>
                  <Box
                    margin={"10px"}
                    onClick={() => ToggleSidebarButtonValue("membershippage")}
                    _hover={{ backgroundColor: "gray.100" }}
                    // borderWidth={1}
                    boxSize="border-box"
                    // width="15rem"
                    // backgroundColor={"white"}
                    // p="13px 10px"
                    cursor={"pointer"}
                    bottom="0">
                    <Flex>
                      <Avatar
                        size={"sm"}
                        name={`${sub.name}`}
                        src={`${sub.pic}`}
                      />
                      <Box pl={"1rem"}>
                        <Text>{sub.name}</Text>
                      </Box>
                    </Flex>
                  </Box>
                </>
              ))}
            </>
          )}
        </Box>
        <CreateButton props={{ openBox, setOpenBox }} />

        <SidebarPopoverFooter LinkItem={LinkItems[0]} />
      </Box>
    </Box>
  );
};

export const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}>
      <Flex
        align="center"
        p="2"
        m="2"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "gray.100",
        }}
        _selected={false}
        {...rest}>
        {icon && <Icon mr="4" fontSize="16" as={icon} />}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 0, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  );
};
