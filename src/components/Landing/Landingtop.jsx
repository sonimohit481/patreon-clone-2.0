import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

export const Landingtop = () => {
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: "#141518", display: "flex" }}>
      <div style={{ width: "50%", padding: "100px 125px 100px 125px" }}>
        <div
          style={{
            fontSize: "56px",
            fontWeight: "700",
            color: "rgb(255, 66, 77)",
          }}
        >
          Change the way art is valued
        </div>
        <div style={{ color: "white", fontSize: "22px", paddingTop: "10px" }}>
          Let your most passionate fans support your creative work via monthly
          membership.
        </div>
        <Button
          style={{
            borderRadius: "25px",
            backgroundColor: "rgb(255, 66, 77)",
            color: "white",
            marginTop: "32px",
          }}
          onClick={()=>navigate("/login")}
        >
          Get Started
        </Button>
      </div>
      <div style={{ width: "50%", padding: "125px" }}>
        <img
          src="https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/coe-optimize.gif"
          alt=""
        />
      </div>
      {/* <Button style={{backgroundColor:"rgb(255, 66, 77)",  borderRadius:"50%",height:"76px",   position:"absolute" ,top:"50%", right:"22%"}} size={"lg"}><BsPlay style={{color:"white", fontSize:"55px", padding:"0",margin:"0"}}/></Button> */}
    </div>
  );
};
