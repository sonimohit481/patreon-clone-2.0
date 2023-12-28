import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  background,
  color,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Input,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  AddIcon,
  ChevronDownIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
  SearchIcon,
} from "@chakra-ui/icons";

const Links = ["Dashboard", "Projects", "Team"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [OC, setOC] = useState(false);
  const navigate = useNavigate();
  return (
    <div style={{ position: "sticky", top: "0", zIndex: "1" }}>
      <Box bg={"white"} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box
              onClick={() => {
                navigate("/");
              }}
              cursor={"pointer"}
              _hover={{ opacity: "80%" }}
            >
              <svg
                fill="#ff424d"
                width={"1em"}
                viewBox="0 0 569 546"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Patreon logo</title>
                <g>
                  <circle
                    cx="362.589996"
                    cy="204.589996"
                    data-fill="1"
                    r="204.589996"
                  ></circle>
                  <rect
                    data-fill="1"
                    height="545.799988"
                    width="100"
                    x="0"
                    y="0"
                  ></rect>
                </g>
              </svg>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {/* <select name="product">
                <option value=""></option>
              </select> */}
              <Menu>
                <MenuButton
                  // onMouseEnter={onOpen}
                  // onMouseLeave={onClose}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  bg={"white"}
                >
                  Product
                </MenuButton>
                <MenuList>
                  <MenuItem icon={<AddIcon />}>
                    <h4>Lite</h4>
                    <div>
                      Simple Tools To setup recurring support from your fans
                    </div>
                  </MenuItem>
                  <MenuItem icon={<ExternalLinkIcon />}>
                    <h4>Pro</h4>
                    <div>
                      All The tools to build and grow a thriving membership
                      business
                    </div>
                  </MenuItem>
                  <MenuItem icon={<RepeatIcon />}>Open Closed Tab</MenuItem>
                  <MenuItem icon={<EditIcon />}>
                    <h4>Premium</h4>
                    <div>For established creators and creative businesses</div>
                  </MenuItem>
                </MenuList>
              </Menu>
            </HStack>
            <HStack>
              <Menu>
                <MenuButton
                  // onMouseEnter={() => setOC(true)}
                  // onMouseLeave={() => setOC(false)}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  bg={"white"}
                >
                  For Creators
                </MenuButton>
                <MenuList>
                  {/* mohit soni */}

                  <Link to={"Podcast"}>
                    <MenuItem icon={<AddIcon />}>Podcasters</MenuItem>
                  </Link>

                  <Link to={"Video"}>
                    <MenuItem icon={<ExternalLinkIcon />}>
                      Video creators
                    </MenuItem>
                  </Link>
                  <Link to={"Music"}>
                    <MenuItem icon={<EditIcon />}>Musicians</MenuItem>
                  </Link>
                  <Link to={"VisualArtist"}>
                    <MenuItem icon={<EditIcon />}>Visual Artists</MenuItem>
                  </Link>
                  <Link to={"Community"}>
                    <MenuItem icon={<EditIcon />}>Communities</MenuItem>
                  </Link>
                  <Link to={"Writing"}>
                    <MenuItem icon={<EditIcon />}>
                      Writers and Journalists
                    </MenuItem>
                  </Link>
                  <Link to={"Gaming"}>
                    <MenuItem icon={<EditIcon />}>Gaming Creators</MenuItem>
                  </Link>
                  <Link to={"Nonprofits"}>
                    <MenuItem icon={<EditIcon />}>Nonprofits</MenuItem>
                  </Link>
                  <Link to={"Toturial"}>
                    <MenuItem icon={<EditIcon />}>
                      Tutorials and Education
                    </MenuItem>
                  </Link>
                  <Link to={"LocalBisnesses"}>
                    <MenuItem icon={<EditIcon />}> Local Businesses</MenuItem>
                  </Link>
                  <MenuItem icon={<EditIcon />}>
                    Creators-of-all-kinds
                    <Link to={"Podcast"}>Podcasters</Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            </HStack>
            <HStack>
              <span>Pricing</span>
            </HStack>
            <HStack>
              <Menu trigger={"hover"}>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  bg={"white"}
                >
                  Resources
                </MenuButton>
                <MenuList>
                  <MenuItem icon={<AddIcon />}>Blog</MenuItem>
                  <MenuItem icon={<ExternalLinkIcon />}>
                    Creator Community
                  </MenuItem>
                  <MenuItem icon={<RepeatIcon />}>Events</MenuItem>
                  <MenuItem icon={<EditIcon />}>Patreon U</MenuItem>
                  <MenuItem icon={<EditIcon />}>App Directory</MenuItem>
                  <MenuItem icon={<EditIcon />}>Help Center and FAQ</MenuItem>
                </MenuList>
              </Menu>
            </HStack>
            <HStack>
              <span>Starter Kits </span>
            </HStack>
          </HStack>
          <Stack
            spacing={4}
            style={{
              width: "21%",
              padding: "2%",
              marginRight: "0",
              marginLeft: "178px",
            }}
          >
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.300" />}
              />
              <Input
                type="tel"
                placeholder="Search For Patreons"
                style={{
                  borderRadius: "25px",
                  backgroundColor: "rgb(245, 244, 242)",
                }}
              />
            </InputGroup>
          </Stack>
          <span
            onClick={() => navigate("/login")}
            style={{ marginRight: "0", fontWeight: "500", cursor: "pointer" }}
          >
            Log In
          </span>
          <Button
            onClick={() => {
              navigate("/signup");
            }}
            style={{
              borderRadius: "25px",
              backgroundColor: "rgb(255, 66, 77)",
              color: "white",
              marginLeft: "0",
              marginRight: "4px",
            }}
          >
            Create on Patreon
          </Button>
        </Flex>
      </Box>
    </div>
  );
}
