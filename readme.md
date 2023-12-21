# Jobcraftsman Backend

Welcome to the backend repository of Jobcraftsman, a web application that facilitates job listing and browsing. This backend provides the necessary APIs for user authentication, job creation, updating, viewing, searching, and filtering.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)

## Features

- **User Authentication:**
  - Register a new user account.
  - Log in with valid credentials.

- **Job Management:**
  - Create a new job listing.
  - Update an existing job listing.

- **Job Viewing:**
  - View a particular job details.
  - View all available job listings.

- **Search and Filter:**
  - Search for jobs based on job title.
  - Filter jobs based on skills.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed.
- MongoDB or any other preferred database installed and configured.

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/bikashd003/job-lister-backend.git
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

## Configuration

1. **Environment Variables:**

   Create a `.env` file in the root directory with the following variables:

    ```env
    PORT=4000
    DATABASE_URL=your_database_url
    SECRET_KEY=your_secret_key
    ```

## Usage

1. **Start the server:**

    ```bash
    nodemon index.js
    ```

2. **The backend server will be running at [http://localhost:4000](http://localhost:4000).**

## API Endpoints

- **POST /api/register:** Register a new user.
- **POST /api/login:** Log in with valid credentials.
- **POST /api/create-job:** Create a new job listing.
- **PUT /api/update-job/:jobId:** Update an existing job listing.
- **GET /api/get-job/:jobId:** View details of a particular job.
- **GET /api/get-jobs** View all available job listings.
- **GET /api/get-jobs?position=?$skillsRequired=?:** Search and filter for jobs based on title and skills.
-

**Note:** Replace placeholders like `your-username`, `your_database_url`, and `your_secret_key` with the actual values relevant to your project.

## Contributing

Contributions are welcome! Please follow the steps
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

