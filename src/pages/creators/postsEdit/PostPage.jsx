import { Button, Divider, FormControl, FormLabel, Heading, Input, Radio, RadioGroup, Stack, Switch, Textarea } from "@chakra-ui/react";
import React from "react";


const post={
  type: "",
  title: "",
  desc: "",
  date: "",
  time: "",
  content_url: "",
  visibility: "",
  likes: "",
  isLiked:true,
  tier:""
}
export const PostPage = (props) => {

const [psotDetails, setPoatDetails]=React.useState(post)


  const [value, setValue] = React.useState("1");
const [posting , setPosting]=React.useState(true)
  return (
    <div style={{display:"flex"}}>
      <div style={{border:"2px solid red", width:"300px"}}></div>
      <div style={{paddingTop:"100px"}}>
        <div style={{margin:"20px 40px 20px 150px"}}>
          <Heading paddingBottom="15px" as="h3" size="lg">
            Create {props.type} Posts
          </Heading>
        </div>
        <div style={{display:"flex", margin:"20px 40px 20px 150px", boxSizing:"border-box", flexDirection:"column", padding:"15px", width:"500px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
      <Input placeholder='URL' />
      <Divider />
      <Input margin={"20px 0px 20px 0px"} placeholder='Post title (required)' />
      <Textarea placeholder='Now this is a story all about how...' />
      <Divider margin={"20px 0px 20px 0px"} />
      <Heading margin={"20px 0px 20px 0px"} paddingBottom="15px" as="h5" size="sm">
            Tags
      </Heading>
      <Input variant='unstyled' placeholder='Add Tags' />                  
      </div>
      </div>
      




      <div style={{paddingTop:"100px"}}>
        <div>
        <Button width={"290px"} marginBottom="20px" colorScheme='blue'>{posting==true? "Publish Now":"Save"}</Button>
        </div>
        <div style={{display:"flex",boxSizing:"border-box", flexDirection:"column", padding:"15px", width:"290px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
          <Heading paddingBottom="15px" as="h5" size="sm">
            Who can see this post?
          </Heading>
          <RadioGroup onChange={setValue} value={value}>
            <Stack display="flex" flexDirection="column"paddingBottom="15px"   direction="row">
              <Radio value="1">Public </Radio>
              <Radio value="2">Patrons only</Radio>
            </Stack>
          </RadioGroup>
          {value == 1 ? null : (
            <>
              <div>
                <Heading paddingBottom="15px"  as="h5" size="sm">
                  Early access
                </Heading>
                <FormControl display="flex" alignItems="center">
                  <FormLabel paddingBottom="15px"  htmlFor="email-alerts" mb="0">
                  Early access
                  </FormLabel>
                  <Switch
                   id="email-alerts" />
                </FormControl>
                <Heading paddingBottom="15px"  as="h5" size="sm">
                Preview text
                </Heading>
                <Textarea placeholder='Add public preview text....' />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
