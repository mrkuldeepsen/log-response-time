const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000

const { logResponseTime } = require("./middleware/middleware");

app.use(logResponseTime);

app.get("/", (req, res) => {
    res.send("hello");
});
app.get("/slow", (req, res) => {
    for (let i = 0; i < 1e10; i++) { }
    res.send("hello");
});

app.listen(PORT, () => console.log(`Server is running on port http://localhost:${PORT}`))