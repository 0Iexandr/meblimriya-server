require('dotenv').config();
const express = require('express');
const router = express.Router();
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/database');

// const corsOptions = {
//   origin: ['https://meblimriya.com', 'https://www.meblimriya.com'],
//   credentials: true
// };

const server = express();
connectDB();

// server.use(cors(corsOptions));
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => res.json('Meblimriya server is running'));

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
