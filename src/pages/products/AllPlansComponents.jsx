import { Box, Button, Center, Flex, Grid, GridItem, Heading, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import {useNavigate} from "react-router-dom"
import {BellIcon} from"@chakra-ui/icons"
export const AllPlansComponents = ({color, type}) => {

    const navigate=useNavigate()
  return (
    <Center bg='white' h='200px' color='white'>
    <div style={{display:"flex", flexDirection:"column",  paddingTop:"500px", width:"850px"}} >
        
        <div>
            <Flex>
                <Box p='4' >
                <Heading color={"black"}>All plans include:</Heading>
                </Box>
                <Spacer />
                <Box p='4' >
                <Button onClick={()=>navigate("/pricing")} borderRadius={"100px"} bg='blue.200' color={"black"}>Compare all plans</Button>
                </Box>
            </Flex>
        </div>
        <div>
        <Grid templateColumns='repeat(3, 1fr)' gap={3} color={"black"} padding="20px">
            <GridItem w='100%' h='auto'  >
                <BellIcon/>
                <Heading as='h3' size='md'color={color}>
                Direct relationships
                </Heading>
                <Text  fontSize='sm'>Develop relationships with your patrons <br/>through patron-only posts, messages, or <br/>directly via email.</Text>
            </GridItem>
            <GridItem w='100%' h='auto'  >
            <BellIcon/>
                <Heading as='h3' size='md'color={color}>
                Business tools
                </Heading>
                <Text fontSize='sm'>Track patron payments, lifetime value, and<br/> notes to help manage relationships with<br/> them directly.</Text>
            </GridItem>
            <GridItem w='100%' h='auto'  >
            <BellIcon/>
                <Heading as='h3' size='md'color={color}>
                Flexible payouts
                </Heading>
                <Text fontSize='sm'>Pay yourself whenever you want, or<br/> receive monthly auto payouts from your <br/>creator balance via direct deposit, PayPal,<br/> or Payoneer.</Text>
            </GridItem>
            <GridItem w='100%' h='auto'  >
            <BellIcon/>
                <Heading as='h3' size='md'color={color}>
                Patron support
                </Heading>
                <Text fontSize='sm'>Rest easy knowing we handle your<br/> patrons’ questions, payments, and <br/>concerns to ensure they’re taken care of.</Text>
            </GridItem>
            <GridItem w='100%' h='auto'  >
            <BellIcon/>
                <Heading as='h3' size='md'color={color}>
                Creator-first education
                </Heading>
                <Text fontSize='sm'>Learn how to effectively run your creative<br/> business with our workshops, world-class<br/> knowledge base, and creator resources.</Text>
            </GridItem>
            <GridItem w='100%' h='auto'  >
            <BellIcon/>
                <Heading as='h3' size='md'color={color}>
                Mobile app
                </Heading>
                <Text fontSize='sm'>Message your patrons and monitor your <br/>membership business with our native iOS<br/> and Android apps.</Text>
            </GridItem>
        </Grid>
        </div>
        <div style={{display:"flex", justifyContent:"center", flexDirection:"column", marginTop:"100px"}}>
            <Heading as='h5' size='2xl'  padding={"5px"}noOfLines={1} color={"black"} textAlign={"center"}>
                Join 200,000+ creators using Patreon
            </Heading>
            <Heading as='h5' size='2xl' padding={"10px"} noOfLines={1} color={"black"}textAlign={"center"}>
                today
            </Heading>
            <Button  maxW={"220px"} onClick={()=>navigate("/signUp")} borderRadius={"100px"} bg='red.400' >Get started with {type} </Button>
        </div>        
    </div>
    </Center> 
  )
}
