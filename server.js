const express = require('express');

// bring in local modules

// clear console
console.clear();

// connect to database

// initalize app
const app = express();

// body parser middleware

// inital route
// app.get('/', (req, res) => res.json({ msg: 'Welcome to the ContactKeeper API...' }));
app.get('/', (req, res) => res.send('api running'));

// define routes

// server static assets in production
if (process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express.static('client/build'));

    // set default 'route'
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
