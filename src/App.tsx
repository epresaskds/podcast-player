import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.styles.ts";
import { EpisodeView } from "./ui/views";
import { Header } from "./ui/components/Header";
import { Feed } from "./ui/containers/Feed";
import { GlobalStyle } from "./App.styles";
import { Podcast } from "./ui/containers/Podcast";
import {
  PodcastContextProvider,
  usePodcast,
} from "./ui/context/Podcast.context";

function App() {
  const { isLoading } = usePodcast();
  return (
    <div className="App">
      <GlobalStyle />
      <PodcastContextProvider>
        <Header isLoading={isLoading} />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="podcast/:podcastId" element={<Podcast />} />
          <Route
            path="podcast/:podcastId/episode/:episodeId"
            element={<EpisodeView />}
          />
        </Routes>
      </PodcastContextProvider>
    </div>
  );
}

export default App;
