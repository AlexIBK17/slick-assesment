import { Box, Flex, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/logo.svg";
import React from "react";

function Nav() {
  return (
    <>
      <Box bg={"#292929"} py={"30px"}>
        <Box mx={"auto"} maxW={"1440px"}>
          <Flex alignItems={"center"} justifyContent={"flex-start"}>
            <Image src={logo} />
          </Flex>
        </Box>
      </Box>
    </>
  );
}

export default Nav;
