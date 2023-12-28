import {
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  EditIcon,
  Search2Icon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Img,
  chakra,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Tag,
  TagLabel,
  TagRightIcon,
  TagLeftIcon,
} from "@chakra-ui/react";
import { FiHeadphones, FiImage, FiUpload, FiVideo } from "react-icons/fi";
import { HiDotsHorizontal } from "react-icons/hi";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { IoMdSettings } from "react-icons/io";
import { BsImage } from "react-icons/bs";
import Post from "./Post";
import CreateButton from "./CreateButton";
import { MembershipPage } from "../../pages/patron/membership/MembershipPage";

function MyPage({ userData }) {
  const { isOpen, onToggle, onOpen, onClose } = useDisclosure();
  const [tiers, setTiers] = useState(["one", "vip", "exclusive"]);
  const [Posts, setPosts] = useState([]);
  const [openBox, setOpenBox] = useState(false);
  const [filterByMedia, setFilterByMedia] = useState("")
  const [filterByTier, setFilterByTier] = useState("All")
  const [queryParam, setQueryParam] = useState("")
  const [ _sort, setSort] = useState("asc")


  useEffect(() => {
    // console.log(userData?.creator_mode);
    // console.log(userData.creator_mode.posts);
    setPosts(userData?.creator_mode?.posts);
    setTiers(userData.creator_mode.tiers)
  }, []);

  function _ByMediaType(post) {
    if (filterByMedia === "") {
        return true
      }
      return (post.type.toUpperCase() === filterByMedia.toUpperCase())
  }
function _ByMediaTier(post) {
  if (filterByTier === "All") {
    return true;
  }
  return post.tier.toUpperCase() === filterByTier.toUpperCase();
}
  
  function _SearchPosts(post) {
    console.log(post)
    if (queryParam === "") {
      return true
    }
    else if (
      post.type.includes(queryParam) ||
      post.title.includes(queryParam) ||
      post.desc.includes(queryParam) ||
      post.date.includes(queryParam) ||
      post.tier.includes(queryParam)
    ) {
      return true
    }
    else return false
  }
  return (
    <>
      <header>
        <Box
          // backgroundRepeat="repeat"
          // position="absolute"
          height="40vh"
          bgSize={"cover"}
          backgroundImage={`url(${userData?.creator_mode?.bgImg})`}
          backgroundPosition="center center"></Box>
      </header>

      <div>
        <Img
          width={"5rem"}

          height={"5rem"}
          position="relative"
          left={"47%"}
          top={"-10"}
          borderRadius={"50px"}
          src={`${userData?.creator_mode?.profilePic}`}></Img>
        <Box marginTop={"-70px"}>
          <Flex justifyContent={"end"} gap={"10px"} padding={"10px"}>
            <CreateButton props={{ openBox, setOpenBox }} />
            <Button
              onClick={() => {
                setOpenBox(!openBox);
              }}
              leftIcon={<EditIcon />}
              colorScheme={"facebook"}>
              Create
            </Button>
            <IconButton icon={<FiUpload />} />
            <IconButton icon={<HiDotsHorizontal />} />
          </Flex>
        </Box>
      </div>
      <Box textAlign={"center"} p={2}>
        <Heading
          size={"md"}>{`${userData.creator_mode?.creatormode_name}`}</Heading>
        <Text color={"gray"}>{`${userData.creator_mode?.creatorType}`}</Text>
      </Box>

      <Box>
        <Tabs align="center" isLazy>
          <TabList>
            <Tab>Posts</Tab>
            <Tab>Membership</Tab>
          </TabList>
          <TabPanels>
            {/* initially mounted */}
            <TabPanel textAlign={"left"} margin={"0 16.5rem"}>
              <Box margin={"10px"}>
                <Menu closeOnSelect={true}>
                  <MenuButton
                    onClick={onToggle}
                    borderRadius="md"
                    borderWidth="1px"
                    px={4}
                    py={2}>
                    Media type {<ChevronDownIcon />}
                  </MenuButton>
                  <MenuList minWidth="240px">
                    <MenuOptionGroup
                      onChange={(e) => {
                        setFilterByMedia(e);
                      }}
                      defaultValue="all"
                      title="Filter by media type">
                      <MenuItemOption value="Image">
                        <Tag
                          size={"md"}
                          variant="outline"
                          fontSize={"small"}
                          color={"black"}
                          colorScheme={"gray"}>
                          <TagLeftIcon as={FiImage} />
                          <TagLabel>
                            <strong>Image</strong>
                          </TagLabel>
                        </Tag>
                      </MenuItemOption>
                      <MenuItemOption value="Video">
                        <Tag
                          size={"md"}
                          variant="outline"
                          fontSize={"small"}
                          color={"black"}
                          colorScheme={"gray"}>
                          <TagLeftIcon as={FiVideo} />
                          <TagLabel>
                            <strong>Video</strong>
                          </TagLabel>
                        </Tag>
                      </MenuItemOption>
                      <MenuItemOption value="Audio">
                        <Tag
                          size={"md"}
                          variant="outline"
                          fontSize={"small"}
                          color={"black"}
                          colorScheme={"gray"}>
                          <TagLeftIcon as={FiHeadphones} />
                          <TagLabel>
                            <strong>Audio</strong>
                          </TagLabel>
                        </Tag>
                      </MenuItemOption>
                    </MenuOptionGroup>
                  </MenuList>
                </Menu>

                <Menu closeOnSelect={true}>
                  <MenuButton
                    onClick={onToggle}
                    borderRadius="md"
                    borderWidth="1px"
                    px={4}
                    py={2}>
                    Tier {<ChevronDownIcon />}
                  </MenuButton>
                  <MenuList minWidth="240px">
                    <MenuOptionGroup
                      onChange={setFilterByTier}
                      title="Filter by tier"
                      type="radio">
                      <MenuItemOption onClose={onClose} value="All">
                        <Tag
                          size={"md"}
                          variant="outline"
                          fontSize={"small"}
                          color={"black"}
                          colorScheme={"gray"}>
                          <TagLabel>
                            <strong>All Patrons</strong>
                          </TagLabel>
                        </Tag>
                      </MenuItemOption>
                      {tiers.map((tier) => (
                        <MenuItemOption
                          onClose={onClose}
                          value={`${tier.name}`}>
                          <Tag
                            size={"md"}
                            variant="outline"
                            fontSize={"small"}
                            color={"black"}
                            colorScheme={"gray"}>
                            <TagLabel>
                              <strong>{tier.name}</strong>
                            </TagLabel>
                          </Tag>
                        </MenuItemOption>
                      ))}
                    </MenuOptionGroup>
                  </MenuList>
                </Menu>

                <Menu closeOnSelect={true}>
                  <MenuButton
                    onClick={onToggle}
                    borderRadius="md"
                    borderWidth="1px"
                    px={4}
                    py={2}>
                    Month {<ChevronDownIcon />}
                  </MenuButton>
                  <MenuList minWidth="240px">
                    <MenuOptionGroup title="Filter by month">
                      <strong>2022</strong>
                      <br />
                      <MenuItemOption onClose={onClose} value="dec">
                        <Tag
                          size={"md"}
                          variant="outline"
                          fontSize={"small"}
                          color={"black"}
                          colorScheme={"gray"}>
                          <TagLabel>
                            <strong>June</strong>
                          </TagLabel>
                        </Tag>
                      </MenuItemOption>
                      <MenuItemOption onClose={onClose} value="asc">
                        <Tag
                          size={"md"}
                          variant="outline"
                          fontSize={"small"}
                          color={"black"}
                          colorScheme={"gray"}>
                          <TagLabel>
                            <strong>July</strong>
                          </TagLabel>
                        </Tag>
                      </MenuItemOption>
                    </MenuOptionGroup>
                  </MenuList>
                </Menu>

                <Text
                  cursor={"pointer"}
                  onClick={() => {
                    setFilterByMedia("");
                    setFilterByTier("All");
                  }}
                  color={"blue.500"}>
                  clear all filter
                </Text>
              </Box>
              <InputGroup>
                <InputLeftElement
                  zIndex={"-10"}
                  children={<Search2Icon color="gray.500" />}
                />
                <Input
                  onChange={(e) => {
                    setQueryParam(e.target.value);
                  }}
                  placeholder="Search posts"
                  type={"search"}></Input>
              </InputGroup>
              <Box margin={"40px 0"}>
                <Menu closeOnSelect={true}>
                  <MenuButton
                    onClick={onToggle}
                    borderRadius="md"
                    px={4}
                    py={2}>
                    Sort by date {<ChevronDownIcon />}
                  </MenuButton>
                  <MenuList minWidth="240px">
                    <MenuOptionGroup
                      onChange={setSort}
                      defaultValue="asc"
                      title="Sort by"
                      type="radio">
                      <MenuItemOption onClose={onClose} value="asc">
                        Oldest to newest
                      </MenuItemOption>
                      <MenuItemOption value="desc">
                        Newest to oldest
                      </MenuItemOption>
                    </MenuOptionGroup>
                  </MenuList>
                </Menu>
              </Box>

              <Box>
                {Posts?.filter(_ByMediaType)
                  .filter(_ByMediaTier)
                  .filter(_SearchPosts)
                  .sort(
                    _sort === "asc"
                    ? (a, b) => a.index - b.index
                    : (a, b) => b.index - a.index
                  )
                  .map((post) => (
                    <Post id={userData.id} property={post} />
                  ))}
              </Box>
            </TabPanel>
            {/* initially not mounted */}
            <TabPanel>
             <MembershipPage />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
}

export default MyPage;
