require( 'dotenv' ) . config();
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;
// This line allows hosting sites to work

app.use(express.json());
app.use(express.static(__dirname,));

app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/api/stylejada-inquiry', (req, res) => {
console.log("Inquiry received from:", req.body.name);
res.status(200).send({ message: "Ọrụ Aka Di Ebube! Bespoke inquiry received!" });
});

// We add this so the host knows to show your HTML file when the site loads

app.listen(PORT, () => {
console.log(`StyleJada Server running at http://localhost:${PORT}`);
});
module.exports = app;