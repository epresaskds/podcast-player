<a name="readme-top"></a>

# Podcaster

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#overview">Overview</a>
      <ul>
        <li><a href="#technical">Technical Details</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#scripts">Available scripts</a></li>
  </ol>
</details>

<a name="overview"></a>

## :scroll: Overview

Podcast player for itunes podcast page, showing a list of 100 podcasts which allows to view the details, list of episodes, and go to every episode, where the user has the chance to listen to it.
![podcaster main screen](./podcaster.png?raw=true)

The Podcast detail shows th eepisode list, and also some information about the podcast itself:
![podcaster detail screen](./podcaster-detail.png?raw=true)

After clicking one of the links, it directs the user to the episode itself, with an embeded audio player and info about the episode
![podcaster episode screen](./podcaster-episode.png?raw=true)

<a name="technical"></a>

## Technical Details

The scafolding of the project follows the [Hexagonal](<https://en.wikipedia.org/wiki/Hexagonal_architecture_(software)>) architectural pattern, for separation of concerns and framework/library agnosticism.

Since this project doesn't have a backend, the data is retrieved from [iTunes' developers' api](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/index.html) and to avoid CORS errors, proxied through [all origins](https://api.allorigins.win/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<a name="built-with"></a>

## Built With

- [![React][react.js]][react-url]
- [![React][styled-components]][styled-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<a name="installation"></a>

## Installation

1. Clone the repo
   via https:
   ```sh
   git clone https://github.com/epresas/podcast-player.git
   ```
   or via ssh:
   ```sh
   git clone git@github.com:epresaskds/podcast-player.git
   ```
2. Install dependencies
   ```sh
   npm install
   ```
   or
   ```sh
   yarn
   ```
3. Start server
   ```sh
   yarn start
   ```
   or
   ```sh
   npm run start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<a name="scripts"></a>

## Available Scripts

In the project directory, you can run:

### `npm start` or `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test:e2e:ui` or `yarn test:e2e:ui`

Launches the e2e with [cypress](https://www.cypress.io/) in chrome as a browser.

### `npm test:e2e:ui` or `yarn test:e2e:cli`

Launches the e2e with [cypress](https://www.cypress.io/) in CLI mode.

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[react.js]: https://img.shields.io/badge/react-v18.2.0-orange
[react-url]: https://reactjs.org/
[styled-components]: https://img.shields.io/badge/styled--components-v5.3.6-orange
[styled-url]: https://styled-components.com/
[screen-main]: https://github.com/epresas/podcaster/blob/main/podcaster.png?raw=true
[screen-detail]: https://github.com/epresas/podcaster/blob/main/podcaster-detail.png?raw=true
[screen-episode]: https://github.com/epresas/podcaster/blob/main/podcaster-episode.png?raw=true
