import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hi, I am Sahil');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Port is listening on ${port}`);
});
