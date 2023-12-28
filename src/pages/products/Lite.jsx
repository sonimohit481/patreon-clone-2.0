import { Button, Center, Flex, Heading,Text } from '@chakra-ui/react'
import React from 'react'
import {useNavigate} from "react-router-dom"
import { AllPlansComponents } from './AllPlansComponents'

function Lite() {
const theme="rgb(210, 149, 62)"

  const navigate=useNavigate()
  return (
    <>
    <div>
      <div style={{backgroundColor:theme, width:"100%", display:"flex", justifyContent:"center",color:"white"}}>
        <div >
          <img style={{width:"600px", padding:"50px"}} src="https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/product-lite-01-header_2x.png" alt="" />
        </div>
        <div style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
            <Heading as='h5' size='sm' padding={"5px 5px 20px 5px"}>
            PATREON LITE
            </Heading  >
            <Heading as='h2' size='2xl' padding={"5px 5px 25px 5px"}>
            Just the basics
            </Heading>
            <Text padding={"5px 5px 15px 5px"} fontSize='md'>Simple tools to set up recurring support from your fans and run a membership<br/> business.</Text>
            <Button maxW={"200px"} onClick={()=>navigate("/signUp")} borderRadius={"100px"} bg='red.400' >Get started </Button>
        </div>
      </div>
      <div style={{backgroundColor:"white", width:"100%", display:"flex", justifyContent:"center", color:"white", padding:"70px"}}>
        <div >
          <img style={{width:"600px", padding:"50px"}} src="https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/product-lite-02-features_2x.png" alt="" />
        </div>
        <div style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
        <Heading as='h3' size='lg' color="black" paddingBottom="40px">
          Membership essentials    
        </Heading>
        <Heading as='h4' size='md' color={theme}padding="30px 5px 2px 2px">
          Hosted creator page
        </Heading>
        <Text fontSize='sm' color="grey">Your creator page on patreon.com is where you invite fans to become<br/> patrons, and post updates and content just for them.</Text>
        <Heading as='h4' size='md' color={theme}padding="30px 5px 2px 2px">
        Patron communication tools
        </Heading>
        <Text fontSize='sm' color="grey">You own the relationship with patrons. Communicate directly via email,<br/> posts on your page, or with direct messaging.</Text>
        <Heading as='h4' size='md' color={theme}padding="30px 5px 2px 2px">
        Patreon workshops
        </Heading>
        <Text fontSize='sm' color="grey">Learn from our Creator Success team about how to set up your page, <br/>what to offer, how to talk about Patreon, and more.</Text>
         
         </div>
      </div>
      <div></div>
    </div>
    <AllPlansComponents color={"rgb(232, 158, 20)"} type={"Lite"}/>
    </>
  )
}

export default Lite