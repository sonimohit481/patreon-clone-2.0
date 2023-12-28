import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Input,
} from "@chakra-ui/react";
import "./feed.css";
import { BsHeart, BsHeartFill, BsThreeDots } from "react-icons/bs";
import { FiUpload } from "react-icons/fi";
export const FeedCard = ({ post }) => {
  console.log(post, "postDaat");
  const [isLike, setIsLike] = useState(false);
  function ToggleLike() {
    setIsLike(!isLike);
  }
  useEffect(() => {}, []);

  const creatorName = post.creatorName,
    creatorPic = post.creatorPic;

  return (
    <>
      {post.posts.map((p) => (
        <div className="feedCard">
          <div>
            <div
              style={{
                display: "flex",
                paddingBottom: "15px",
                alignItem: "centre",
              }}
            >
              <Image
                borderRadius="full"
                boxSize="50px"
                src={`${creatorPic}`}
                alt={creatorName}
              />
              <Heading paddingLeft="15px" as="h5" size="sm">
                {creatorName}
              </Heading>
            </div>
            <div>
              <img className="postImage" src={`${p.content_url}`} alt="" />
            </div>
            <div>
              <Heading paddingBottom="10px" color={"grey"} as="h6" size="xs">
                {p.date} at {p.time}
              </Heading>
            </div>
            <div>
              <Heading paddingBottom="10px" as="h5" size="sm">
                {p.title}
              </Heading>
            </div>
            <div>
              <p style={{ paddingBottom: "10px" }}>{p.desc}</p>
            </div>

            <div style={{ paddingBottom: "10px" }}>
              <Flex justify={"space-between"}>
                <Box
                  display="flex"
                  fontSize={"large"}
                  margin="10px"
                  mt="2"
                  gap={"40px"}
                  alignItems="center"
                >
                  <Box onClick={ToggleLike}>
                    {isLike ? <BsHeartFill fill="red" /> : <BsHeart />}
                  </Box>
                  <FiUpload />
                  <BsThreeDots />
                </Box>
                {p.likes} likes
              </Flex>
            </div>
            <Divider />
            <Box display={"flex"} alignItems="center" padding={"15px"}>
              <Avatar size={"sm"} mr={"15px"} />
              <Input
                placeholder="Join the conversation..."
                _placeholder={{ opacity: 1, color: "gray.500" }}
                borderColor="blackAlpha.400"
              />
            </Box>
          </div>
        </div>
      ))}
    </>
  );
};
