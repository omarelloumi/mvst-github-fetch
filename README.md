# GitHub Repository Fetcher

This is a Node.js, Express, and React TypeScript project that fetches the repositories of a logged-in GitHub user and displays them. The project is created using create-react-app.

## Demo

You can see a live demo of the project [here](https://mvst-github-fetch-front.vercel.app).

## Prerequisites

To run this project, you need to have Node.js installed on your system. You can download it from [NodeJS](https://nodejs.org/).

## Installation

1. Clone the repository to your local machine: `git clone https://github.com/omarelloumi/mvst-github-fetch.git`
1. Change into the project directory: `cd mvst-github-fetch`
1. Locate to server directory `cd server`
1. Install the dependencies: `npm install`
1. Change into the React client directory: `cd client`
1. Install the dependencies for the React client: `npm install`

## Usage

1. Locate to server directory `cd server`
1. Set your GitHub client ID, GitHub secret and server Port in the .env file in the server directory.
1. Start the proxy server from the project directory: `npm start`
1. Locate to client directory `cd client`
1. Set your GitHub client ID and secret and the github api in the .env file in the client directory.
1. Start the React client from the project directory: `npm start`
1. Open your web browser and go to http://localhost:3000 to see the app in action.

Note: Remember to set your GitHub client ID and secret in the .env file in the server directory.

Note: Remember to set your GitHub client ID, secret and in the .env file in the client directory.

Note: The server runs on http://localhost:5000 by default. If you want to change the port, you can do so by setting the PORT environment variable before starting the server.

## Future Improvements

- Add Tests
- Add storybook
- Better error handling
- Better authentication
- Learn about on deployment with vite

## Feedback

I enjoyed working on this project as it's my first time using TypeScript and I learned a lot.
I also enjoyed the challenge of using the GitHub API and learning about the OAuth flow.
I will learn more about deployment and testing in the future.
