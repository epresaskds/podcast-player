import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

import PodcastView from "./Podcast.view";
import { PodcastDetail } from "../../../domain/models/PodcastDetail";
const episodesMock = [
  {
    country: "USA",
    artworkUrl60:
      "https://is4-ssl.mzstatic.com/image/thumb/Podcasts112/v4/55/3e/bc/553ebc1f-75e1-6c3e-c9a3-de3bfc0a11e0/mza_11110635484606225985.png/60x60bb.png",
    episodeUrl:
      "https://traffic.megaphone.fm/NJP1491179049.mp3?updated=1666138675",
    closedCaptioning: "none",
    collectionId: 1001659715,
    collectionName: "No Jumper",
    description:
      "Lush bring battle rapper RX to talk about her career, the industry, projects and more!\n\n----\n00:00 Intro\n1:01 - The name RX comes from having the prescription for these b*tches and honoring Malcolm X \n2:38 - Being black and Mexican, her dad meeting her mom and immediately marrying her\n5:44 - Growing up in the 90s with all the racial tension, riots etc\n13:13 - The differences between Compton and LA, culture, swag and lingo, Compton accent \n20:18 - Being real bar heavy always being into lyrics, being influenced by 2pac, Langston Hughes inspire her poetry \n22:58 - The Battle rap scene in Compton back in the day, going to the Pit at 15-16yrs old\n27:01 - Getting her masters degree, freestyling at her graduate party someone putting it online\n31:18 - Not immersing her son into the battle rap world too much coz it's cruel, going to battle rap events few days before her due date \n33:36 - Misogyny in rap, guys trying to present opportunities with weird intentions \n37:20 - Defining moment being the RX vs Bonnie, battlers coming out of retirement for her \n41:57 - Slowing down on battles, having a job the whole time, opening up her own business\n45:45 - Not relying on battle rap to pay her bills, being super holistic, Cevyn Wonders brand\n56:12 - Having the self control to battle rap, it being entertainment, West coast battle rap coming a long way, inspiring the youth \n1:00:44 - Her own edible line\n\n---\n\nNO JUMPER PATREON\nhttp://www.patreon.com/nojumper\n\nCHECK OUT OUR NEW SPOTIFY PLAYLIST\nhttps://open.spotify.com/playlist/5te...\n\nFOLLOW US ON SNAPCHAT FOR THE LATEST NEWS & UPDATES\nhttps://www.snapchat.com/discover/No_...\n\nCHECK OUT OUR ONLINE STORE!!! http://www.nojumper.com/\n\nSUBSCRIBE for new interviews (and more) weekly: http://bit.ly/nastymondayz \n\nFollow us on SPOTIFY: https://open.spotify.com/show/4ENxb4B...\n\niTunes: https://itunes.apple.com/us/podcast/n...\n\nFollow us on Social Media:\nhttps://www.snapchat.com/discover/No_...\nhttp://www.twitter.com/nojumper\nhttp://www.instagram.com/nojumper\nhttps://www.facebook.com/NOJUMPEROFFI...\nhttp://www.reddit.com/r/nojumper\nJOIN THE DISCORD: https://discord.gg/Q3XPfBm\n\nFollow Adam22:\nhttps://www.tiktok.com/@adam22\nhttp://www.twitter.com/adam22\nhttp://www.instagram.com/adam22\nadam22hoe on Snapchat\nLearn more about your ad choices. Visit megaphone.fm/adchoices",
    releaseDate: "2022-10-19T00:11:18Z",
    feedUrl: "https://feeds.megaphone.fm/NJP4856622419",
    shortDescription: "",
    trackId: 1000583087982,
    trackName:
      "RX on Surviving The Streets of Compton & Becoming a Battle Rap Star",
    artistIds: [],
    collectionViewUrl:
      "https://itunes.apple.com/us/podcast/no-jumper/id1001659715?mt=2&uo=4",
    trackViewUrl:
      "https://podcasts.apple.com/us/podcast/rx-on-surviving-the-streets-of-compton-becoming/id1001659715?i=1000583087982&uo=4",
    contentAdvisoryRating: "Clean",
    trackTimeMillis: 4009000,
    previewUrl:
      "https://traffic.megaphone.fm/NJP1491179049.mp3?updated=1666138675",
    artworkUrl160:
      "https://is4-ssl.mzstatic.com/image/thumb/Podcasts112/v4/55/3e/bc/553ebc1f-75e1-6c3e-c9a3-de3bfc0a11e0/mza_11110635484606225985.png/160x160bb.jpg",
    episodeFileExtension: "mp3",
    episodeContentType: "audio",
    artworkUrl600:
      "https://is4-ssl.mzstatic.com/image/thumb/Podcasts112/v4/55/3e/bc/553ebc1f-75e1-6c3e-c9a3-de3bfc0a11e0/mza_11110635484606225985.png/600x600bb.jpg",
    genres: [
      {
        name: "Music Interviews",
        id: "1525",
      },
    ],
    episodeGuid: "ef32ccf0-4f41-11ed-9fa3-034ec78cd74b",
    kind: "podcast-episode",
    wrapperType: "podcastEpisode",
  },
  {
    country: "USA",
    artworkUrl60:
      "https://is4-ssl.mzstatic.com/image/thumb/Podcasts112/v4/55/3e/bc/553ebc1f-75e1-6c3e-c9a3-de3bfc0a11e0/mza_11110635484606225985.png/60x60bb.png",
    episodeUrl:
      "https://traffic.megaphone.fm/NJP5893172722.mp3?updated=1666136450",
    closedCaptioning: "none",
    collectionId: 1001659715,
    collectionName: "No Jumper",
    description:
      "Adam invited Flakko to talk to MrGirl about his recent social media ban, rumors and everything in between. Obviously, the conversation went left. Get in touch with MrGirl https://mrgirl.tv --- NO JUMPER PATREON http://www.patreon.com/nojumper CHECK OUT OUR NEW SPOTIFY PLAYLIST https://open.spotify.com/playlist/5te... FOLLOW US ON SNAPCHAT FOR THE LATEST NEWS & UPDATES https://www.snapchat.com/discover/No_... CHECK OUT OUR ONLINE STORE!!! http://www.nojumper.com/ SUBSCRIBE for new interviews (and more) weekly: http://bit.ly/nastymondayz  Follow us on SPOTIFY: https://open.spotify.com/show/4ENxb4B... iTunes: https://itunes.apple.com/us/podcast/n... Follow us on Social Media: https://www.snapchat.com/discover/No_... http://www.twitter.com/nojumper http://www.instagram.com/nojumper https://www.facebook.com/NOJUMPEROFFI... http://www.reddit.com/r/nojumper JOIN THE DISCORD: https://discord.gg/Q3XPfBm Follow Adam22: https://www.tiktok.com/@adam22 http://www.twitter.com/adam22 http://www.instagram.com/adam22 adam22hoe on Snapchat\nLearn more about your ad choices. Visit megaphone.fm/adchoices",
    releaseDate: "2022-10-18T20:19:00Z",
    feedUrl: "https://feeds.megaphone.fm/NJP4856622419",
    shortDescription: "",
    trackId: 1000583071695,
    trackName:
      "The Mr Girl Interview: Getting Banned, Why He Hates Flakko & More",
    artistIds: [],
    collectionViewUrl:
      "https://itunes.apple.com/us/podcast/no-jumper/id1001659715?mt=2&uo=4",
    trackViewUrl:
      "https://podcasts.apple.com/us/podcast/the-mr-girl-interview-getting-banned-why-he-hates/id1001659715?i=1000583071695&uo=4",
    contentAdvisoryRating: "Clean",
    trackTimeMillis: 6531000,
    previewUrl:
      "https://traffic.megaphone.fm/NJP5893172722.mp3?updated=1666136450",
    artworkUrl160:
      "https://is4-ssl.mzstatic.com/image/thumb/Podcasts112/v4/55/3e/bc/553ebc1f-75e1-6c3e-c9a3-de3bfc0a11e0/mza_11110635484606225985.png/160x160bb.jpg",
    episodeFileExtension: "mp3",
    episodeContentType: "audio",
    artworkUrl600:
      "https://is4-ssl.mzstatic.com/image/thumb/Podcasts112/v4/55/3e/bc/553ebc1f-75e1-6c3e-c9a3-de3bfc0a11e0/mza_11110635484606225985.png/600x600bb.jpg",
    genres: [
      {
        name: "Music Interviews",
        id: "1525",
      },
    ],
    episodeGuid: "22635b6e-4f22-11ed-997a-47d84dfdcbb8",
    kind: "podcast-episode",
    wrapperType: "podcastEpisode",
  },
  {
    country: "USA",
    artworkUrl60:
      "https://is4-ssl.mzstatic.com/image/thumb/Podcasts112/v4/55/3e/bc/553ebc1f-75e1-6c3e-c9a3-de3bfc0a11e0/mza_11110635484606225985.png/60x60bb.png",
    episodeUrl:
      "https://traffic.megaphone.fm/NJP6111232368.mp3?updated=1666136427",
    closedCaptioning: "none",
    collectionId: 1001659715,
    collectionName: "No Jumper",
    description:
      'Text "LFG" to (833) 257-0551 for Early Access to New Merch https://www.instagram.com/ginaviews https://www.instagram.com/poetikflakko https://www.instagram.com/self.made.mel/ SEND YOUR BRANDS MERCH TO BE REVIEWED NO JUMPER PO Box 11659 Burbank, CA 91510 --- No Jumper Patreon https://www.patreon.com/nojumper No Jumper News Discord: https://discord.gg/6xaQP9RS3A FOLLOW US ON SNAPCHAT FOR THE LATEST NEWS & UPDATES https://www.snapchat.com/discover/No_... FOLLOW OUR NEW SPOTIFY PLAYLIST! https://open.spotify.com/playlist/529... CHECK OUT OUR ONLINE STORE!!! http://www.nojumper.com/ SUBSCRIBE for new interviews (and more) weekly: http://bit.ly/nastymondayz Follow us on Soundcloud: https://soundcloud.com/nojumper iTunes: https://itunes.apple.com/us/podcast/n... Follow us on Social Media: https://www.snapchat.com/discover/No_... http://www.twitter.com/nojumper http://www.instagram.com/nojumper https://www.facebook.com/No-Jumper-19... http://www.reddit.com/r/nojumper Follow Adam22: http://www.twitter.com/adam22 http://www.instagram.com/adam22 and adam22hoe on Snapchat #NoJumper #Live\nLearn more about your ad choices. Visit megaphone.fm/adchoices',
    releaseDate: "2022-10-18T20:11:00Z",
    feedUrl: "https://feeds.megaphone.fm/NJP4856622419",
    shortDescription: "",
    trackId: 1000583071696,
    trackName: "The Monday Show Ep 20",
    artistIds: [],
    collectionViewUrl:
      "https://itunes.apple.com/us/podcast/no-jumper/id1001659715?mt=2&uo=4",
    trackViewUrl:
      "https://podcasts.apple.com/us/podcast/the-monday-show-ep-20/id1001659715?i=1000583071696&uo=4",
    contentAdvisoryRating: "Clean",
    trackTimeMillis: 6617000,
    previewUrl:
      "https://traffic.megaphone.fm/NJP6111232368.mp3?updated=1666136427",
    artworkUrl160:
      "https://is4-ssl.mzstatic.com/image/thumb/Podcasts112/v4/55/3e/bc/553ebc1f-75e1-6c3e-c9a3-de3bfc0a11e0/mza_11110635484606225985.png/160x160bb.jpg",
    episodeFileExtension: "mp3",
    episodeContentType: "audio",
    artworkUrl600:
      "https://is4-ssl.mzstatic.com/image/thumb/Podcasts112/v4/55/3e/bc/553ebc1f-75e1-6c3e-c9a3-de3bfc0a11e0/mza_11110635484606225985.png/600x600bb.jpg",
    genres: [
      {
        name: "Music Interviews",
        id: "1525",
      },
    ],
    episodeGuid: "2319d82c-4f21-11ed-a6ff-ff7ff49c88b1",
    kind: "podcast-episode",
    wrapperType: "podcastEpisode",
  },
];
const renderPodcastDetail = () => {
  return render(
    <PodcastView
      episodes={episodesMock as unknown as PodcastDetail[] | undefined}
      episodeCount={episodesMock.length}
    />,
    { wrapper: BrowserRouter }
  );
};

describe("Podcast Detail", () => {
  test("should render", async () => {
    renderPodcastDetail();
    const episodeCount = screen.getByTestId("episode-count");
    const episodeList = screen.getByTestId("episode-list");

    expect(episodeCount).toBeInTheDocument();
    expect(episodeList).toBeInTheDocument();
  });
});
