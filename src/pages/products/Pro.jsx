import { Button, Center, Flex, Heading,Text } from '@chakra-ui/react'
import React from 'react'
import {useNavigate} from "react-router-dom"
import { AllPlansComponents } from './AllPlansComponents'
function Pro() {
  const theme="rgb(31, 147, 151)"
  const navigate=useNavigate()
  return (
    <>
    <div>
      <div style={{backgroundColor:theme, width:"100%", display:"flex", justifyContent:"center", color:"white"}}>
        <div >
          <img style={{width:"600px", padding:"50px"}} src="https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/product-pro-01-header_2x.png" alt="" />
        </div>
        <div style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
            <Heading as='h5' size='sm' padding={"5px 5px 20px 5px"}>
            PATREON PRO
            </Heading  >
            <Heading as='h2' size='2xl' padding={"5px 5px 25px 5px"}>
            All the tools to
            </Heading>
            <Heading as='h2' size='2xl' padding={"5px 5px 25px 5px"}>
            master membership
            </Heading>
            <Text padding={"5px 5px 15px 5px"} fontSize='md'>Build a thriving membership business that provides meaningful income for you<br/> and a rewarding experience for your patrons.</Text>
            <Button maxW={"200px"} onClick={()=>navigate("/signUp")} borderRadius={"100px"} bg='red.400' >Get started </Button>
        </div>
      </div>
      <div style={{backgroundColor:"white", width:"100%", display:"flex", justifyContent:"center", color:"white", paddingTop:"70px"}}>
        <div >
          <img style={{width:"400px", padding:"50px"}} src="https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/product-pro-02-features-engage-your-patrons_2x.png" alt="" />
        </div>
        <div style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
        <Heading as='h3' size='lg' color="black" paddingBottom="40px">
        Engage your patrons 
        </Heading>
        <Heading as='h4' size='md' color={theme}padding="30px 5px 2px 2px">
          Hosted creator page
        </Heading>
        <Text fontSize='sm' color="grey">Your creator page is where you invite fans to become patrons, showcase<br/> the benefits you offer, and post updates and content just for them.</Text>
        <Heading as='h4' size='md' color={theme}padding="30px 5px 2px 2px">
        Unlimited membership tiers
        </Heading>
        <Text fontSize='sm' color="grey">Membership tiers are levels of membership with different benefits and<br/> prices. We help you optimize your tiers, and track and deliver benefits to<br/> patrons.</Text>
        <Heading as='h4' size='md' color={theme}padding="30px 5px 2px 2px">
        Patron communication tools
        </Heading>
        <Text fontSize='sm' color="grey">You own the relationship with patrons. You can communicate with them <br/>directly via email, posts on your page, or with direct messaging.</Text>
         </div>
      </div>
      <div style={{backgroundColor:"white", width:"100%", display:"flex", justifyContent:"center", color:"white", paddingTop:"20px"}}>
        <div style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
        <Heading as='h3' size='lg' color="black" paddingBottom="40px">
        Grow your business
        </Heading>
        <Text fontSize='xl' color="grey">Give yourself a raise! Offer something special for a limited time to get<br/> more patrons.</Text>
        <Heading as='h4' size='md' color={theme} padding="20px 5px 2px 2px">
        Special Offers promo tool
        </Heading>
        <Text fontSize='sm' color="grey">Consult with a trusted advisor who helps you review your progress, grow<br/> your business, and plan for the future.</Text>
        <Heading as='h4' size='md' color={theme} padding="20px 5px 2px 2px">
        Analytics and insights
        </Heading>
        <Text fontSize='sm' color="grey">Easily check the health of your membership and uncover insights to help<br/> you grow and improve.</Text>
        <Heading as='h4' size='md' color={theme} padding="20px 5px 2px 2px">
        Creator-led workshops
        </Heading>
        <Text fontSize='sm' color="grey">Access our livestream workshops featuring top creators. Learn from<br/> creators in your field about how to build a creative career, both on and<br/> off Patreon.</Text>
         
         </div>
         
         <div >
          <img style={{width:"400px", padding:"0px"}} src="https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/product-pro-03-features-grow-your-business_2x.png" alt="" />
        </div>
      </div>
    </div>
    <AllPlansComponents color={"rgb(31, 147, 151)"} type={"Premium"}/>
    </>
  )
}

export default Pro