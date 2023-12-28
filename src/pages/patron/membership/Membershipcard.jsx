import React, { useContext } from 'react'
import { Heading } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { SidebarContext } from '../../../context/SidebarContext'


export const Membershipcard = (props) => {
      const [, ToggleSidebarButtonValue] = useContext(SidebarContext);
    const n =useNavigate()


    function handlePayment() {
        localStorage.setItem("price", `${monthlyPrice}`);
        ToggleSidebarButtonValue("payment")
    
    }
 
// const tier={
//     name: "Free",
// monthlyPrice: "0",
// tierdescription: "this is free tier description",
// cover_image: "https://picsum.photos/id/23/200/300",
// benefits: "Not ad-free Content"
// }

const { name, cover_image, monthlyPrice, benefits } = props.tier;
console.log(benefits)
  return (
    <div
      style={{
        height: "700px",
        width: "380px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      }}>
      <div>
        <Heading as="h4" size="md" padding="30px 10px 40px 10px">
          {name}
        </Heading>
      </div>
      <div>
        <Image
            
            objectFit='cover'
            src={cover_image}
            alt='Dan Abramov'
            
            />
      </div>
      <div
        style={{
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Heading as="h4" size="md">
          $ {monthlyPrice}
        </Heading>
        <Heading color={"grey"} as="h6" size="xs">
          PER MONTH
        </Heading>
      </div>
      <div style={{ padding: "20px" }}>
        <Button width={"200px"} onClick={handlePayment} colorScheme="blue">
          Join
        </Button>
      </div>
      <div style={{ padding: "15px" }}>
        <p>{benefits}</p>
      </div>
    </div>
  );
}
