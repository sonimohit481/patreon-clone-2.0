import { Box,chakra , Button, Center, Divider, Flex, Heading, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";

function FindCreator() {
  return (
    <div>
      <Box margin={"5% 20%"}>
        <Heading>Find creators </Heading>
        <Box>
          <InputGroup margin={"30px 0"}>
            <InputLeftElement children={<BsSearch />}></InputLeftElement>
            <Input placeholder="Find a creator"></Input>
            <Button ml={"20px"} colorScheme="facebook">
              {" "}
              Search
            </Button>
          </InputGroup>
          <Divider />
        </Box>
        <Box>
          <Center>

          <Heading size={"md"} >Popular searches</Heading>
          </Center>
          
          <Flex p={"30px"} justify={"space-around"}>
            <Button size={"sm"} >Art</Button>
            <Button size={"sm"} >Music</Button>
            <Button size={"sm"} >Podcast</Button>
            <Button size={"sm"} >Games</Button>
            <Button size={"sm"} >Yoga</Button>
            <Button size={"sm"} >Sailing</Button>
          </Flex>
        </Box>
      </Box>
    </div>
  );
}

export default FindCreator;
