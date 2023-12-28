import {  Center, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FeedCard } from "./FeedCard";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button
} from "@chakra-ui/react";
import { IoFilter } from "react-icons/io5";
import { useSelector } from "react-redux";

export const Feed = () => {
  const [CreatorsPosts, setCreatorsPosts] = useState([])
  const { token } = useSelector((state) => state.auth);
  const [creatorName, setCreatorName] = useState('')
  const [creatorPic, setCreatorPic] = useState('')


  function getFeedData() {
    fetch(`https://patreon-data.herokuapp.com/users/${token}`)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.patron_mode.subscribed_to);
        // setCreators(res.patron_mode.subscribed_to);
        res.patron_mode.subscribed_to.forEach((creator) => {
          fetch(`https://patreon-data.herokuapp.com/users/${creator.id}`)
            .then(res=>res.json())
            .then(data => {
              const obj = {
                creatorPic: data.creator_mode.profilePic,
                creatorName: data.creator_mode.creatormode_name,
                posts:[ ...data.creator_mode.posts],
              };

              setCreatorsPosts(prev=>[...prev, {...obj}])
            });

        });
      });
    console.log(token)
  }
  useEffect(() => {
    getFeedData()
    

  }, [])
  

  return (
    <>
      <Center>

      <Flex w={"56%"} direction={"column"}>
          <Flex p={"60px 0"} justify={"space-between"}>
            <Heading>Feed</Heading>
          <Menu >
            <MenuButton as={Button}>
              <IoFilter/>
            </MenuButton>
            <MenuList>
              <MenuItem>All posts</MenuItem>
              <MenuItem>Patron-only posts</MenuItem>
            </MenuList>
          </Menu>
          </Flex>
          {
            CreatorsPosts?.map((post) => (
              <FeedCard post={post} />
            ))
          }
      </Flex>
      </Center>
    </>
  );
};
