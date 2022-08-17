const express = require("express");
const app = express();
const port = 3000;
require('./db/dbConnection');
const userRouter = require("./router/userRouter");
app.use(express.json());

app.get("/", (req, res) => {
          res.json({mesaj:"merhaba index.js"})
});
app.post("/",(req,res) => {
          res.status(200).json(req.body);
})

app.use("/api/users" , userRouter);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
