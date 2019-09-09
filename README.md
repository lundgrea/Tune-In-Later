# Tune In Later

Tune In Later, built as a three person team over the course of seven days utilizing an agile workflow, allows users to search the iTunes API for their favorite musical albums from within the application and, once logged in, save their favorites to their account. New users are encouraged to create an account in order to join the fun and save their favorites. The application bootstrapped with Create React App utilizes React Router for page navigation, Redux to assist in data management, PropTypes to ensure the correct data types are passed within the program, and a testing suite utilizing Enzyme and Jest. Tests cover UI changes, event simulation, async fetch calls, React state changes, and Redux store updates. 

In addition to the easy-to-navigate front end UI the application makes fetch calls to a local backend allowing existing users to login, new users to create an account, save their favorites, and delete their favorites from the associated backend database utilizing POST and DELETE network requests. The asyncronous JavaScript is managed utilizing async/await alongside try/catch for error handling. 

## Technologies Utilized
 - React
 - React Router
 - Redux
 - iTunes API
 - postgresSQL
 - Fetch (GET/POST/DELETE) local server network requests
 - PropTypes
 - CSS

## Set Up

### Clone and Install Backend

Clone down this [backend repository](https://github.com/turingschool-examples/favorites-tracker-api) and follow instructions within to install dependencies and configure postgresSQL.

Install the application's dependencies from within the cloned directory:
```bash
npm install
```
Then launch the backend:
```bash
npm start
```

### Clone and Install UI

Clone down the UI repository.

Install the application's dependencies from within the cloned directory:
```bash
npm install
```

Then launch the application within the browser:
```bash
npm start
```

### Launch API & UI

With the backend server running on localhost:3001 open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Testing

Application components and routes have been tested using various unit testing techniques including snapshots, class method and functional testing. 
```bash
npm test
```

## Developers

 - Christopher Lane [@CLLane](https://github.com/CLLane)
 - Aidan McKay [@JellyBeans1312](hhttps://github.com/JellyBeans1312)
 - Alyssa Lundgren [@lundgrea](https://github.com/lundgrea)

## Screenshots
![]()
![]()
![]()
![]()
