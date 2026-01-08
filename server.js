require( 'dotenv' ) . config();
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(express.static(__dirname,));


app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/api/stylejada-inquiry', (req, res) => {
const name = req.body.name;
const email = req.body.email;
const message = req.body.message;

console.log("Inquiry received from:", name);
console.log("Inquiry received from:", email);
console.log("Inquiry received from:", message);
res.status(200).send({ message: "Inquiry received!" });
});



app.listen(PORT, () => {
console.log(`StyleJada Server running at http://localhost:${PORT}`);
});
module.exports = app;