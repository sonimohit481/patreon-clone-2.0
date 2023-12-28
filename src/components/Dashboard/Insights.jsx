import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
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
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import React from "react";
function Insights({ userData }) {
  // console.log(userData);
  let today = new Date();
  let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  function _count(str) {
    let res = 0;
    userData.creator_mode.subscriber_patrons.forEach((element) => {
      if (element.status === str) res++;
    });
    return res;
  }

  const _percentage = (str) =>
    (_count(str) / userData.creator_mode.subscriber_patrons.length) * 100;
  function _showUsers(str) {
    let res = [];
    userData.creator_mode.subscriber_patrons.forEach((element) => {
      if (element.status === str) res.push(element);
    });
    return res;
  }
  return (
    <>
      <Box fontSize={"sm"} margin={"70px"}>
        <Heading size={"lg"}>Insights</Heading>

        <Tabs isLazy>
          <TabList>
            <Tab>Membership</Tab>
            <Tab>Earnings</Tab>
            <Tab>Posts</Tab>
          </TabList>
          <TabPanels>
            {/* initially mounted */}
            <TabPanel>
              <>
                <Flex
                  justifyContent={"space-between"}
                  margin={"30px 0"}
                  gap={"10px"}>
                  <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                      Past 30 days
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Download</MenuItem>
                      <MenuItem>Create a Copy</MenuItem>
                      <MenuItem>Mark as Draft</MenuItem>
                      <MenuItem>Delete</MenuItem>
                      <MenuItem>Attend a Workshop</MenuItem>
                    </MenuList>
                  </Menu>
                  <p>last updated at {time}</p>
                </Flex>

                <Box marginTop={"60px"}>
                  <Tabs isFitted>
                    <TabList>
                      <Tab>
                        <Stat>
                          <StatLabel>Acitve patrons</StatLabel>
                          <StatNumber>{_count("active")}</StatNumber>
                          <StatHelpText>
                            <StatArrow type="increase" />
                            {_percentage("active")}%
                          </StatHelpText>
                        </Stat>
                      </Tab>
                      <Tab>
                        <Stat>
                          <StatLabel>New</StatLabel>
                          <StatNumber>{_count("new")}</StatNumber>
                          <StatHelpText>
                            <StatArrow type="increase" />
                            {_percentage("new")}%
                          </StatHelpText>
                        </Stat>
                      </Tab>
                      <Tab>
                        <Stat>
                          <StatLabel>Cancelled</StatLabel>
                          <StatNumber>{_count("cancelled")}</StatNumber>
                          <StatHelpText>
                            <StatArrow type="increase" />
                            {_percentage("cancelled")}%
                          </StatHelpText>
                        </Stat>
                      </Tab>
                    </TabList>

                    <TabPanels>
                      <TabPanel>
                        <>
                          <TableContainer>
                            <Table size="sm">
                              <Thead>
                                <Tr>
                                  <Th>Name</Th>
                                  <Th>Email</Th>
                                  <Th>Current tier</Th>
                                  <Th>Pledge</Th>
                                </Tr>
                              </Thead>
                              <Tbody>
                                {_showUsers("active").map((user) => (
                                  <Tr>
                                    <Td>{user.name}</Td>
                                    <Td>{user.email}</Td>
                                    <Td>{user.current_tier}</Td>
                                    <Td>{user.pledge}</Td>
                                  </Tr>
                                ))}
                              </Tbody>
                            </Table>
                          </TableContainer>
                        </>
                      </TabPanel>
                      <TabPanel>
                        <>
                          <TableContainer>
                            <Table size="sm">
                              <Thead>
                                <Tr>
                                  <Th>Name</Th>
                                  <Th>Email</Th>
                                  <Th>Current tier</Th>
                                  <Th>Pledge</Th>
                                </Tr>
                              </Thead>
                              <Tbody>
                                {_showUsers("new").map((user) => (
                                  <Tr>
                                    <Td>{user.name}</Td>
                                    <Td>{user.email}</Td>
                                    <Td>{user.current_tier}</Td>
                                    <Td>{user.pledge}</Td>
                                  </Tr>
                                ))}
                              </Tbody>
                            </Table>
                          </TableContainer>
                        </>
                      </TabPanel>
                      <TabPanel>
                        <>
                          <TableContainer>
                            <Table size="sm">
                              <Thead>
                                <Tr>
                                  <Th>Name</Th>
                                  <Th>Email</Th>
                                  <Th>Current tier</Th>
                                  <Th>Pledge</Th>
                                </Tr>
                              </Thead>
                              <Tbody>
                                {_showUsers("cancelled").map((user) => (
                                  <Tr>
                                    <Td>{user.name}</Td>
                                    <Td>{user.email}</Td>
                                    <Td>{user.current_tier}</Td>
                                    <Td>{user.pledge}</Td>
                                  </Tr>
                                ))}
                              </Tbody>
                            </Table>
                          </TableContainer>
                        </>
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
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

export default Insights;
