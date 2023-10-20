import express from "express"

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("<h1>Hello World!</h1>");
});

app.get('/about', (req, res) => {
    res.send("<h1>This is the about page</h1>");
});

app.listen(port, () => {
    console.log(`Serving running on port ${port}`);
});