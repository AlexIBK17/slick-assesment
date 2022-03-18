import { Box, Text, Flex } from "@chakra-ui/react";
import Search from "../search";
import Movie from "../movie";
import React from "react";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=ea70778b";

function MovieList() {
  const [loading, setLoading] = React.useState(true);
  const [movies, setMovies] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState(null);

  React.useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setMovies(jsonResponse);
        setLoading(false);
      });
  }, []);

  const search = (search) => {
    setLoading(true);
    setErrorMessage(null);

    fetch(`http://www.omdbapi.com/?i=${search}&apikey=ea70778b`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.Response === "True") {
          setMovies(jsonResponse.Search);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      });
  };
  return (
    <>
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        mx={"auto"}
        maxW={"1440px"}
      >
        <Box>
          {loading && !errorMessage ? (
            <Text>loading...</Text>
          ) : errorMessage ? (
            <Box className="errorMessage">{errorMessage}</Box>
          ) : (
            <Movie movie={movies} />
          )}
        </Box>
        <Box>
          {loading && !errorMessage ? (
            <Text>loading...</Text>
          ) : errorMessage ? (
            <Box className="errorMessage">{errorMessage}</Box>
          ) : (
            <Movie movie={movies} />
          )}
        </Box>
        <Box>
          {loading && !errorMessage ? (
            <Text>loading...</Text>
          ) : errorMessage ? (
            <Box className="errorMessage">{errorMessage}</Box>
          ) : (
            <Movie movie={movies} />
          )}
        </Box>
        <Box>
          {loading && !errorMessage ? (
            <Text>loading...</Text>
          ) : errorMessage ? (
            <Box className="errorMessage">{errorMessage}</Box>
          ) : (
            <Movie movie={movies} />
          )}
        </Box>
      </Flex>
    </>
  );
}

export default MovieList;
