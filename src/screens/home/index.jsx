import React from "react";
import Hero from "../../components/hero";
import MovieList from "../../components/movie -list";
import Nav from "../../components/nav";
import Search from "../../components/search";

function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Search />
      <MovieList />
    </>
  );
}

export default Home;
