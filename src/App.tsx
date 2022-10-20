import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.styles.ts";
import { EpisodeView, PodcastDetailView } from "./ui/views";
import { Header } from "./ui/components/Header";
import { Feed } from "./ui/containers/Feed";
import { GlobalStyle } from "./App.styles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="podcast/:podcastId" element={<PodcastDetailView />} />
        <Route
          path="podcast/:podcastId/episode/:episodeId"
          element={<EpisodeView />}
        />
      </Routes>
    </div>
  );
}

export default App;
