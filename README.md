# PDF  Extractor

This repository contains both the server-side and client-side code for a web application that allows users to upload PDF files and extract specific pages to create new PDFs. The server-side is built with Express.js, and the client-side is built with React.js. With this application, users can select the pages they want to include in the new PDF, offering a simple yet powerful PDF manipulation tool.

- Client-Side Hosted Link: [PDF Extractor Client](https://modifypdf.netlify.app/)

- Server Hosted Link: [PDF Extractor Server](https://pdf-extractor-server-0z09.onrender.com)

## Server-Side

### Description

The server-side of the application is built with Express.js and provides the backend functionality for handling PDF file uploads and page extraction. It also serves as the API for the client-side application.



### Installation

To run the server locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the `backend` directory and install the required dependencies using `npm install`.
3. Create a `.env` file in the `backend` directory and add the following environment variables:
   - `PORT:4000`
   - `url:database connection url`
   - `JWT_SECRET`
   
4. Start the server using `npm start` or `npm run dev`.
5. Access the server through your web browser at the specified `PORT` or `http://localhost:4000`.

## Client-Side

### Description

The client-side of the application is built with React.js and provides a user-friendly interface for users to interact with the server-side, upload PDF files, and select specific pages for extraction.


### Installation

To run the client-side application locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the `frontend` directory and install the required dependencies using `npm install` or `npm i`.
3. Start the client-side application using `npm start`.
4. Access the web application through your web browser at `http://localhost:3000`.
