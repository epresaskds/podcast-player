import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

import PodcastListView from "./PodcastList.view";
const podcastMock = [
  {
    "im:name": {
      label: "No Jumper",
    },
    "im:image": [
      {
        label:
          "https://is5-ssl.mzstatic.com/image/thumb/Podcasts112/v4/55/3e/bc/553ebc1f-75e1-6c3e-c9a3-de3bfc0a11e0/mza_11110635484606225985.png/55x55bb.png",
        attributes: {
          height: "55",
        },
      },
      {
        label:
          "https://is2-ssl.mzstatic.com/image/thumb/Podcasts112/v4/55/3e/bc/553ebc1f-75e1-6c3e-c9a3-de3bfc0a11e0/mza_11110635484606225985.png/60x60bb.png",
        attributes: {
          height: "60",
        },
      },
      {
        label:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/55/3e/bc/553ebc1f-75e1-6c3e-c9a3-de3bfc0a11e0/mza_11110635484606225985.png/170x170bb.png",
        attributes: {
          height: "170",
        },
      },
    ],
    summary: {
      label:
        "The Coolest Podcast In The World. Hosted by Adam22 Watch these interviews on YouTube right here: https://www.youtube.com/nojumper",
    },
    "im:price": {
      label: "Get",
      attributes: {
        amount: "0",
        currency: "USD",
      },
    },
    "im:contentType": {
      attributes: {
        term: "Podcast",
        label: "Podcast",
      },
    },
    rights: {
      label: "© All rights reserved",
    },
    title: {
      label: "No Jumper - No Jumper",
    },
    link: {
      attributes: {
        rel: "alternate",
        type: "text/html",
        href: "https://podcasts.apple.com/us/podcast/no-jumper/id1001659715?uo=2",
      },
    },
    id: {
      label:
        "https://podcasts.apple.com/us/podcast/no-jumper/id1001659715?uo=2",
      attributes: {
        "im:id": "1001659715",
      },
    },
    "im:artist": {
      label: "No Jumper",
    },
    category: {
      attributes: {
        "im:id": "1525",
        term: "Music Interviews",
        scheme:
          "https://podcasts.apple.com/us/genre/podcasts-music-music-interviews/id1525?uo=2",
        label: "Music Interviews",
      },
    },
    "im:releaseDate": {
      label: "2022-10-18T13:19:00-07:00",
      attributes: {
        label: "October 18, 2022",
      },
    },
  },
  {
    "im:name": {
      label: "Ebro in the Morning Podcast",
    },
    "im:price": {
      label: "Get",
      attributes: {
        amount: "0",
        currency: "USD",
      },
    },
    "im:image": [
      {
        label:
          "https://is5-ssl.mzstatic.com/image/thumb/Podcasts122/v4/0f/95/2b/0f952b75-2da3-a1a4-55ee-5e24eb34a2ed/mza_16604615367747989507.jpg/55x55bb.png",
        attributes: {
          height: "55",
        },
      },
      {
        label:
          "https://is2-ssl.mzstatic.com/image/thumb/Podcasts122/v4/0f/95/2b/0f952b75-2da3-a1a4-55ee-5e24eb34a2ed/mza_16604615367747989507.jpg/60x60bb.png",
        attributes: {
          height: "60",
        },
      },
      {
        label:
          "https://is2-ssl.mzstatic.com/image/thumb/Podcasts122/v4/0f/95/2b/0f952b75-2da3-a1a4-55ee-5e24eb34a2ed/mza_16604615367747989507.jpg/170x170bb.png",
        attributes: {
          height: "170",
        },
      },
    ],
    summary: {
      label:
        "Ebro, Laura Stylez and Rosenberg share their thoughts on everything from music, relationships, politics and more Monday - Friday 5am - 10am ET.",
    },
    "im:artist": {
      label: "HOT 97's Ebro in the Morning",
    },
    title: {
      label: "Ebro in the Morning Podcast - HOT 97's Ebro in the Morning",
    },
    link: {
      attributes: {
        rel: "alternate",
        type: "text/html",
        href: "https://podcasts.apple.com/us/podcast/ebro-in-the-morning-podcast/id1236941416?uo=2",
      },
    },
    id: {
      label:
        "https://podcasts.apple.com/us/podcast/ebro-in-the-morning-podcast/id1236941416?uo=2",
      attributes: {
        "im:id": "1236941416",
      },
    },
    "im:contentType": {
      attributes: {
        term: "Podcast",
        label: "Podcast",
      },
    },
    category: {
      attributes: {
        "im:id": "1310",
        term: "Music",
        scheme:
          "https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2",
        label: "Music",
      },
    },
    "im:releaseDate": {
      label: "2022-10-18T07:35:00-07:00",
      attributes: {
        label: "October 18, 2022",
      },
    },
  },
  {
    "im:name": {
      label: "Dolly Parton's America",
    },
    "im:image": [
      {
        label:
          "https://is3-ssl.mzstatic.com/image/thumb/Podcasts115/v4/58/b8/16/58b8165d-d674-16cd-3822-36d8acad0151/mza_5834995761907664558.jpg/55x55bb.png",
        attributes: {
          height: "55",
        },
      },
      {
        label:
          "https://is5-ssl.mzstatic.com/image/thumb/Podcasts115/v4/58/b8/16/58b8165d-d674-16cd-3822-36d8acad0151/mza_5834995761907664558.jpg/60x60bb.png",
        attributes: {
          height: "60",
        },
      },
      {
        label:
          "https://is2-ssl.mzstatic.com/image/thumb/Podcasts115/v4/58/b8/16/58b8165d-d674-16cd-3822-36d8acad0151/mza_5834995761907664558.jpg/170x170bb.png",
        attributes: {
          height: "170",
        },
      },
    ],
    summary: {
      label:
        "In this intensely divided moment, one of the few things everyone still seems to agree on is Dolly Parton—but why? That simple question leads to a deeply personal, historical, and musical rethinking of one of America’s great icons. Join us for a 9-episode journey into the Dollyverse. Hosted by Jad Abumrad. Produced and reported by Shima Oliaee. Dolly Parton’s America is a production from OSM Audio and WNYC Studios.",
    },
    "im:price": {
      label: "Get",
      attributes: {
        amount: "0",
        currency: "USD",
      },
    },
    "im:contentType": {
      attributes: {
        term: "Podcast",
        label: "Podcast",
      },
    },
    rights: {
      label: "© WNYC Studios & OSM Audio",
    },
    title: {
      label: "Dolly Parton's America - WNYC Studios & OSM Audio",
    },
    link: {
      attributes: {
        rel: "alternate",
        type: "text/html",
        href: "https://podcasts.apple.com/us/podcast/dolly-partons-america/id1481398762?uo=2",
      },
    },
    id: {
      label:
        "https://podcasts.apple.com/us/podcast/dolly-partons-america/id1481398762?uo=2",
      attributes: {
        "im:id": "1481398762",
      },
    },
    "im:artist": {
      label: "WNYC Studios & OSM Audio",
      attributes: {
        href: "https://podcasts.apple.com/us/artist/wnyc/127981066?uo=2",
      },
    },
    category: {
      attributes: {
        "im:id": "1524",
        term: "Music History",
        scheme:
          "https://podcasts.apple.com/us/genre/podcasts-music-music-history/id1524?uo=2",
        label: "Music History",
      },
    },
    "im:releaseDate": {
      label: "2021-07-06T09:00:00-07:00",
      attributes: {
        label: "July 6, 2021",
      },
    },
  },
  {
    "im:name": {
      label: "A History of Rock Music in 500 Songs",
    },
    "im:image": [
      {
        label:
          "https://is5-ssl.mzstatic.com/image/thumb/Podcasts124/v4/88/18/59/881859a5-f344-c249-f4b9-3d9b62add05a/mza_16428964146354887078.png/55x55bb.png",
        attributes: {
          height: "55",
        },
      },
      {
        label:
          "https://is4-ssl.mzstatic.com/image/thumb/Podcasts124/v4/88/18/59/881859a5-f344-c249-f4b9-3d9b62add05a/mza_16428964146354887078.png/60x60bb.png",
        attributes: {
          height: "60",
        },
      },
      {
        label:
          "https://is3-ssl.mzstatic.com/image/thumb/Podcasts124/v4/88/18/59/881859a5-f344-c249-f4b9-3d9b62add05a/mza_16428964146354887078.png/170x170bb.png",
        attributes: {
          height: "170",
        },
      },
    ],
    summary: {
      label:
        "Andrew Hickey presents a history of rock music from 1938 to 1999, looking at five hundred songs that shaped the genre.",
    },
    "im:price": {
      label: "Get",
      attributes: {
        amount: "0",
        currency: "USD",
      },
    },
    "im:contentType": {
      attributes: {
        term: "Podcast",
        label: "Podcast",
      },
    },
    rights: {
      label: "© 2021 A History of Rock Music in 500 Songs",
    },
    title: {
      label: "A History of Rock Music in 500 Songs - Andrew Hickey",
    },
    link: {
      attributes: {
        rel: "alternate",
        type: "text/html",
        href: "https://podcasts.apple.com/us/podcast/a-history-of-rock-music-in-500-songs/id1437402802?uo=2",
      },
    },
    id: {
      label:
        "https://podcasts.apple.com/us/podcast/a-history-of-rock-music-in-500-songs/id1437402802?uo=2",
      attributes: {
        "im:id": "1437402802",
      },
    },
    "im:artist": {
      label: "Andrew Hickey",
    },
    category: {
      attributes: {
        "im:id": "1524",
        term: "Music History",
        scheme:
          "https://podcasts.apple.com/us/genre/podcasts-music-music-history/id1524?uo=2",
        label: "Music History",
      },
    },
    "im:releaseDate": {
      label: "2022-10-07T03:12:00-07:00",
      attributes: {
        label: "October 7, 2022",
      },
    },
  },
];
const renderList = () => {
  return render(
    <PodcastListView
      onSelectedPodcast={jest.fn()}
      onFilter={jest.fn()}
      inputValue=""
      podcastList={podcastMock}
    />,
    { wrapper: BrowserRouter }
  );
};

describe("Podcast list", () => {
  test("should render", async () => {
    renderList();
    const cards = screen.getAllByTestId("card");
    cards.forEach((card) => expect(card).toBeInTheDocument());
    expect(cards).toHaveLength(4);
  });
});
