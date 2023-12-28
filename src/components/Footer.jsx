// import { ReactNode } from "react";

import {
  Box,
  Icon,
  Container,
  Link,
  Flex,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";

const Logo = (props) => {
  return (
    <svg
      // height="546px"
      version="1.1"
      viewBox="0 0 569 546"
      width="50px"
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
    >
      <title>Patreon logo</title>
      <g>
        <circle
          cx="362.589996"
          cy="204.589996"
          data-fill="1"
          r="204.589996"
        ></circle>
        <rect data-fill="1" height="545.799988" width="100" x="0" y="0"></rect>
      </g>
    </svg>
  );
};

// const ListHeader = ({ children }: { children: ReactNode }) => {
//   return (
//     <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
//       {children}
//     </Text>
//   );
// };

export default function Footer() {
  return (
    <Box bg={useColorModeValue("black")} color={useColorModeValue("white")}>
      <Container as={Stack} maxW={"6xl"} py={10} alignItems={"center"}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6} mr={"90px"}>
            <Box>
              <Logo color={useColorModeValue("gray.700", "white")} />
            </Box>
            <Link
              href={"#"}
              border={"2px solid white"}
              borderRadius={"10px"}
              px={"10"}
              py={"6"}
            >
              Language: English (United States)
            </Link>
            <Link
              href={"#"}
              border={"2px solid white"}
              borderRadius={"10px"}
              px={"10"}
              py={"6"}
            >
              Currency: USD
            </Link>
          </Stack>
          <Stack align={"flex-start"}>
            <Text fontWeight="700">PRODUCT</Text>
            <Link href={"#"}>Lite</Link>
            <Link href={"#"}>Pro</Link>
            <Link href={"#"}>Premium</Link>
            <Link href={"#"}>Pricing</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <Text fontWeight="700">FOR CREATORS</Text>
            <Link href={"#"}>Podcasters</Link>
            <Link href={"#"}>Video Creators</Link>
            <Link href={"#"}>Musicians</Link>
            <Link href={"#"}>Visual Artists</Link>
            <Link href={"#"}>Writers & Journalists</Link>
            <Link href={"#"}>Communities</Link>
            <Link href={"#"}>Gaming Creators</Link>
            <Link href={"#"}>Nonprofits</Link>
            <Link href={"#"}>Tutorials and Education</Link>
            <Link href={"#"}>Local Businesses</Link>
            <Link href={"#"}>Creators-of-all-kinds</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <Text fontWeight="700">RESOURCES</Text>
            <Link href={"#"}>Blog</Link>
            <Link href={"#"}>Patreon U</Link>
            <Link href={"#"}>Help Center & FAQ</Link>
            <Link href={"#"}>App Directory</Link>
            <Link href={"#"}>Developers</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <Text fontWeight="700">COMPANY</Text>
            <Link href={"#"}>About</Link>
            <Link href={"#"}>Press</Link>
            <Link href={"#"}>Careers</Link>
            <Link href={"#"}>Privacy</Link>
            <Link href={"#"}>Policy & Terms</Link>
            <Link href={"#"}>Accessibility</Link>
            <Link href={"#"}>Impressum</Link>
          </Stack>
        </SimpleGrid>
        <Flex direction="column" p="10" w="30%">
          <SimpleGrid
            templateColumns={{ sm: "1fr 1fr", md: "1fr 1fr 1fr 1fr" }}
            spacing={8}
          >
            <Icon as={FaTwitter} w={7} h={7} />
            <Icon as={FaFacebook} w={7} h={7} />
            <Icon as={FaInstagram} w={7} h={7} />
            <Icon as={FaYoutube} w={7} h={7} />
          </SimpleGrid>
          <Flex direction={"row"} justifyContent="space-between" p="5">
            <Text fontSize={"sm"}>© 2022 Patreon </Text>
            <Text fontSize={"sm"}>Sitemap </Text>
          </Flex>
          <Box>
            <Text fontSize={"sm"}>
              600 Townsend Street, Suite 500 San Francisco, CA 94103 USA Phone:
              +1 (833) 972-8766
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
