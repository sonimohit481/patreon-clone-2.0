import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  CloseButton,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

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
                margin="0px">
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

function AlertCard() {
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: true });

  return isVisible ? (
    <Alert status="success">
      <AlertIcon />
      <Box>
        <AlertTitle>Success!</AlertTitle>
        <AlertDescription>
          Your application has been received. We will review your application
          and respond within the next 48 hours.
        </AlertDescription>
      </Box>
      <CloseButton
        alignSelf="flex-start"
        position="relative"
        right={-1}
        top={-1}
        onClick={onClose}
      />
    </Alert>
  ) : (
    <Button onClick={onOpen}>Show Alert</Button>
  );
}
