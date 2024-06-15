# Auth App

This is a simple authentication application built with Node.js, Express, MongoDB, and JWT for the backend, and HTML, CSS, and JavaScript for the frontend. It allows users to sign up, sign in, view their profile, and log out.

## Features

- User sign-up with validation
- User sign-in with authentication
- JWT-based authentication middleware
- Protected profile page
- User logout functionality

## Prerequisites

- Node.js
- MongoDB

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/auth-app.git
    cd auth-app
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up your environment variables:

    Create a `.env` file in the root directory and add the following:

    ```env
    PORT=8000
    MONGO_URL="your_mongo_connection_string"
    SECRET="your_jwt_secret"
    ```

4. Connect to your MongoDB database:

    Update the `MONGO_URL` in the `.env` file with your MongoDB connection string.

## Running the Application

1. Start the server:

    ```bash
    npm start
    ```

2. Open your browser and navigate to `http://localhost:8000`.

## API Endpoints

- `GET /`: Home endpoint
- `POST /signup`: Sign-up endpoint
- `POST /signin`: Sign-in endpoint
- `GET /user`: Get user details (protected)
- `GET /logout`: Logout user (protected)

## Usage

1. **Sign up:**
    - Open `index.html` and fill in the sign-up form.
    - Submit the form to create a new user.

2. **Sign in:**
    - Fill in the sign-in form with your email and password.
    - Submit the form to sign in.
    - On successful sign-in, you'll be redirected to the profile page (`profile.html`).

3. **Profile Page:**
    - The profile page displays the user's name and email.
    - If the user data is not found, it redirects to the sign-in page.

4. **Logout:**
    - Call the `/logout` endpoint to log out the user.

