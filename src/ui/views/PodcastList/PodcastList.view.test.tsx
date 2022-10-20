import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

import PodcastListView from "./PodcastList.view";
const podcastMock = [
  {
    "im:name": {
      label:
        "Broken Record with Rick Rubin, Malcolm Gladwell, Bruce Headlam and Justin Richmond",
    },
    "im:image": [
      {
        label:
          "https://is2-ssl.mzstatic.com/image/thumb/Podcasts126/v4/0c/a2/bb/0ca2bba3-5c0d-1c1f-b6ce-2e6ab4320b47/mza_1819810769375974713.jpg/55x55bb.png",
        attributes: {
          height: "55",
        },
      },
      {
        label:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/0c/a2/bb/0ca2bba3-5c0d-1c1f-b6ce-2e6ab4320b47/mza_1819810769375974713.jpg/60x60bb.png",
        attributes: {
          height: "60",
        },
      },
      {
        label:
          "https://is2-ssl.mzstatic.com/image/thumb/Podcasts126/v4/0c/a2/bb/0ca2bba3-5c0d-1c1f-b6ce-2e6ab4320b47/mza_1819810769375974713.jpg/170x170bb.png",
        attributes: {
          height: "170",
        },
      },
    ],
    summary: {
      label:
        "From Rick Rubin, Malcolm Gladwell, Bruce Headlam, and Justin Richmond. The musicians you love talk about their life, inspiration, and craft. Then play. iHeartMedia is the exclusive podcast partner of Pushkin Industries.",
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
      label: "© 2022 Pushkin Industries",
    },
    title: {
      label:
        "Broken Record with Rick Rubin, Malcolm Gladwell, Bruce Headlam and Justin Richmond - Pushkin Industries",
    },
    link: {
      attributes: {
        rel: "alternate",
        type: "text/html",
        href: "https://podcasts.apple.com/us/podcast/broken-record-with-rick-rubin-malcolm-gladwell-bruce/id1311004083?uo=2",
      },
    },
    id: {
      label:
        "https://podcasts.apple.com/us/podcast/broken-record-with-rick-rubin-malcolm-gladwell-bruce/id1311004083?uo=2",
      attributes: {
        "im:id": "1311004083",
      },
    },
    "im:artist": {
      label: "Pushkin Industries",
      attributes: {
        href: "https://podcasts.apple.com/us/artist/pushkin-industries/1465988663?uo=2",
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
      label: "2022-10-14T00:00:00-07:00",
      attributes: {
        label: "October 14, 2022",
      },
    },
  },
  {
    "im:name": {
      label:
        "Broken Record with Rick Rubin, Malcolm Gladwell, Bruce Headlam and Justin Richmond",
    },
    "im:image": [
      {
        label:
          "https://is2-ssl.mzstatic.com/image/thumb/Podcasts126/v4/0c/a2/bb/0ca2bba3-5c0d-1c1f-b6ce-2e6ab4320b47/mza_1819810769375974713.jpg/55x55bb.png",
        attributes: {
          height: "55",
        },
      },
      {
        label:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/0c/a2/bb/0ca2bba3-5c0d-1c1f-b6ce-2e6ab4320b47/mza_1819810769375974713.jpg/60x60bb.png",
        attributes: {
          height: "60",
        },
      },
      {
        label:
          "https://is2-ssl.mzstatic.com/image/thumb/Podcasts126/v4/0c/a2/bb/0ca2bba3-5c0d-1c1f-b6ce-2e6ab4320b47/mza_1819810769375974713.jpg/170x170bb.png",
        attributes: {
          height: "170",
        },
      },
    ],
    summary: {
      label:
        "From Rick Rubin, Malcolm Gladwell, Bruce Headlam, and Justin Richmond. The musicians you love talk about their life, inspiration, and craft. Then play. iHeartMedia is the exclusive podcast partner of Pushkin Industries.",
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
      label: "© 2022 Pushkin Industries",
    },
    title: {
      label:
        "Broken Record with Rick Rubin, Malcolm Gladwell, Bruce Headlam and Justin Richmond - Pushkin Industries",
    },
    link: {
      attributes: {
        rel: "alternate",
        type: "text/html",
        href: "https://podcasts.apple.com/us/podcast/broken-record-with-rick-rubin-malcolm-gladwell-bruce/id1311004083?uo=2",
      },
    },
    id: {
      label:
        "https://podcasts.apple.com/us/podcast/broken-record-with-rick-rubin-malcolm-gladwell-bruce/id1311004083?uo=2",
      attributes: {
        "im:id": "1311004083",
      },
    },
    "im:artist": {
      label: "Pushkin Industries",
      attributes: {
        href: "https://podcasts.apple.com/us/artist/pushkin-industries/1465988663?uo=2",
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
      label: "2022-10-14T00:00:00-07:00",
      attributes: {
        label: "October 14, 2022",
      },
    },
  },
  {
    "im:name": {
      label:
        "Broken Record with Rick Rubin, Malcolm Gladwell, Bruce Headlam and Justin Richmond",
    },
    "im:image": [
      {
        label:
          "https://is2-ssl.mzstatic.com/image/thumb/Podcasts126/v4/0c/a2/bb/0ca2bba3-5c0d-1c1f-b6ce-2e6ab4320b47/mza_1819810769375974713.jpg/55x55bb.png",
        attributes: {
          height: "55",
        },
      },
      {
        label:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/0c/a2/bb/0ca2bba3-5c0d-1c1f-b6ce-2e6ab4320b47/mza_1819810769375974713.jpg/60x60bb.png",
        attributes: {
          height: "60",
        },
      },
      {
        label:
          "https://is2-ssl.mzstatic.com/image/thumb/Podcasts126/v4/0c/a2/bb/0ca2bba3-5c0d-1c1f-b6ce-2e6ab4320b47/mza_1819810769375974713.jpg/170x170bb.png",
        attributes: {
          height: "170",
        },
      },
    ],
    summary: {
      label:
        "From Rick Rubin, Malcolm Gladwell, Bruce Headlam, and Justin Richmond. The musicians you love talk about their life, inspiration, and craft. Then play. iHeartMedia is the exclusive podcast partner of Pushkin Industries.",
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
      label: "© 2022 Pushkin Industries",
    },
    title: {
      label:
        "Broken Record with Rick Rubin, Malcolm Gladwell, Bruce Headlam and Justin Richmond - Pushkin Industries",
    },
    link: {
      attributes: {
        rel: "alternate",
        type: "text/html",
        href: "https://podcasts.apple.com/us/podcast/broken-record-with-rick-rubin-malcolm-gladwell-bruce/id1311004083?uo=2",
      },
    },
    id: {
      label:
        "https://podcasts.apple.com/us/podcast/broken-record-with-rick-rubin-malcolm-gladwell-bruce/id1311004083?uo=2",
      attributes: {
        "im:id": "1311004083",
      },
    },
    "im:artist": {
      label: "Pushkin Industries",
      attributes: {
        href: "https://podcasts.apple.com/us/artist/pushkin-industries/1465988663?uo=2",
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
      label: "2022-10-14T00:00:00-07:00",
      attributes: {
        label: "October 14, 2022",
      },
    },
  },
  {
    "im:name": {
      label:
        "Broken Record with Rick Rubin, Malcolm Gladwell, Bruce Headlam and Justin Richmond",
    },
    "im:image": [
      {
        label:
          "https://is2-ssl.mzstatic.com/image/thumb/Podcasts126/v4/0c/a2/bb/0ca2bba3-5c0d-1c1f-b6ce-2e6ab4320b47/mza_1819810769375974713.jpg/55x55bb.png",
        attributes: {
          height: "55",
        },
      },
      {
        label:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/0c/a2/bb/0ca2bba3-5c0d-1c1f-b6ce-2e6ab4320b47/mza_1819810769375974713.jpg/60x60bb.png",
        attributes: {
          height: "60",
        },
      },
      {
        label:
          "https://is2-ssl.mzstatic.com/image/thumb/Podcasts126/v4/0c/a2/bb/0ca2bba3-5c0d-1c1f-b6ce-2e6ab4320b47/mza_1819810769375974713.jpg/170x170bb.png",
        attributes: {
          height: "170",
        },
      },
    ],
    summary: {
      label:
        "From Rick Rubin, Malcolm Gladwell, Bruce Headlam, and Justin Richmond. The musicians you love talk about their life, inspiration, and craft. Then play. iHeartMedia is the exclusive podcast partner of Pushkin Industries.",
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
      label: "© 2022 Pushkin Industries",
    },
    title: {
      label:
        "Broken Record with Rick Rubin, Malcolm Gladwell, Bruce Headlam and Justin Richmond - Pushkin Industries",
    },
    link: {
      attributes: {
        rel: "alternate",
        type: "text/html",
        href: "https://podcasts.apple.com/us/podcast/broken-record-with-rick-rubin-malcolm-gladwell-bruce/id1311004083?uo=2",
      },
    },
    id: {
      label:
        "https://podcasts.apple.com/us/podcast/broken-record-with-rick-rubin-malcolm-gladwell-bruce/id1311004083?uo=2",
      attributes: {
        "im:id": "1311004083",
      },
    },
    "im:artist": {
      label: "Pushkin Industries",
      attributes: {
        href: "https://podcasts.apple.com/us/artist/pushkin-industries/1465988663?uo=2",
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
      label: "2022-10-14T00:00:00-07:00",
      attributes: {
        label: "October 14, 2022",
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
