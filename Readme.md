 # ✨ Full Stack Realtime Chat App ✨

A full-stack real-time chat application built with a Node.js/Express backend and React frontend, utilizing Socket.IO for seamless, bidirectional communication.

## Overview

This project is a robust real-time chat application that includes image uploads, secure user authentication, and instant messaging powered by Socket.IO. It's designed for easy setup and scalability.

---

## Features

- **Real-Time Messaging:** Instant communication between users via Socket.IO
- **User Authentication:** Secure login system using JWT, bcrypt, and cookie-parser
- **Image Uploads:** Seamless integration with Cloudinary for media handling
- **Production-Ready:** Fully structured backend and frontend for real-world deployment

---

- 🌟 **Tech Stack:** MERN + Socket.io + Tailwind CSS + DaisyUI
- 🎃 **Authentication & Authorization:** Secured with JWT
- 👾 **Real-Time Messaging:** Powered by Socket.io
- 🚀 **Online User Status:** Track active users in real-time
- 👌 **Global State Management:** Handled with Zustand
- 🐞 **Error Handling:** Comprehensive on both server and client sides
- ⭐ **Deployment:** Step-by-step guide for free professional deployment
- ⏳ **And Much More!** Explore additional features like image uploads and more

---

## Prerequisites

Before getting started, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- A [MongoDB](https://www.mongodb.com/) instance (local or MongoDB Atlas)
- For image uploads: A free [Cloudinary](https://cloudinary.com/) account

---

## Setup & Installation

### Backend

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Initialize the project and install dependencies:
   ```bash
   npm init -y
   npm install express mongoose dotenv jsonwebtoken bcryptjs cookie-parser cloudinary socket.io cors
   npm install --save-dev nodemon
   ```

3. Configure environment variables (see [Environment Variables](#environment-variables) section below).

4. Seed the database with initial users:
   ```bash
   node src/seeds/user.seed.js
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```
   (Alternatively, use `nodemon src/index.js` directly.)

### Frontend

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. If starting fresh, scaffold with Vite (skip if the project is already set up):
   ```bash
   npm create vite@latest .
   ```

3. Install dependencies:
   ```bash
   npm install react-router-dom react-hot-toast axios zustand lucide-react socket.io-client
   npm install --save-dev tailwindcss daisyui
   ```

4. Start the frontend development server:
   ```bash
   npm run dev
   ```

---

## Seeding the Database

To populate the database with sample user data for quick testing:

```bash
node src/seeds/user.seed.js
```

This script adds initial users to help you get started immediately.

---

## Environment Variables

Create a `.env` file in the `backend` directory with the following keys. Replace placeholders with your actual values:

```
MONGODB_URI=your_mongo_connection_string
PORT=3000
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
NODE_ENV=development
```

To generate a secure `JWT_SECRET`, run:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

This ensures strong encryption for your JWT tokens.

---

## Available Scripts

| Directory | Command       | Purpose                              |
|-----------|---------------|--------------------------------------|
| Backend   | `npm run dev` | Starts the backend with nodemon      |
| Frontend  | `npm run dev` | Starts the Vite development server   |

### Building the App

For production builds (primarily for the frontend):

```shell
npm run build
```

### Starting the App in Production

After building, start the app:

```shell
npm start
```

Note: This assumes a production setup; adjust for your deployment environment.

---

## Project Structure

```
├── backend
│   ├── src
│   │   ├── seeds
│   │   │   └── user.seed.js      # Database seeding script
│   │   ├── index.js             # Main server entry point
│   │   └── ...                  # Routes, models, middleware, and socket handlers
├── frontend
│   ├── src
│   │   └── ...                  # React components, routes, state management, and UI
├── README.md                       # Project documentation
```

---

## Contributing

We welcome contributions! Follow these steps to get involved:

1. Fork the repository.
2. Create a new feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add a brief description of your feature"
   ```
4. Push to your fork and submit a pull request.

Please ensure your code follows the project's style guidelines and includes relevant tests.

---

## License

This project is licensed under the **MIT License**. Feel free to use, modify, and distribute it as per the license terms.
