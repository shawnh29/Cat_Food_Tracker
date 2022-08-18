const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

// app.use(express.static(path.join(__dirname, 'build'))); 
app.use(express.static("public")); 
app.use(express.static("public/build")); 
app.get("/api", (req, res) => {
    res.json({"users": ["user1", "user2", "user3"] });
});

app.get('*', (req, res) => {
    // res.sendFile(path.join(__dirname, 'build', 'index.html'));
    res.sendFile(path.resolve(__dirname, "public", 'build', 'index.html'));
});

app.listen(port, () => {console.log("Listening on 5000")});