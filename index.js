const express = require('express');

const path = require('path');

const app = express();

const members = require('./Members');

const logger = require('./middleware/logger');

app.use(logger);

//gets all members

app.get('/api/members', (req,res) => {
	res.json(members);
});

// app.get('/', (req,res)=>{
// 	//res.send('<h1>Hello World!!</h1>');
// 	res.sendFile(path.join(__dirname,'public','index.html'));
// })

//Set static folder

app.use(express.static(path.join(__dirname,'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));
