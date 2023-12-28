import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Box,
  Flex,
  Avatar,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleLogOut } from "../../redux/auth/actions";
import { fetchUserData } from "../../redux/userData/action";
import { NavItem } from "./Sidebar";

function SidebarPopoverFooter({ LinkItem }) {
  
  const { token } = useSelector((state) => state.auth);
  const { userData } = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  const n = useNavigate();

  useEffect(() => {
    dispatch(fetchUserData(token));
  }, []);
  return (
    <div>
      <Popover padding="0" margin="0">
        <PopoverTrigger>
          <Box
            _hover={{ backgroundColor: "gray.100" }}
            borderWidth={1}
            boxSize="border-box"
            width="15rem"
            backgroundColor={"white"}
            pos={"fixed"}
            p="13px 10px"
            cursor={"pointer"}
            bottom="0">
            <Flex>
              <Avatar
                size={"sm"}
                name={
                  LinkItem.name === "My page"
                    ? `${userData?.creator_mode?.creatormode_name}`
                    : `${userData?.patron_mode?.patronmode_name}`
                }
                src={
                  LinkItem.name === "My page"
                    ? `${userData?.creator_mode?.profilePic}`
                    : `${userData?.patron_mode?.profilePic}`
                }
              />
              <Box pl={"1rem"}>
                <Text>
                  {LinkItem.name === "My page"
                    ? userData?.creator_mode?.creatormode_name
                    : userData?.patron_mode?.patronmode_name}
                </Text>
                <Text fontSize={"sm"} mt="-1.5" color="gray">
                  {LinkItem.name === "My page" ?
                    userData?.creator_mode?.creatorType :
                    "Patron"}
                </Text>
              </Box>
            </Flex>
          </Box>
        </PopoverTrigger>

        <PopoverContent width={"14rem"}>
          <PopoverBody p="0">
            {/* here in the children element of navlink i can add any element */}
            <NavItem>
              <Box
                onClick={() => n("/creatorhome")}
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
                    name={`${userData?.creator_mode?.creatormode_name}`}
                    src={`${userData?.creator_mode?.profilePic}`}
                  />
                  <Box pl={"1rem"}>
                    <Text>{userData?.creator_mode?.creatormode_name}</Text>
                    <Text fontSize={"sm"} mt="-1.5" color="gray">
                      {"creator"}
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </NavItem>

            <NavItem>
              <Box
                onClick={() => n("/patronhome")}
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
                    name={`${userData?.patron_mode?.patronmode_name}`}
                    src={`${userData?.patron_mode?.profilePic}`}
                  />
                  <Box pl={"1rem"}>
                    <Text>{userData?.patron_mode?.patronmode_name}</Text>
                    <Text fontSize={"sm"} mt="-1.5" color="gray">
                      {"patron"}
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </NavItem>
          </PopoverBody>
          <PopoverFooter>
            <NavItem>Creator resources</NavItem>
            <NavItem>Help center & FAQ</NavItem>
            <NavItem onClick={()=>{dispatch(handleLogOut());}} >Log out</NavItem>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default SidebarPopoverFooter;
