import { Button, Checkbox, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import "./editPage.css"




export const RightSideBar = (props) =>{

  const handleChange=(e)=>{
    console.log(e.target.checked)
  }





  return (
    <div>
      <div>
        <Button onClick={props.handleSaveChanges} margin={"0px 0px 15px 20px"} width="320px" colorScheme="blue">Save changes</Button>
      </div>
      <div id="checkListBox">
        <div  >
            <div>
                <Heading as="h5" size="sm"> Checklist</Heading>
            </div>          
          <Checkbox paddingBottom={"15px"} isChecked={!!props.creatorEmail} color={!!props.creatorEmail? "green" : "black"} onChange={handleChange}>{"Verify email address"}</Checkbox>
          <Checkbox paddingBottom={"15px"} isChecked={!!props.isCreatorType} color={!!props.creatorEmail? "green" : "black"} onChange={handleChange}>Customize your page<br/> Recommended • Add now</Checkbox>
          <Checkbox paddingBottom={"15px"} isChecked={!!props.isintroVideoUrl} color={!!props.creatorEmail? "green" : "black"} onChange={handleChange}>Fill out about info<br/> Recommended • Add now</Checkbox>
          <Checkbox paddingBottom={"15px"} isChecked={false} color={!!props.creatorEmail? "green" : "black"} onChange={handleChange}>Connect your socials<br/> Recommended • Add now</Checkbox>
          <Checkbox paddingBottom={"15px"} isChecked={!!props.istiers} color={!!props.creatorEmail? "green" : "black"} onChange={handleChange}>Build a membership<br/> Recommended • Add now</Checkbox>
          <Checkbox paddingBottom={"15px"} isChecked={!!props.isposts} color={!!props.creatorEmail? "green" : "black"} onChange={handleChange}>Create content</Checkbox>
        </div>
        <div>
            <div><Text fontSize="sm" color={"grey"}>LEARN MORE</Text></div>          
          <UnorderedList>
            <Link paddingBottom={"15px"} href='https://blog.patreon.com/membership-101-or-the-15-best-practices-to-launch-and-grow-your-patreon' isExternal>
                <ListItem>Membership 101: Best Practices</ListItem>
            </Link>
            <Link paddingBottom={"15px"} href='https://blog.patreon.com/successful-business-models-letting-fans-pay-you' isExternal>
                <ListItem>How to choose your business model</ListItem>
            </Link>
            <Link paddingBottom={"15px"} href='https://blog.patreon.com/talk-to-your-audience' isExternal>
                <ListItem>How to talk about Patreon to your audience</ListItem>
            </Link>
            <Link paddingBottom={"15px"} href='https://blog.patreon.com/ask-for-support' isExternal>
                <ListItem>Knowing your worth as a creator</ListItem>
            </Link>
          </UnorderedList>
        </div>
      </div>
    </div>
  );
};
