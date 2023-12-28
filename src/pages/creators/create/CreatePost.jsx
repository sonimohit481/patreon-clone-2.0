import {
  border,
  Button,
  Checkbox,
  Flex,
  Heading,
  Link,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Input,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import "../edit/editPage.css";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { Switch } from "@chakra-ui/react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Sidebar from "../../../components/Dashboard/Sidebar";
import { MdOutlineFeed } from "react-icons/md";
import { BsCompass } from "react-icons/bs";
import { FiHome, FiMail, FiSettings } from "react-icons/fi";
import { IoPeopleOutline } from "react-icons/io5";
import { CgInsights } from "react-icons/cg";
import { HiOutlineDatabase } from "react-icons/hi";
import { IoIosNotificationsOutline } from "react-icons/io";
const LinkItems = [
  { name: "My page", icon: FiHome },
  { name: "Patrons", icon: IoPeopleOutline },
  { name: "Insights", icon: CgInsights },
  { name: "Payouts", icon: HiOutlineDatabase },
  { name: "messages", icon: FiMail },
  { name: "Notifications", icon: IoIosNotificationsOutline },
  { name: "Settings", icon: FiSettings },
];
export const CreatePost = () => {
  const [data, setData] = useState({});
  const [imgurl, setImgurl] = useState("");
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [tags, setTags] = useState("");
  const [heading, setHeading] = useState("");
  const [value, setValue] = useState("1");
  const [length, setLength] = useState(0);
  const location = useLocation();
  const [type, setType] = useState(location.state.prop);
  const { token } = useSelector((state) => state.auth);
  console.log(token);
  console.log("Prop is:", type);

  const handlecreatepost = () => {

    const current = new Date();
    const payLoad = {
      type: type,
      title: title,
      desc: caption,
      date: `${current.getDate()}/${current.getMonth()}/2022`,
      time: `${current.getHours()}:${current.getMinutes()}`,
      content_url: imgurl,
      visibility: value,
      likes: 0,
    };
    console.log("Data", data);
    // let temp = data.creator_mode.posts;
    data.creator_mode.posts.push(payLoad);
    console.log("after patch:", data);
    // temp.push(payLoad);
    // console.log("data2",data);
    fetch(`https://patreon-data.herokuapp.com/users/${token}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => console.log("res:", res))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    async function getData() {
      let res = await fetch(`https://patreon-data.herokuapp.com/users/${token}`);
      let data1 = await res.json();
      console.log("got from async:", data1.creator_mode.posts);
      setData(data1);
    }
    getData();
  }, []);
  const { userData } = useSelector((state) => state.userData);


  return (
    <>
      <Flex>
        <Sidebar userData={userData} LinkItems={LinkItems} />
        <>
          {token !== null ? (
            <div
              style={{
                width: "80%",
                display: "flex",
                flexDirection: "row",
                backgroundColor: "rgba(237,241,253,0.84)",
                justifyContent: "space-around",
              }}>
              <div
                style={{
                  width: "60%",
                  border: "1px solid rgba(116,126,154,0.4)",
                  margin: "5% 0",
                  backgroundColor: "white",
                  borderRadius: "9px",
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                }}>
                <div
                  style={{
                    fontWeight: "500",
                    fontSize: "26px",
                    width: "90%",
                    margin: "auto",
                    marginTop: "5%",
                    marginBottom: "3%",
                  }}>
                  Create {type} Post
                </div>
                <div style={{ width: "90%", margin: "auto", padding: "2%" }}>
                  {type === "image" ? (
                    <div
                      style={{ border: "1px dashed grey", marginBottom: "3%" }}>
                      <div style={{ width: "10%", margin: "auto" }}>
                        <AiOutlineCloudUpload
                          style={{
                            width: "100%",
                            margin: "auto",
                            fontSize: "35px",
                            marginTop: "10%",
                            display: "flex",
                            alignItems: "center",
                          }}
                        />
                      </div>
                      <form
                        style={{
                          width: "100%",
                          margin: "auto",
                          display: "flex",
                          justifyContent: "center",
                          marginTop: "5%",
                        }}>
                        <Input
                          type="file"
                          accept="image"
                          placeholder="none"
                          style={{
                            width: "25%",
                            margin: "auto",
                            marginBottom: "5%",
                            padding: "0",
                            border: "none",
                            padding: "1%",
                            display: "flex",
                            justifyContent: "center",
                          }}
                          value={imgurl}
                          onChange={(e) => setImgurl(e.target.value)}
                        />
                        {/* <input type="submit" /> */}
                      </form>
                    </div>
                  ) : (
                    <div></div>
                  )}
                  <hr />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginTop: "5%",
                    }}>
                    <Input
                      type="text"
                      placeholder="Post Title (Required)"
                      style={{
                        fontSize: "24px",
                        fontWeight: "700",
                        border: "none",
                      }}
                      focusBorderColor="none"
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <Textarea
                      type="text"
                      placeholder="See What's New In Your World"
                      style={{ fontSize: "15px", border: "none" }}
                      rows="7"
                      cols="20"
                      focusBorderColor="none"
                      onChange={(e) => setCaption(e.target.value)}
                    />
                  </div>
                  <hr />
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      marginTop: "5%",
                      marginBottom: "5%",
                    }}>
                    <div style={{ fontSize: "18px", fontWeight: "500" }}>
                      Tags
                    </div>
                    <Input
                      type="text"
                      placeholder="Add Tags..."
                      style={{ marginTop: "3%", border: "none", padding: "0" }}
                      focusBorderColor="none"
                    />
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: "30%",
                  border: "1px solid rgba(116,126,154,0.4)",
                  margin: "5% 0",
                  backgroundColor: "white",
                  borderRadius: "9px",
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                }}>
                <div style={{ width: "90%", margin: "auto", marginTop: "6%" }}>
                  <Button
                    size="md"
                    height="48px"
                    width="100%"
                    border="none"
                    background="#22549F"
                    disabled={imgurl === "" || title === ""}
                    style={{ color: "white", fontWeight: "500" }}
                    onClick={() => handlecreatepost()}>
                    Publish
                  </Button>
                </div>
                <div
                  style={{
                    width: "90%",
                    margin: "auto",
                    backgroundColor: "white",
                    marginTop: "5%",
                  }}>
                  <RadioGroup onChange={setValue} value={value}>
                    <Stack
                      direction="row"
                      style={{ display: "flex", flexDirection: "column" }}>
                      <Radio
                        value="pubic"
                        style={{ marginTop: "2.5%", marginBottom: "2.5%" }}>
                        Public
                      </Radio>
                      <Radio
                        value="patrons-only"
                        style={{ marginTop: "2.5%", marginBottom: "2.5%" }}>
                        Patrons Only
                      </Radio>
                      <Radio
                        value="select-tier"
                        style={{ marginTop: "2.5%", marginBottom: "2.5%" }}>
                        Select Tier
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "90%",
                    margin: "auto",
                    marginTop: "2.5%",
                    marginBottom: "2.5%",
                  }}>
                  <div style={{ fontWeight: "500", fontSize: "16px" }}>
                    Early Access:
                  </div>
                  <div>
                    <Stack direction="row">
                      {/* <Switch colorScheme='red' /> */}
                      <Switch colorScheme="blue" />
                    </Stack>
                  </div>
                </div>
                <div style={{ width: "90%", color: "blue", margin: "auto" }}>
                  LearnMore
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "90%",
                    margin: "auto",
                    marginTop: "2.5%",
                    marginBottom: "2.5%",
                  }}>
                  <div style={{ fontWeight: "500", fontSize: "16px" }}>
                    Preview Text
                  </div>
                  <div style={{ marginTop: "2.5%", marginBottom: "2.5%" }}>
                    <Input
                      placeholder="Add Public Preview Text..."
                      focusBorderColor="none"
                    />
                    <div style={{ width: "90%", margin: "auto" }}>
                      {length}/140
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Navigate to={"/login"} />
          )}
        </>
      </Flex>
    </>
  );
};
