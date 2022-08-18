const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

app.get("/api", (req, res) => {
    res.json({"users": ["user1", "user2", "user3"] });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath)); 

app.listen(port, () => {console.log("Listening on 5000")});