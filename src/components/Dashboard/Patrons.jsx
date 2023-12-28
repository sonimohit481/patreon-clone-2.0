import { Box, Button, Flex, Heading, Input, InputGroup, InputLeftAddon, InputLeftElement, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { FaSort } from "react-icons/fa";

function Patrons({ userData }) {
  console.log(userData.creator_mode.subscriber_patrons)
  const patrons = userData.creator_mode.subscriber_patrons
let today = new Date();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  return (
    <>
      <Box fontSize={"sm"} margin={"70px"}>
        <Heading size={"lg"}>Patrons</Heading>

        <Tabs isLazy>
          <TabList>
            <Tab>Relationship manager</Tab>
            <Tab>Benefits</Tab>
            <Tab>Exit surveys</Tab>
            <Tab>Blocked users</Tab>
          </TabList>
          <TabPanels>
            {/* initially mounted */}
            <TabPanel>
              <>
                <Flex margin={"30px 0"} gap={"10px"}>
                  <InputGroup maxWidth={"max-content"}>
                    <InputLeftElement
                      children={<BsSearch />}></InputLeftElement>
                    <Input placeholder="Search for name or email"></Input>
                  </InputGroup>
                  <Button size={"sm"}>Message</Button>
                  <Button size={"sm"}>CSV</Button>
                  <Text color={"gray"} pl={3} fontSize={"sm"}>As of {time}</Text>
                </Flex>

                <Flex gap="10px">
                  <Button size={"sm"} colorScheme={"facebook"}>
                    Active
                  </Button>
                  <Button size={"sm"} color={"black"} colorScheme={"white"}>
                    New
                  </Button>
                  <Button size={"sm"} color={"black"} colorScheme={"white"}>
                    Declined
                  </Button>
                  <Button size={"sm"} color={"black"} colorScheme={"white"}>
                    cancelled
                  </Button>
                  <Button size={"sm"} color={"black"} colorScheme={"white"}>
                    Filter - {"count"}
                  </Button>
                  <Button
                    size={"sm"}
                    color={"facebook.300"}
                    colorScheme={"white"}>
                    clear all
                  </Button>
                </Flex>

                <Box marginTop={"40px"}>
                  <Box
                    borderWidth={"1px"}
                    borderRadius="4px"
                    p={2}
                    boxSizing="border-box">
                    {/* table data */}
                    <TableContainer>
                      <Table size="sm">
                        <Thead>
                          <Tr>
                            <Th>
                              <Button
                                size={"sm"}
                                rightIcon={<FaSort />}
                                color={"black"}
                                colorScheme={"white"}>
                                Name
                              </Button>
                            </Th>

                            <Th>
                              <Button
                                size={"sm"}
                                rightIcon={<FaSort />}
                                color={"black"}
                                colorScheme={"white"}>
                                Email
                              </Button>
                            </Th>

                            <Th>
                              <Button
                                size={"sm"}
                                rightIcon={<FaSort />}
                                color={"black"}
                                colorScheme={"white"}>
                                Current Tier
                              </Button>
                            </Th>
                            <Th>
                              <Button
                                size={"sm"}
                                rightIcon={<FaSort />}
                                color={"black"}
                                colorScheme={"white"}>
                                Pledge
                              </Button>
                            </Th>
                            <Th>
                              <Button
                                size={"sm"}
                                color={"black"}
                                colorScheme={"white"}>
                                Status
                              </Button>
                            </Th>
                            <Th>
                              <Button
                                size={"sm"}
                                rightIcon={<FaSort />}
                                color={"black"}
                                colorScheme={"white"}>
                                Join Date
                              </Button>
                            </Th>
                          </Tr>
                        </Thead>

                        <Tbody h={"40vh"} verticalAlign="top">
                          {
                            patrons.map(patron => (
                              
                              <Tr key={patron.email}>
                            <Td>{patron.name}</Td>
                            <Td>{patron.email}</Td>
                            <Td>{patron.current_tier}</Td>
                            <Td>{patron.pledge}</Td>
                            <Td>{patron.status}</Td>
                            <Td>{patron.join_date}</Td>
                          </Tr>
                              ))
                          }
                        </Tbody>
                      </Table>
                    </TableContainer>
                  </Box>
                </Box>
              </>
            </TabPanel>
            {/* initially not mounted */}
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
}

export default Patrons;
