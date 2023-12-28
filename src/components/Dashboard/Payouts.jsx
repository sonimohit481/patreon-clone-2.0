import React from "react";

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
  Text,
} from "@chakra-ui/react";
import { Stat, StatNumber, StatHelpText } from "@chakra-ui/react";

function Payouts() {
  return (
    <>
      <Box fontSize={"sm"} margin={"70px"}>
        <Heading size={"lg"}>Payouts</Heading>

        <Tabs isLazy>
          <TabList>
            <Tab>Withdraw</Tab>
            <Tab>Documents</Tab>
          </TabList>
          <TabPanels>
            {/* initially mounted */}
            <TabPanel>
              <Box
                bgColor={"white"}
                borderWidth={"1px"}
                borderRadius="lg"
                overflow="hidden"
                padding={"30px"}
                margin="0px"
              >
                <Flex>
                  <Stat>
                    {/* <StatLabel>Collected Fees</StatLabel> */}
                    <p>Available to withdraw</p>
                    <StatNumber>
                      <Text>₹0.00</Text>
                    </StatNumber>
                    <StatHelpText>Feb 12 - Feb 28</StatHelpText>
                  </Stat>
                  <Button size={"sm"} p="20px">
                    Add payment method
                  </Button>
                </Flex>
              </Box>
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
export default Payouts;
