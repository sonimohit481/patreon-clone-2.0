import { Box, Center, CircularProgress, Flex } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";

import Sidebar from "../../../components/Dashboard/Sidebar";

import { SidebarContext } from "../../../context/SidebarContext";

import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { fetchUserData } from "../../../redux/userData/action";
import { FiMail, FiSettings } from "react-icons/fi";

import { BsCompass } from "react-icons/bs";
import { MdOutlineFeed } from "react-icons/md";

import { MembershipPage } from "../../patron/membership/MembershipPage";
import FindCreator from "../../../components/Dashboard/Patron/FindCreator";
import { Feed } from "../../../components/patron/feed/Feed";
import { Payments } from "../../../components/Payments";
const LinkItems = [
  { name: "Feed", icon: MdOutlineFeed },
  { name: "Find creators", icon: BsCompass },
  { name: "Messages", icon: FiMail },
  { name: "Settings", icon: FiSettings },
];

function PatronHome() {
  const { token } = useSelector((state) => state.auth);
  const [sidebarButtonValue] = useContext(SidebarContext);

  const { userData } = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData(token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!token ? (
        <Navigate to={"/"} />
      ) : (
        <Flex>
          <Sidebar userData={userData} LinkItems={LinkItems} />

          <Box width="100vw">
            {!userData.id ? (
              <Center h="100vh">
                <CircularProgress isCentered isIndeterminate color="blue.600" />
              </Center>
            ) : sidebarButtonValue === "Feed" ? (
              <Feed />
            ) : sidebarButtonValue === "Messages" ? (
              <></>
            ) : sidebarButtonValue === "Find creators" ? (
              <FindCreator />
            ) : sidebarButtonValue === "payment" ? (
              <Payments />
            ) : sidebarButtonValue === "membershippage" ? (
              <MembershipPage />
            ) : (
              <></>
            )}
          </Box>
        </Flex>
      )}
    </>
  );
}

export default PatronHome;
