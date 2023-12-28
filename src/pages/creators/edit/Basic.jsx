import React from "react";
import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { RightSideBar } from "./RightSideBar";

const profileData={
  creatormode_name: "",
  bgImg: "https://picsum.photos/id/237/200/300",
  profilePic: "https://picsum.photos/id/23/200/300",
  creatorType: "",
  correctSounds:"is",
  patreonPageUrl:"",
  aboutPatreonPage:"",
  introVideoUrl:"",
  socialMediaLinks:{
      faceBookLink:"",
      instagramLink:"",
      youTubeLink:"",
      twitter:""
  },
  posts: "",
  tiers: [],
  subscriber_patrons: []
}



export const Basic = () => {

  const[isCreatorType, setIsCreatorType]=React.useState(false)
  const[isintroVideoUrl, setIsintroVideoUrl]=React.useState(false)
  const[istiers, setIstiers]=React.useState(false)
  const [isposts, setIsposts]=React.useState(false)

  const [profile, setProfile]=React.useState(profileData)
const { creatormode_name,bgImg, profilePic, creatorType, correctSounds, patreonPageUrl, aboutPatreonPage, tiers, posts,introVideoUrl }=profile
  const profileFetch=()=>{
    fetch(`https://patreon-data.herokuapp.com/users/1`)
    .then(res=>res.json())
    .then(data=>{
      setCreatorEmail(data.email)
      setProfile(data.creator_mode)})
    .catch(err=>console.log(err))
  }
  React.useEffect(()=>{
    profileFetch()
  },[])
 
React.useEffect(()=>{
  creatorType.length==0? setIsCreatorType(false) : setIsCreatorType(true);
},[profile])
React.useEffect(()=>{
  tiers.length===0? setIstiers(false): setIstiers(true); 
},[profile])
React.useEffect(()=>{
  posts==""? setIsposts(false): setIsposts(true);
},[profile])



const handleOnchange=(e)=>{
  const {name,value}=e.target;

  setProfile(prev=>({...prev,[name]:value}))

}
const handlecorrectSounds=(e)=>{
  let word=""
  e==1? word="is" :word="are"
  setValue(e)
  setProfile(prev=>({...prev,correctSounds:word}))
}

const [creatorEmail, setCreatorEmail]=React.useState("");







const handleSaveChanges=()=>{
fetch(`https://patreon-data.herokuapp.com/users/1`,{
  method:"PATCH",
  body:JSON.stringify({
    creator_mode:profile}),
  headers:{
    "Content-Type": "application/json"
  }
})
.then(res=>res.json())
.then(data=>profileFetch())
.catch(err=>console.log(err))
}



  const [value, setValue] = React.useState("1");
  return (
    <>
    <div style={{display:"flex"}}>
    <div id="editPageBasics">
      <div
        style={{
          display: "flex",
          
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            
            justifyContent: "space-between",
            width: "600px",
          }}
        >
          <label>Name of Patreon page</label>
          <Input name="creatormode_name" value={profile.creatormode_name} onChange={handleOnchange} width="350px" />
        </div>
        <div
          style={{
            display: "flex",
            
            justifyContent: "space-between",
            width: "600px",
          }}
        >
          <label>What are you creating?</label>
          <Input name="creatorType" value={profile.creatorType} onChange={handleOnchange} width="350px" />
        </div>
        <div
          style={{
            display: "flex",
            
            justifyContent: "space-between",
            width: "600px",
          }}
        >
          <div>
            <label>Which sounds more correct?</label>
          </div>
          <div>
            <RadioGroup onChange={handlecorrectSounds} value={value}>
              <Stack direction="column">
                <Radio value="1">{profile.creatormode_name} <b>is creating</b></Radio>
                <Radio value="2">{profile.creatormode_name} <b>are creating</b></Radio>
              </Stack>
            </RadioGroup>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Heading as="h5" size="sm">
              Profile photo
            </Heading>
            <Text fontSize="sm">
              We recommend a 256px by 256px
              <br /> image.
            </Text>
          </div>
          <div>
            <Image
              _hover={"width:200px"}
              borderRadius="full"
              boxSize="150px"
              src={profile.profilePic}
              alt="Dan Abramov"
            />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Heading as="h5" size="sm">
              Cover photo
            </Heading>
            <Text fontSize="sm">
              We recommend an image at least
              <br /> 1600px wide and 400px tall.
            </Text>
          </div>
          <div>
            <Box bg="silver" w="300px" p={4} height="200px" color="white">
              <img style={{width:"100%", height:"100%"}} src={profile.bgImg} alt="" />
            </Box>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Heading as="h5" size="sm">
              Patreon page URL
            </Heading>
          </div>
          <div>
            <label htmlFor="">
              patreon.com/
              <Input name="patreonPageUrl" value={profile.patreonPageUrl} onChange={handleOnchange}width={"200px"} placeholder="creatoraccount" />
            </label>
          </div>
        </div>
      </div>
      <div>
        <div>
          <Heading as="h5" size="sm">
          About your Patreon page
        </Heading>
        </div>
        <div>
        <Text fontSize="sm">
          This is the first thing potential patrons will see when they land on
          your page, so make sure you <br />
          paint a compelling picture of how they can join you on this journey.
        </Text>
        </div>     
        <div>
             <Textarea name="introVideo" value={profile.introVideoUrl} onChange={handleOnchange} variant='filled' height="200px" />
        </div>     
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Heading as="h5" size="sm">
            Intro video
            </Heading>
          </div>
          <div>
            <label htmlFor="">
              <Input name="aboutPatreonPage" value={profile.aboutPatreonPage} onChange={handleOnchange} variant='filled' width={"300px"} placeholder="Video URL" />
            </label>
          </div>
        </div>
      </div>
      <div>
        <div>
          <Heading as="h5" size="sm">
            Social links
        </Heading>
        </div>
        <div>
          <Text fontSize="sm">
        Give your patrons confidence - securely verify your accounts and display links on your page.<br/> We’ll never post on your behalf.
        </Text>
        </div>        
        <div className="socialMedia">
          <div>
            <img src="data:image/png;base64,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" alt="" />
            <Text fontSize="md">Facebook</Text>          
          </div>
          <a href="">Link</a>
        </div>
        <Divider />
        <div className="socialMedia">
          <div>
            <img src="data:image/png;base64,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" alt="" />
            <Text fontSize="md">Instagram</Text>          
          </div>
          <a href="">Link</a>
        </div>
        <Divider />
        <div className="socialMedia">
            <div>
              <img src="data:image/png;base64,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" alt="" />
              <Text fontSize="md">Twitter</Text>
            </div>
            <a href="">Link</a>
        </div>
        <Divider />
        <div className="socialMedia">
            <div>
              <img src="data:image/png;base64,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" alt="" />              
              <Text fontSize="md">YouTube</Text>
            </div>
            <a href="">Link</a>
        </div>
      </div>
    </div>
    <div>
      <RightSideBar istiers={istiers}profile={profile} handleSaveChanges={handleSaveChanges} creatorEmail={creatorEmail} isCreatorType={isCreatorType} isintroVideoUrl={isintroVideoUrl}/>
    </div>
    </div>
    </>
  );
};
