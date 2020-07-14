const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const router = require('./router');

require('dotenv').config();
const MONGODB_URI = process.env.MONGODB_URI;

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);


mongoose.connect(MONGODB_URI)
	.then(result => {
		const port = process.env.PORT || 3090;
		const server = http.createServer(app);
		server.listen(port);
		console.log('Server listen on ', port);
	})
	.catch(e => console.log(e));

