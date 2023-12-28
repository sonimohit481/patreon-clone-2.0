import { Avatar, Box, Flex, Image, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsHeart, BsHeartFill, BsPin } from "react-icons/bs";
import { FiEdit2, FiTrash, FiUpload } from "react-icons/fi";

function Post({ id, property }) {
  const [isLike, setIsLike] = useState(property?.isLiked);
  const [likesCount, setLikesCount] = useState(property?.likes);
  // const [tempUserData, setTempUserData] = useState({})

  function ToggleLike() {
    fetch(`https://patreon-data.herokuapp.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // setTempUserData(data)
        // console.log(data, isLike);
        let new_likes =  (isLike ? +likesCount - 1 : +likesCount + 1);

        let new_Posts_Array = data.creator_mode.posts.map((element) =>
          element.index === property.index
            ? {
                ...element,
                isLiked: !isLike,
                likes: new_likes,
              }
            : element
        );
        const updatedData = {
          ...data,
          creator_mode: {
            ...data.creator_mode,
            posts: [...new_Posts_Array],
          },
        };
        // console.log(updatedData, "updatedDataArr");

          fetch(`https://patreon-data.herokuapp.com/users/${id}`, {
            method: "PATCH",
            body: JSON.stringify({ ...updatedData }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((response) => response.json())
            .then((json) => console.log(json));
      });

    setLikesCount(isLike ? (prev) => +prev - 1 : (prev) => +prev + 1);
    setIsLike((prev) => !prev);
  }

  return (
    <>
      <Box mb={"5"} borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={property.content_url} alt={property.imageAlt} />

        <Box padding="20px 10px">
          <Box display="flex" alignItems="baseline">
            <Box
              color="blackAlpha.700"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="sm"
              textTransform="uppercase">
              {property.date} &bull; {property.time}
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h3"
            fontSize={"xl"}
            lineHeight="tight"
            noOfLines={1}>
            {property.title}
          </Box>
          <Flex justify={"space-between"}>
            <Box
              display="flex"
              fontSize={"large"}
              margin="10px"
              mt="2"
              gap={"40px"}
              alignItems="center">
              <Box onClick={ToggleLike}>
                {isLike ? <BsHeartFill fill="red" /> : <BsHeart />}
              </Box>
              <FiUpload />
              <FiTrash />
              <FiEdit2 />
              <BsPin />
            </Box>
            {likesCount} likes
          </Flex>
          <Box>
            <hr />
            <Box display={"flex"} alignItems="center" padding={"15px"}>
              <Avatar size={"sm"} mr={"15px"} />
              <Input
                placeholder="Join the conversation..."
                _placeholder={{ opacity: 1, color: "gray.500" }}
                borderColor="blackAlpha.400"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Post;
