# Backend

- npm init -y
- install these packages(npm i express mongoose dotenv jsonwebtoken bcryptjs cookie-parser cloudinary socket.io)
- npm i nodemon -D
- mongo harsh ()
- cloudinary for image stored go to dashboard copy cloud name and use it
- in env create jwt secret by using this command node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
- install cors (npm i cors)
- Run seeds file using this command (node src/seeds/user.seed.js)

# frontend

- npm create vite@latest .
- use tailwind css and daisy ui
- npm i react-router-dom react-hot-toast
- npm i axios zustand
- npm install lucide-react
- Socket.io : We use Socket.IO when we need real-time, bidirectional communication between the client (like a browser or mobile app) and the server.
- You can send and listen for custom events easily (socket.emit("message"), socket.on("message")).
- socket.io is use for server and socket.io-client is use a client communication
- Used on the server side (Node.js backend).
- Used on the client side (browser, React app, mobile app, or even another Node.js service).
