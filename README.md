# 🚀 HNG-13: STAGE 1 (#track_backend)

## Intelligent String Analysis Backend

## Overview

A robust Node.js Express API engineered for comprehensive string analysis, storage, and retrieval. This backend efficiently processes and extracts various properties from input strings, supports flexible filtering, and introduces a unique natural language interface for advanced query capabilities.

## Features

- **Express.js Framework**: Provides a robust foundation for building RESTful APIs with efficient routing and middleware management.
- **Advanced String Analysis**: Computes properties such as string length, palindrome status, unique character count, word count, SHA256 hash, and character frequency map.
- **Natural Language Query Processing**: Interprets human-readable queries to dynamically filter and retrieve stored strings based on specified criteria.
- **In-Memory Data Storage**: Manages string data within memory, ideal for high-speed access and demonstration of analysis capabilities.
- **CORS Support**: Configured for Cross-Origin Resource Sharing, enabling seamless integration with diverse client-side applications.
- **Environment Configuration**: Leverages `dotenv` for secure and flexible management of application settings, including server port.

## Getting Started

### Installation

To set up and run the StringSense API locally, follow these steps:

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/Jamal-09/hng_mobile_1
    cd stage_1
    ```
2.  **Install Dependencies**: Navigate to the project directory and install the required Node.js packages.
    ```bash
    npm install
    ```
3.  **Start the Server**: Launch the API server.
    ```bash
    node server.js
    ```
    The server will start on the configured port (defaulting to 4000).

### Environment Variables

The following environment variables are required for the application to run correctly. Create a `.env` file in the root directory and populate it as shown below:

- `PORT`: Specifies the port on which the Express server will listen.
  ```
  PORT=4000
  ```

## Usage

Once the server is running, you can interact with the API using a tool like `curl` or Postman. Here are some examples:

1.  **Check API Status:**

    ```bash
    curl http://localhost:4000/
    ```

2.  **Add a new string for analysis:**

    ```bash
    curl -X POST -H "Content-Type: application/json" -d '{"value": "hello world"}' http://localhost:4000/strings
    ```

3.  **Retrieve all strings with a filter (e.g., palindromes longer than 3 characters):**

    ```bash
    curl "http://localhost:4000/strings?is_palindrome=true&min_length=3"
    ```

4.  **Filter strings using a natural language query (e.g., "strings containing the letter z"):**

    ```bash
    curl "http://localhost:4000/strings/filter-by-natural-language?query=strings%20containing%20the%20letter%20z"
    ```

5.  **Get analysis for a specific string value:**
    ```bash
    curl "http://localhost:4000/strings/madam"
    ```

## API Documentation

### Base URL

`http://localhost:4000` (or your configured `PORT`)

### Endpoints

#### GET /

**Overview**: Checks the API server status and provides a welcome message.
**Response**:

```
Welcome to the string anlyzer API
```

#### POST /strings

**Overview**: Analyzes a new string, stores its properties in the system, and returns the detailed analysis.
**Request**:

```json
{
  "value": "your_string_here"
}
```

**Response**:

```json
{
  "id": "a59e9f3b192e226e6327e5ee0d981e4b0c2e36b8c9d0d34a5d8f6d62a98f1a3f",
  "value": "hello world",
  "properties": {
    "length": 11,
    "is_palindrome": false,
    "unique_characters": 8,
    "word_count": 2,
    "sha256_hash": "a59e9f3b192e226e6327e5ee0d981e4b0c2e36b8c9d0d34a5d8f6d62a98f1a3f",
    "character_frequency_map": {
      "h": 1,
      "e": 1,
      "l": 3,
      "o": 2,
      " ": 1,
      "w": 1,
      "r": 1,
      "d": 1
    }
  },
  "created_at": "2023-10-27T10:00:00.000Z"
}
```

## Technologies Used

| Technology      | Description                                             | Link                                                                       |
| :-------------- | :------------------------------------------------------ | :------------------------------------------------------------------------- |
| **Node.js**     | JavaScript runtime environment                          | [nodejs.org](https://nodejs.org/)                                          |
| **Express.js**  | Fast, unopinionated, minimalist web framework           | [expressjs.com](https://expressjs.com/)                                    |
| **body-parser** | Node.js body parsing middleware                         | [npmjs.com/package/body-parser](https://www.npmjs.com/package/body-parser) |
| **CORS**        | Node.js middleware for enabling CORS                    | [npmjs.com/package/cors](https://www.npmjs.com/package/cors)               |
| **crypto**      | Node.js built-in module for cryptographic functionality | [nodejs.org/api/crypto.html](https://nodejs.org/api/crypto.html)           |
| **dotenv**      | Loads environment variables from a `.env` file          | [npmjs.com/package/dotenv](https://www.npmjs.com/package/dotenv)           |

---

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![ISC License](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## 📬 Contact

Connect with me:

- 📧 Email: napg.adekunle@gmail.com
- 🌈 Slack: Jamal-09

### Built with 💻 & ❤️ by Jamal
