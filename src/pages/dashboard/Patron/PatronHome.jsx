import { Box, Center, CircularProgress, Flex } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import Patrons from "../../../components/Dashboard/Patrons";
import Sidebar from "../../../components/Dashboard/Sidebar";
import MyPage from "../../../components/Dashboard/MyPage";
import { SidebarContext } from "../../../context/SidebarContext";
import Insights from "../../../components/Dashboard/Insights";
import Payouts from "../../../components/Dashboard/Payouts";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { fetchUserData } from "../../../redux/userData/action";
import { FiMail, FiSettings } from "react-icons/fi";
import { IoCompassOutline } from "react-icons/io5";
import { BsCompass } from "react-icons/bs";
import { MdOutlineFeed } from "react-icons/md";
import { FeedCard } from "../../../components/patron/feed/FeedCard";
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
  // const [userData, setUserData] = useState({});
  const { userData } = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData(token));
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
