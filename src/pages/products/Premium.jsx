import { Button, Center, Flex, Grid, GridItem, Heading,Text } from '@chakra-ui/react'
import React from 'react'
import {useNavigate} from "react-router-dom"
import { AllPlansComponents } from './AllPlansComponents'

function Premium() {
  const navigate=useNavigate()
  const theme="rgb(24, 9, 87)"
  return (
    <>
    <div>
      <div style={{backgroundColor:theme, width:"100%", display:"flex", justifyContent:"center", color:"white"}}>
        <div >
          <img style={{width:"600px", padding:"50px"}} src="https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/product-premium-01-header_2x.png" alt="" />
        </div>
        <div style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
            <Heading as='h5' size='sm' padding={"5px 5px 20px 5px"}>
            PATREON PREMIUM
            </Heading  >
            <Heading as='h2' size='2xl' padding={"5px 5px 25px 5px"}>
            For established
            </Heading>
            <Heading as='h2' size='2xl' padding={"5px 5px 25px 5px"}>
            creative businesses
            </Heading>
            <Text padding={"5px 5px 15px 5px"} fontSize='md'>Step into a partnership with Patreon where you get everything in Pro, plus<br/> more influence, opportunities, and access. Work 1:1 with a Dedicated Partner<br/>Manager to help you grow your membership, take advantage of our full service<br/>Merch solution, and access our Team Accounts feature.</Text>
            <Button maxW={"200px"} onClick={()=>navigate("/signUp")} borderRadius={"100px"} bg='red.400' >Get started </Button>
        </div>
      </div>
      <div style={{backgroundColor:"white", width:"100%", display:"flex", justifyContent:"center", color:"white", padding:"70px"}}>
        <div >
          <img style={{width:"600px", padding:"50px"}} src="https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/premium-partnership-with-patreon.lg_1x.png" alt="" />
        </div>
        <div style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
        <Heading as='h3' size='lg' color="black" paddingBottom="40px">
        Partnership with Patreon    
        </Heading>
        <Text fontSize='xl' color="grey">For creators in Premium, we partner with you to amplify <br/>your success and enhance your experience.</Text>
        <Heading as='h4' size='md' color={theme} padding="20px 5px 2px 2px">
        Influence
        </Heading>
        <Text fontSize='sm' color="grey">Get early insight into upcoming product changes, early access to new<br/> features in development, and the opportunity to influence our product<br/> roadmap.</Text>
        <Heading as='h4' size='md' color={theme} padding="20px 5px 2px 2px">
        Opportunities
        </Heading>
        <Text fontSize='sm' color="grey">We identify the right joint marketing opportunities for you to share your<br/> story - through live events, performances, speaking opportunities, PR, <br/>social, and more.</Text>
        <Heading as='h4' size='md' color={theme} padding="20px 5px 2px 2px">
        Invite-only Events
        </Heading>
        <Text fontSize='sm' color="grey">Join a vibrant community of established creators at Patreon-sponsored<br/> events and networking opportunities. We also facilitate 1:1 introductions<br/> to other creators mutually interested in collaboration.</Text>
         
         </div>
      </div>
      <div style={{backgroundColor:"white", width:"100%", display:"flex", justifyContent:"center", color:"white", padding:"10px"}}>
        <div style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
        <Heading as='h3' size='lg' color="black" paddingBottom="40px">
        Work 1:1 with an expert   
        </Heading>
        <Text fontSize='xl' color="grey">Your Dedicated Partner Manager is a membership<br/> expert whose mission is to grow your earnings quickly,<br/> keep you informed, and save you time.</Text>
        <Heading as='h4' size='md' color={theme} padding="20px 5px 2px 2px">
        Expert coaching
        </Heading>
        <Text fontSize='sm' color="grey">Consult with a trusted advisor who helps you review your progress, grow<br/> your business, and plan for the future.</Text>
        <Heading as='h4' size='md' color={theme} padding="20px 5px 2px 2px">
        Insider access
        </Heading>
        <Text fontSize='sm' color="grey">Enjoy a direct line of communication with Patreon teams for insights,<br/> early access to new features, and invitations to events.</Text>
        <Heading as='h4' size='md' color={theme} padding="20px 5px 2px 2px">
        Data insights
        </Heading>
        <Text fontSize='sm' color="grey">Enjoy a monthly review of custom analytics provided by your Partner<br/> Manager, to walk you through ways to improve earnings, patron,<br/> acquisition and retention, and more.</Text>
         </div>
         <div >
          <img style={{width:"500px", padding:"0px"}} src="https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/product-premium-02-features.png" alt="" />
        </div>
      </div>
      <div style={{backgroundColor:"white", width:"100%", display:"flex", justifyContent:"center", color:"white", paddingTop:"70px"}}>
        <div style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
        <Heading as='h3' size='lg' color="black" paddingBottom="40px">
        Reward your patrons effortlessly 
        </Heading>
        <Text fontSize='xl' color="grey">Reward your loyal patrons with Patreon’s Merch for<br/> Membership. Patreon handles shipping, tracking, and<br/> support, so you can save time and get back to doing<br/> what you do best — creating.</Text>
        <Heading as='h4' size='md' color={theme} padding="20px 5px 2px 2px">
        Unique items, designed by you
        </Heading>
        <Text fontSize='sm' color="grey">We’ve partnered with top notch manufacturers so you can select high-<br/>quality items and customize the design.</Text>
        <Heading as='h4' size='md' color={theme} padding="20px 5px 2px 2px">
        Smart Pricing Optimization
        </Heading>
        <Text fontSize='sm' color="grey">Patreon will suggest which tiers should include the merch at price points<br/> that cover your production and shipping costs.</Text>
        <Heading as='h4' size='md' color={theme} padding="20px 5px 2px 2px">
        End-to-end fulfillment
        </Heading>
        <Text fontSize='sm' color="grey">Your merch is created and fulfilled automatically, on schedule. Select a<br/> one-time reward after the first 3 months.</Text>
         
         </div>
         <div >
          <img style={{width:"500px", padding:"0px"}} src="https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/premium-reward-your-patrons.lg_1x.png" alt="" />
        </div>
      </div>
      <div style={{backgroundColor:"white", width:"100%", display:"flex", justifyContent:"center", color:"white", paddingTop:"70px"}}>
        <div >
          <img style={{width:"600px", padding:"50px"}} src="https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/product-premium-03-features_2x.png" alt="" />
        </div>
        <div style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
        <Heading as='h3' size='lg' color="black" paddingBottom="40px">
        Work as a team  
        </Heading>
        <Text fontSize='xl' color="grey">Spend more time creating as your teammates post, comment, and send<br/>each teammate their own login with Team Accounts.</Text>
        <Heading as='h4' size='md' color={theme} padding="20px 5px 2px 2px">
        Save time
        </Heading>
        <Text fontSize='sm' color="grey">Get early insight into upcoming product changes, early access to new<br/> messages on behalf of your creator page.</Text>
        <Heading as='h4' size='md' color={theme} padding="20px 5px 2px 2px">
        Keep your account secure
        </Heading>
        <Text fontSize='sm' color="grey">Sharing login info may put your account at risk. Give each teammate<br/>their own login and 2-factor authentication settings. </Text>
        <Heading as='h4' size='md' color={theme} padding="20px 5px 2px 2px">
        Retain control
        </Heading>
        <Text fontSize='sm' color="grey">Team leads have sole access to financial data and set permissions for<br/>teammates.</Text>
         
         </div>
      </div>
    </div>
    <AllPlansComponents color={theme} type={"Premium"}/>
    </>
  )
}

export default Premium