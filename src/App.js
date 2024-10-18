
import React from "react";
import Header from "./components/Header";
import Row from "./components/Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
   <Header />
   <h4>NETFLIX ORIGINALS</h4>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <h4>Trending Now</h4>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <h4>Top Rated</h4>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <h4>Action Movies</h4>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <h4>Comedy Movies</h4>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <h4>Horror Movies</h4>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <h4>Romance Movies</h4>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <h4>Documentaries</h4>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
