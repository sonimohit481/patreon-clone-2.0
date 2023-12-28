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
import { fetchUserData, handleUserDataFetch } from "../../../redux/userData/action";
import { FiHome, FiMail, FiSettings } from "react-icons/fi";
import { IoPeopleOutline } from "react-icons/io5";
import { CgInsights } from "react-icons/cg";
import { HiOutlineDatabase } from "react-icons/hi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Payments } from "../../../components/Payments";

const LinkItems = [
  { name: "My page", icon: FiHome },
  { name: "Patrons", icon: IoPeopleOutline },
  { name: "Insights", icon: CgInsights },
  { name: "Payouts", icon: HiOutlineDatabase },
  { name: "messages", icon: FiMail },
  { name: "Notifications", icon: IoIosNotificationsOutline },
  { name: "Settings", icon: FiSettings },
];
function CreatorHome() {
  const { token } = useSelector((state) => state.auth);
  const [sidebarButtonValue] = useContext(SidebarContext);
  // const [userData, setUserData] = useState({});
  const {userData} = useSelector((state)=>state.userData)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchUserData(token))
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
            ) : sidebarButtonValue === "My page" ? (
              <MyPage userData={userData} />
            ) : sidebarButtonValue === "Patrons" ? (
              <Patrons userData={userData} />
            ) : sidebarButtonValue === "Insights" ? (
              <Insights userData={userData} />
            ) : sidebarButtonValue === "Payouts" ? (
              <Payouts userData={userData} />
            ) : sidebarButtonValue === "payment" ? (
              <Payments />
            ) : (
              <></>
            )}
          </Box>
        </Flex>
      )}
    </>
  );
}

export default CreatorHome;
