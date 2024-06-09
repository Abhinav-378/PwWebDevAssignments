# My Express App

## Overview

This is a Node.js and Express-based application with user registration and login functionalities. It uses MongoDB for database management.

## Setup

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/yourrepo.git
    cd foldername
    ```

2. Install dependencies:
    ```bash
    npm install express mongoose dotenv cors
    ```

3. Create a `.env` file and add your MongoDB connection string:
    ```env
    MONGO_URL="mongodb+srv://user:pswd@cluster0.hohduyy.mongodb.net/userLoginApp" //replace username and pswd
    PORT=8000
    ```

4. Start the server:
    ```bash
    npm start
    ```

## API Endpoints

### Base URL

`http://127.0.0.1:8000`

### Routes

#### Home

- **URL**: `/`
- **Method**: `GET`
- **Description**: Returns the home page message.

#### Register User

- **URL**: `/registeruser`
- **Method**: `POST`
- **Description**: Registers a new user.
- **Request Body**:
    ```json
    {
        "name": "John Doe",
        "email": "john@example.com",
        "password": "password123"
    }
    ```

#### Login User

- **URL**: `/loginuser`
- **Method**: `POST`
- **Description**: Logs in an existing user.
- **Request Body**:
    ```json
    {
        "email": "john@example.com",
        "password": "password123"
    }
    ```



