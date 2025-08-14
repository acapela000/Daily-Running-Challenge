# Running Challenge API

## Overview
The Running Challenge API allows users to participate in daily and weekly running challenges. Users can register, log in, submit their running results, and track their performance over time. The API also features a leaderboard for weekly and monthly rankings, as well as streak tracking to encourage consistent participation.

## Features
- User registration and login with JWT authentication
- CRUD operations for managing running challenges (admin)
- Submission of run results including distance, time, and date
- Calculation of pace and calories burned
- Leaderboard for weekly and monthly rankings
- Streak tracking to monitor user participation

## Technologies Used
- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- JSON Web Tokens (JWT)
- TypeScript

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   cd running-challenge-api
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up the PostgreSQL database and update the connection details in the `.env` file.

4. Run the Prisma migrations to set up the database schema:
   ```
   npx prisma migrate dev
   ```

5. Start the server:
   ```
   npm run start
   ```

## API Usage
- **Authentication**
  - POST `/api/auth/register`: Register a new user
  - POST `/api/auth/login`: Log in an existing user

- **Challenges**
  - GET `/api/challenges`: Retrieve all challenges
  - POST `/api/challenges`: Create a new challenge (admin)
  - PUT `/api/challenges/:id`: Update an existing challenge (admin)
  - DELETE `/api/challenges/:id`: Delete a challenge (admin)

- **Results**
  - POST `/api/results`: Submit run results

- **Leaderboard**
  - GET `/api/leaderboard`: Retrieve leaderboard data

- **User**
  - GET `/api/users/:id`: Retrieve user information
  - PUT `/api/users/:id`: Update user profile

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License.