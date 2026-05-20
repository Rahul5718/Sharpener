
const express = require('express');
const path = require('path');
const sequelize = require('./util/database');
const scheduleRoutes = require('./routes/schedule');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use(scheduleRoutes);

// Sync Database and Start Server
sequelize.sync()
    .then(() => {
        app.listen(3000, () => console.log('Server running on port 3000'));
    })
    .catch(err => console.log(err));