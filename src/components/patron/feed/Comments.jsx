import { Heading, Image } from "@chakra-ui/react";
import React from "react";
import "./feed.css"

export const Comments = () => {
  return (
    <div className="commentsCard">
      <div>
      <div>        
          <Image
            borderRadius="full"
            boxSize="40px"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
      </div>
      <div style={{paddingLeft:"10px"}}>
          <Heading as="h6" size="xs">
            NAME
          </Heading>
          <p>
            comment
          </p>
          <div>

          </div>
      </div>
      </div>
      <div>
      <p>2 mo</p>
      </div>
    </div>
  );
};
