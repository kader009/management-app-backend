# Task Job Backend

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Configuration](#configuration)
- [Scripts](#scripts)


## Overview

The **Task Job Backend** is a RESTful API for managing tasks. It allows you to create, read, update, and delete tasks using MongoDB as the database. The API is built using Express and Node.js.

## Features

- Create new tasks
- Retrieve all tasks
- Update existing tasks
- Delete tasks
- CORS enabled for cross-origin requests

## Installation

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/task-job-backend.git
    ```
2. Also you can down this repository:

    ```bash
    git clone https://github.com/yourusername/task-job-backend.git
    ```

3. Navigate to the project directory:

    ```bash
    cd task-job-backend
    ```

4. Install dependencies:

    ```bash
    npm install
    ```

5. Create a `.env` file in the root directory and add your MongoDB connection string:

    ```bash
    cp .env.example .env
    ```

    Update the `.env` file with your MongoDB URI:

    ```env
    DATABASE=your_mongodb_connection_string
    ```

6. Start the server in development mode:

    ```bash
    npm run dev
    ```

## Usage

Once the server is running, you can interact with the API using tools like [Postman](https://www.postman.com/) or [cURL](https://curl.se/).

The base URL for the API is:

```http
http://localhost:5000
