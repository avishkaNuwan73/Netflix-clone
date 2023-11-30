import "./App.css";
import Row from "./Row";
import requests from "./request";
import Banner from "./Banner";
import NavBar from "./NavBar";

function App() {
  const KEY = "188791a2eda822b7af58fde4af49d6f1";

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Row
        title="NETFLIX ORIGINAL"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romantic" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documantaries" fetchUrl={requests.fetchDocumantaries} />

      {/* Footer */}
    </div>
  );
}

export default App;
