# Movie Watchlist Application 


The Movie Watchlist application is a web-based tool that allows users to manage a list of movies they want to watch. Users can add, edit, and delete movies from their watchlist, mark movies as watched or unwatched, and rate and review movies. State management will be handled using Redux to ensure efficient and predictable state updates.

## Link for Visit

[Go Live On](https://movie-watchlist-application-invact.vercel.app/)

[Youtube Video Link]()

## Key Features

1. **Add Movies**
    - Users can add movies to their watchlist by providing details such as the movie title, description, release year, and genre.
    - Each movie should have a unique identifier.
2. **Edit Movies**
    - Users can edit the details of movies already in their watchlist.
3. **Delete Movies**
    - Users can delete movies from their watchlist.
4. **Mark Movies as Watched/Unwatched**
    - Users can toggle the status of a movie between watched and unwatched.
5. **Rate and Review Movies**
    - Users can rate movies on a scale of 1 to 5 stars.
    - Users can provide a text review for each movie.
6. **State Management with Redux**
    - All state changes (adding, editing, deleting movies, marking as watched/unwatched, rating, and reviewing) will be managed using Redux.


## Tech Stack

### Backend

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing event data.
- **dotenv**: Module to load environment variables.

### Frontend

- **React.js**: JavaScript library for building user interfaces.
- **react-router-dom**: navigation.
- **react-loader-spinner**: Loading .

## Project Setup

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Backend Setup

1. Clone the repository:
   ``` bash
   git clone https://github.com/Anjali9561Gupta/Movie-Watchlist-Application-Invact.git
   cd frontend
  ``
  
2. Navigate to the backend directory:
   `` bash
      cd backend
   ``

3. Install dependencies::
   `` bash
      npm install
   ``
   
4. Create a .env file and add the following environment variables:
  `` bash
      PORT=5000
      MONGO_URI=your_mongodb_uri
   ``
5. Start the backend server:
    `` bash
      npm run server
   ``
   
### Frontend Setup

1. Navigate to the frontend directory:
  ``
  cd frontend
  Install dependencies:
  ``

2. Navigate to the backend directory:
   `` bash
      cd backend
   ``
   
3. Install dependencies::
   `` bash
      npm install
   ``

4. Start the backend server:
    `` bash
      npm start
   ``

### API Endpoints
## Event Endpoints
1. Add Movie: POST /movie/
2. Get Movies: GET /movie/
3. Update Movie: PUT /movie/:id
4. Delete Movie: DELETE /movie/:id
5. Get Movie Seprately: GET /movie/:id
6. Watched/Unwatched Status : PATCH /movie/:id/watchStatus
7. Review Update : PATCH /movie/:id/review


### Usage
- Navigate to the frontend application in your browser at http://localhost:3000.
- Use the interactive calendar to view, create, update, and delete movies.


