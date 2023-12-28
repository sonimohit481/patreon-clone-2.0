import React from "react";
import { Box, Button, Flex, Image, Text, Grid } from "@chakra-ui/react";

function CreaterHero({ props }) {
  // sa,ple data base
  // const obj = {
  //   Maintitle: "MUSICIANS",
  //   Maintitle1: "musicians ",
  //   Mainimage:
  //     "https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/musicians-v3-zolajesus.jpg",
  //   Maindescription:
  //     "Connect directly and build community with your most engaged fans.Test new work in a supportive environment. Establish a reliable, recurring revenue stream.",
  //   midsetion1title: "Predictable & sustainable revenue",
  //   midsection1desc:
  //     "Monthly pledges means you know exactly what you're getting paid each month.",
  //   midsetion2title: "Retain full control",
  //   midsection2desc:
  //     " Still want to run ads, do brand deals, or work with sponsors? Cool with us!",
  //   midsetion3title: "Your music, your schedule",
  //   midsection3desc:
  //     "Posting tracks weekly? Waiting to release an album? No matter what, you call the shots.",
  //   image1:
  //     "https://c10.patreonusercontent.com/3/eyJ3IjoyMDB9/patreon-media/p/campaign/2476694/13e6a9537bdb4e90b3ae2ec6fe7a8d22/4.jpg?token-time=2145916800&token-hash=yNzsQHMHLjd5HOOLl1YFlfvsiUxtzVmFIgwSexUDBCs%3D",
  //   image1title: "Ben Folds",
  //   image2:
  //     "https://c10.patreonusercontent.com/3/eyJ3IjoyMDB9/patreon-media/p/campaign/2139240/cf145f0e1b1b4be5b5ffa6ff048c4668/1.jpg?token-time=2145916800&token-hash=I0XKN7taOSf0oswHgWXtAKu2ItFNphwnN9JOmeTCuUE%3D",
  //   image2title: "Alissa White-Gluz",
  //   image3:
  //     "https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/RAC.jpg",
  //   image3title: "RAC",
  //   image4:
  //     "https://c10.patreonusercontent.com/3/eyJ3IjoyMDB9/patreon-media/p/campaign/3317958/c1e89a96d6b544a18f444376c31773e3/4.jpg?token-time=2145916800&token-hash=Jt1UXFa4F-90YVYebqND_qlPAUCIHt62Fh1B6pXZ-40%3D",
  //   image4title: "KIMBRA",
  //   image5:
  //     "https://c10.patreonusercontent.com/3/eyJ3IjoyMDB9/patreon-media/p/campaign/71481/793ffac76193494c9d4c3bcf9ec2b4fd/9.jpg?token-time=2145916800&token-hash=0OoRUxRvO7mJkAHIA0anmGk5ATvjU-P3gxhJZKMKt-8%3D",
  //   image5title: "Amanda Palmer",
  //   image6:
  //     "https://c10.patreonusercontent.com/3/eyJ3IjoyMDB9/patreon-media/p/campaign/3137232/4ea330ff8eb949a9ae7266ffee698aa3/4.jpg?token-time=2145916800&token-hash=CD6aUlBj8v9Iy2n2R3y8dcSTCCzTQTdxTDZa2-FKNlw%3D",
  //   image6title: "CORY HENRY THE GATHERING",
  //   image7:
  //     "https://c10.patreonusercontent.com/3/eyJ3IjoyMDB9/patreon-media/p/campaign/3388179/241418f34e654b9ba4f498945590c3ca/2.jpg?token-time=2145916800&token-hash=wGb5MunB4BVG07u0Y0pjxgnlrf8N3k9qDEBimEk5tUM%3D",
  //   image7title: "Cautious Clay",
  //   image8:
  //     "https://c10.patreonusercontent.com/3/eyJ3IjoyMDB9/patreon-media/p/campaign/90726/aa8d1b2c88064b5cbe29c6b7d3312f5f/9.jpeg?token-time=2145916800&token-hash=Mn4fbelytRt1MjiUXHjYktmCtE5CFcrYCjln_p8u0oE%3D",
  //   image8title: "Jacob Collier",

  //   bottomimage:
  //     "https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/musician-benfolds-testimonial_2x.png",
  //   bottomname: "BEN FOLDS",
  //   bottomtitle: "Musician",
  //   bottommsg:
  //     "Like all recording artists, I've kept my eye on what creative tools the internet might afford. Patreon is unique; it's a platform that interests me. I've spent an entire career traveling, coming to your towns to play music. Now I'm inviting you to my place.",
  // };
  return (
    <>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="center"
        py={20}
        // gap={10}
      >
        <Flex w="30%">
          <Image
            alt={"Music  Image"}
            objectFit={"cover"}
            src={props.Mainimage}
          />
        </Flex>
        <Flex w="40%" direction={"column"} my="auto" fontSize="1.2em">
          <Box>
            <Text fontWeight="900" fontSize="2.2em">
              PATREON FOR {props.Maintitle}
            </Text>
          </Box>
          <Box>
            <Text py={8}>{props.Maindescription}</Text>
          </Box>
          <Box>
            <Button colorScheme="red" size={"md"} borderRadius="20" px="4">
              <a href="http://">Get Started</a>
            </Button>
          </Box>
        </Flex>
      </Flex>
      {/* next div */}
      <Grid gap={2} backgroundColor="#003457" color="white" py={20}>
        <Flex w="70%" mx={"auto"} direction="column">
          <Box
            textAlign={"center"}
            fontWeight="bold"
            color="white"
            fontSize={"35px"}
          >
            <Text>Why should {props.Maintitle1} use membership?</Text>
          </Box>
          <Box
            display="flex"
            // alignContent={"center"}
            justifyContent="space-evenly"
            direction="row"
            gap={"10"}
          >
            <Box textAlign="center">
              <Box width="35%" mx="auto" py={"10"}>
                <svg viewBox="0 0 64 64" fill="transparent">
                  <path
                    stroke="#328AC7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M42.923 45.894l11.36-4.253c2.846-.955 5.923.202 7.692 2.893-31.36 17.678-21.205 17.59-48.718 7.233L3 59"
                  ></path>
                  <path
                    stroke="#328AC7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M26.077 47.398H40.18c1.026.203 2.051-.289 2.64-1.273a3.314 3.314 0 0 0 0-3.24c-.589-.984-1.614-1.476-2.64-1.273h-7.693c-3.05-3.53-7.18-5.613-11.538-5.787h-7.693L3 41.612M18.384 5.447c0-.81.564-1.447 1.282-1.447h35.898c.718 0 1.282.637 1.282 1.447v20.252c0 .81-.564 1.447-1.282 1.447H19.666c-.692 0-1.282-.637-1.282-1.447V5.447zM45.436 4l11.41 10.126M47.025 27.146l9.821-10.127M18.384 17.02l9.82 10.126M18.384 14.127L29.77 4"
                  ></path>
                  <path
                    stroke="#328AC7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M37.616 19.913c2.128 0 3.846-1.939 3.846-4.34 0-2.402-1.718-4.34-3.846-4.34-2.129 0-3.846 1.938-3.846 4.34 0 2.401 1.743 4.34 3.846 4.34zM42.923 45.894l11.36-4.253c2.846-.955 5.923.202 7.692 2.893-31.36 17.678-21.205 17.59-48.718 7.233L3 59"
                  ></path>
                  <path
                    stroke="#328AC7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M26.077 47.398H40.18c1.026.203 2.051-.289 2.64-1.273a3.314 3.314 0 0 0 0-3.24c-.589-.984-1.614-1.476-2.64-1.273h-7.693c-3.05-3.53-7.18-5.613-11.538-5.787h-7.693L3 41.612"
                  ></path>
                  <path
                    stroke="#E3F0FA"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M18.384 5.447c0-.81.564-1.447 1.282-1.447h35.898c.718 0 1.282.637 1.282 1.447v20.252c0 .81-.564 1.447-1.282 1.447H19.666c-.692 0-1.282-.637-1.282-1.447V5.447zM45.436 4l11.41 10.126M47.025 27.146l9.821-10.127M18.384 17.02l9.82 10.126M18.384 14.127L29.77 4"
                  ></path>
                  <path
                    stroke="#E3F0FA"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M37.616 19.913c2.128 0 3.846-1.939 3.846-4.34 0-2.402-1.718-4.34-3.846-4.34-2.129 0-3.846 1.938-3.846 4.34 0 2.401 1.743 4.34 3.846 4.34z"
                  ></path>
                </svg>
              </Box>
              <Text fontSize="25" fontWeight={"750"}>
                {props.midsetion1title}
              </Text>
              <Text>{props.midsection1desc}</Text>
            </Box>
            <Box textAlign="center">
              <Box width="35%" mx="auto" py={"10"}>
                <svg viewBox="0 0 64 64" fill="transparent">
                  <path
                    stroke="#E3F0FA"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.352 34.567l1.195-3.081-2.79-7.196a2.415 2.415 0 0 1 .96-2.903l6.555-4.21 2.046-7.431a2.47 2.47 0 0 1 2.512-1.794l7.818.39 6.096-4.838a2.507 2.507 0 0 1 3.107 0l6.096 4.839 7.819-.383a2.47 2.47 0 0 1 2.512 1.794l2.045 7.432 6.555 4.209a2.412 2.412 0 0 1 .96 2.903l-2.787 7.196 2.787 7.193a2.415 2.415 0 0 1-.96 2.905l-6.555 4.196-2.056 7.435c-.303 1.106-1.349 1.854-2.512 1.796l-7.819-.383-6.096 4.828"
                  ></path>
                  <path
                    stroke="#328AC7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2 52.843l4.416 6.841M26.421 22.365l16.784 26.004"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    stroke="#328AC7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M42.323 47L5.533 58.318l-2.65-4.106 24.421-30.478L42.323 47v0z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    stroke="#328AC7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.482 55.871l2.336 3.53a5.44 5.44 0 0 0 3.522 2.45 5.517 5.517 0 0 0 4.228-.84c2.586-1.83 3.272-5.326 1.565-7.972l-.435-.619"
                  ></path>
                </svg>
              </Box>
              <Text fontSize="25" fontWeight={"750"}>
                {props.midsetion2title}
              </Text>
              <Text>{props.midsection2desc}</Text>
            </Box>
            <Box textAlign="center">
              <Box width="35%" mx="auto" py={"10"}>
                <svg viewBox="0 0 64 64" fill="transparent">
                  <path
                    fill-rule="evenodd"
                    stroke="#E3F0FA"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M60.347 39.775L40 59.785 30 61.75l2-9.834 20.347-20.01c2.203-2.165 5.775-2.165 7.978 0l.022.022A5.498 5.498 0 0 1 62 35.852a5.498 5.498 0 0 1-1.654 3.923v0z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    stroke="#328AC7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M24 46.236H6c-2.21 0-4-1.76-4-3.933v-31.43C2 8.701 3.79 6.94 6 6.94h36c2.21 0 4 1.762 4 3.934v11.762"
                  ></path>
                  <path
                    stroke="#328AC7"
                    stroke-linejoin="round"
                    d="M2 18.701h44"
                  ></path>
                  <path
                    stroke="#328AC7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.981 10.834V2.967M33.981 10.834V2.967"
                  ></path>
                </svg>
              </Box>
              <Text fontSize="25" fontWeight={"750"}>
                {props.midsetion3title}
              </Text>
              <Text>{props.midsection3desc}</Text>
            </Box>
          </Box>
        </Flex>
      </Grid>
      {/* <hr border={"1px solid black"} fill="red" /> */}
      <Flex direction={"column"} justify="center" py="100" px="300">
        <Box
          textAlign={"center"}
          fontWeight="bold"
          color="Black"
          fontSize={"40px"}
          pb={"50"}
        >
          <Text>Popular features for {props.Maintitle1}</Text>
        </Box>
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={3}
          textAlign="Flex-start"
          justifyContent={"space-evenly"}
          fontSize={"20"}
        >
          <Box>
            <Image src={props.popularsection1image} boxShadow="2xl" w="80%" />
            <Text fontWeight={"700"} color="red" py={5}>
              {props.popularsection1title}
            </Text>
            <Text>{props.popularsection1desc}</Text>
          </Box>
          <Box>
            <Image src={props.popularsection2image} boxShadow="2xl" w="80%" />
            <Text fontWeight={"700"} color="red" py={5}>
              {props.popularsection2title}
            </Text>
            <Text>{props.popularsection2desc}</Text>
          </Box>
          <Box>
            <Image src={props.popularsection3image} boxShadow="2xl" w="80%" />
            <Text fontWeight={"700"} color="red" py={5}>
              {props.popularsection3title}
            </Text>
            <Text>{props.popularsection3desc}</Text>
          </Box>
        </Grid>
      </Flex>
      <Flex
        direction={"column"}
        gap="10"
        align="center"
        bgColor={"#F5F4F2"}
        p="20"
      >
        <Flex
          w={"80%"}
          align="center"
          // border={"1px solid red"}
          justify="center"
          direction="column"
        >
          <Box>
            <Text fontSize={"40px"} fontWeight="800" color={"black"} pb="10">
              Notable {props.Maintitle1} on Patreon
            </Text>
          </Box>
          <Grid templateColumns="repeat(4, 1fr)" gap={8} textAlign="center">
            <Box>
              <Image src={props.image1} h="250px" w="200px" />
              <Text fontSize={"20px"} fontWeight="bold">
                {props.image1title}
              </Text>
            </Box>
            <Box>
              <Image src={props.image2} h="250px" w="200px" />
              <Text fontSize={"20px"} fontWeight="bold">
                {props.image2title}
              </Text>
            </Box>
            <Box>
              <Image src={props.image3} h="250px" w="200px" />
              <Text fontSize={"20px"} fontWeight="bold">
                {props.image3title}
              </Text>
            </Box>
            <Box>
              <Image src={props.image4} h="250px" w="200px" />
              <Text fontSize={"20px"} fontWeight="bold">
                {props.image4title}
              </Text>
            </Box>
            <Box>
              <Image src={props.image5} h="250px" w="200px" />
              <Text fontSize={"20px"} fontWeight="bold">
                {props.image5title}
              </Text>
            </Box>
            <Box>
              <Image src={props.image6} h="250px" w="200px" />
              <Text fontSize={"20px"} fontWeight="bold">
                {props.image6title}
              </Text>
            </Box>
            <Box>
              <Image src={props.image7} h="250px" w="200px" />
              <Text fontSize={"20px"} fontWeight="bold">
                {props.image7title}
              </Text>
            </Box>
            <Box>
              <Image src={props.image8} h="250px" w="200px" />
              <Text fontSize={"20px"} fontWeight="bold">
                {props.image8title}
              </Text>
            </Box>
          </Grid>
        </Flex>
      </Flex>
      <Box
        p={"70"}
        bgImage="url('https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/Halftone-background.svg')"
        h="auto"
        // alignContent={"center"}
      >
        <Flex
          w="80%"
          direction={"row"}
          alignContent="center"
          justify={"center"}
          mx="auto"
        >
          <Box textAlign={"center"} px="20">
            <Image src={props.bottomimage} w="700px" pb={"8"} />
            <Text fontSize="18" fontWeight="bold">
              {props.bottomname}
            </Text>
            <Text>{props.bottomtitle}</Text>
          </Box>
          <Box alignItems={"center"} pl="30">
            <Text fontSize="38" fontWeight="bold">
              "{props.bottommsg}"
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box>
        <Flex
          direction={"column"}
          w="60%"
          mx={"auto"}
          textAlign="center"
          p={"10"}
        >
          <Text fontSize={"40"} fontWeight={"bold"}>
            Ready to build your membership business?
          </Text>
          <Box>
            <Button
              colorScheme="red"
              size={"lg"}
              borderRadius="20"
              px="6"
              py={"5"}
              mt="10"
            >
              <a href="http://">Get Started</a>
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default CreaterHero;
