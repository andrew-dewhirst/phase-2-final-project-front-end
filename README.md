# Sports Stadium Tracker

Sports Stadium Tracker is a web application that allows users to view all sports stadiums across the four major US sports leagues (NFL, MLB, NBA, and NHL) and add the ones that they've visited to a personal list.

The app home page showcases a map of all the cities in the United States that have sports teams and which team/league is associated with that city. The four main leagues have their own tabs in the navigation bar and show a small picture of each stadium in that league, along with team name and location (city, state). There is also a button that allows users to add the stadium to their own list of visited stadiums. The final navigation button, "My List", shows all the stadiums that users have added to their list of visited stadiums. The stadiums in this list also have a "remove" button that allows users to remove the stadium from the list if they mistakenly added it.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

Within the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.
Run this within the "front-end" folder within the main project directory.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## `json-server --watch db.json`

Accesses the full fake REST API used for this project.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
Run this within the "back-end" folder within the main project directory.

## Roadmap

For future iterations, I plan to implement more expansive back-end functionality to allow for individual users to log in/authenticate and save their own personalized lists of stadiums visited. Currently, if I deployed this project, anyone who added a stadium would add the stadium for all users, not just themselves.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


