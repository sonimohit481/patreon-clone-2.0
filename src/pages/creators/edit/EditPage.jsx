import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Heading } from '@chakra-ui/react'
import { Basic } from './Basic'
import "./editPage.css"
export const EditPage = () => {
  return (
    <>
    <div style={{display:"flex"}}>
    <div style={{border: "2px solid red", width:"300px", marginRight:"20px"}}>

</div>
    <Tabs>
    <Heading as='h3' size='md'>
    Edit Page
  </Heading>
      <TabList>
        <Tab>Basic</Tab>
        <Tab>Merch</Tab>
        <Tab>Getting paid</Tab>
        <Tab>Page settings</Tab>
        <Tab>Welcome notes</Tab>
        <Tab>Goals</Tab>
        <Tab>Posts</Tab>
        <Tab>Preview</Tab>
        <Tab>Offers</Tab>
      </TabList>

      <TabPanels>
      <TabPanel><Basic/></TabPanel>
        <TabPanel>Merch</TabPanel>
        <TabPanel>Getting paid</TabPanel>
        <TabPanel>Page settings</TabPanel>
        <TabPanel>Welcome notes</TabPanel>
        <TabPanel>Goals</TabPanel>
        <TabPanel>Posts</TabPanel>
        <TabPanel>Preview</TabPanel>
        <TabPanel>Offers</TabPanel>    
      </TabPanels>
    </Tabs>
    </div>
  
    </>
  )
}
