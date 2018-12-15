# README.md

World of Animals

World of Animals was created as a web-based site for young children. The app is intended to be both fun and educational. Users aged 3-9 are invited to enter the site and play games related to animals. Additionally, they can choose to search for animal pictures and view various animal habitats through images and video feed.

The screenshot below represents the World of Animals landing page. This application represents the final capstone project for our group, who are student web developers at UNCC’s Full-stack Coding Bootcamp. We are Team Triumph.

SCREENSHOT

Development Setup, Installation & Usage
World of Animals was developed as a Node/Express/Create React app which our group will also be deploying to Heroku upon final class presentation.

The front-end React app is designed to auto-reload as it's updated via webpack dev server, and the backend Express app is designed to auto-reload independently with nodemon.

Starting the App Locally/Functionality
To mimic our project, start by installing front and backend dependencies. While in this directory, run the following command:
yarn install - This should install node modules within the server and the client folder. Proceed by installing yarn build.
After completing both installations, run the following command in your terminal:
yarn start - Your app should now be running on <http://localhost:3000.> The Express server should intercept any AJAX requests from the client.
Coding tests were performed throughout the entire production build. There is built-in concurrency between the front end and back end.
The World of Animals app page will reload if you make any edits. You will also not see any lint errors in the console.
Once within the site, a navbar provides access to various pages with different activities and options. The below screenshot illustrates a “Memory Game” for young children to play.

SCREENSHOT

Website Coding/Design Expectations & Challenges
Per our class instructions, the final capstone project had to meet a number of specifications. The below screenshot indicates minimal expectations of the team.

The team came to a consensus on an app related to animals, and geared to children. We agreed that on the user side, the website styling should appear cute and whimsical.

The concept of having fun while learning and exploring was and remains sound. The demand for apps designed specifically for children continues to grow in the marketplace.

Our app design makes it appropriate for children in age ranges 3-6/6-9. It is noteworthy to mention here that we safeguard the app’s young users with user authentication that requires a parent or other adult to step in and assist; beyond that, we added a safe-browse feature that ensures all content that is served up is appropriate for our target audience.

Each member of Team Triumph originally discussed wanting to challenge ourselves, and reviewed individual front and back end interests, strengths and weaknesses. At first, we were able at first to stick to front-end vs back-end research and coding, but the eventual use of React.js for the entire project changed everything. (Read below for further details.)

In the end, in an effort to finalize the project and marry both the front and back ends, just about everyone had to perform double duty, working on both front and back end coding.

Issues/Problems Related to React.js
The React.js framework is considered more accessible, convenient and useful, but implementing React.js for the entire project proved to be an extraordinary challenge. It added a level of difficulty that none of us anticipated.

As one example, I found that coding for all of the routes was overly complicated within the confines of React.js. Lesson learned. React.js has many attractive features but it is not recommended for complex, interactive, full-stack web projects.

Issues/Problems Related to Material.ui
Front-end developers encountered many problems with the implementation of material-ui, a user interface library. It has its own unique features, like built in css, for example. Using material-ui as a design tool also added more time and labor to the project.

Technologies Used
In all, Team Triumph used over 20 technologies throughout the app’s project management, research, coding and development process. This is best illustrated in the slide seen below.

IMPORT SCREENSHOT KATERINA MADE FOR PRESENTATION

Next Steps/Conclusion
In terms of technologies, if we chose to use React.js for just a small portion of our code, the entire process would have been less labor intensive. We may have been able to implement some of the other things we had in mind. This includes more children’s activities and other learning tools, e.g., the capacity to explore natural habitats and discover animal species that are considered endangered.

It is feasible that down the road Team Triumph could revise/rework this current app. We could try using mostly vanilla Javascript with one page dedicated to React.js. Instead of My Sql with Sequelize, we could use Mongo with Mongoose db. And rather than Materialize.ui, the app could be designed with a different design component, like Spectre or Semantic UI. Certainly, we envision making the design responsive and suitable as a mobile app.

Overall, through great effort and with technical support, Team Triumph struggled through and overcame some major coding and design obstacless. We are proud of the final outcome, and of challenging ourselves as well.
