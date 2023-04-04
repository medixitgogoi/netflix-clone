import React from "react";
import "./app.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {

  const isLargeRow=true; //nahi dene se bhi chalega...code nahi phatega

  return (
    <div className="app">

      <Navbar />
      <Banner />

      <Row title={"Netflix Originals"} fetchURL={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title={"Top Rated"} fetchURL={requests.fetchTopRated} />
      <Row title={"Trending Now"} fetchURL={requests.fetchTrending} />
      <Row title={"Action Movies"} fetchURL={requests.fetchActionMovies} />
      <Row title={"Comedy Movies"} fetchURL={requests.fetchComedyMovies} />
      <Row title={"Romance Movies"} fetchURL={requests.fetchRomanceMovies} />
      <Row title={"Horror Movies"} fetchURL={requests.fetchHorrorMovies} />
      <Row title={"Documentaries"} fetchURL={requests.fetchDocumentaries} />

      <Footer />
    </div>
  )
}

export default App
