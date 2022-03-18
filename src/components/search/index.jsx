import { Box, Input, Text } from "@chakra-ui/react";
import React from "react";

function Search(props) {
  const [search, setSearchValue] = React.useState("");
  const handleSearchChanges = (e) => {
    setSearchValue(e.target.value);
  };
  const resetInputChanges = () => {
    setSearchValue("");
  };

  const callSearchFunc = (e) => {
    e.preventDefault();
    props.search(search);
    resetInputChanges();
  };
  return (
    <Box mx={"auto"} maxW={"1440px"} py={"50px"}>
      <Text fontSize={"24px"}>Search</Text>
      <Input
        size={"md"}
        border={"1px"}
        borderColor={"black"}
        value={search}
        onChange={handleSearchChanges}
        type="text"
      />
    </Box>
  );
}

export default Search;
