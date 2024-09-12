require('dotenv').config();
const express = require('express');
const passport = require('passport');
const app = express();
const session = require('express-session');
const cors = require('cors');  
require('./config/passport');
const routes = require('./routes/auth');




app.use(cors({
    origin: ['http://localhost:3000'], // Adjust this as needed
    credentials: true  // Allow credentials such as cookies
  }));
  





app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth',routes );

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
