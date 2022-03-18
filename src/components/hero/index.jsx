import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import hero from "../../assets/hero.svg";
import React from "react";

function Hero() {
  return (
    <Box
      style={{
        backgroundImage: `url(${hero})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "550px",
      }}
    >
      <Box mx={"auto"} maxW={"1440px"}>
        <Heading fontSize={"72px"} pt={"150px"} color={"white"}>
          Watch
          <br /> something <br /> incredible.
        </Heading>
      </Box>
    </Box>
  );
}

export default Hero;
