const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));

const userRouter = require("./routes/userRouter")
const hostRouter = require("./routes/hostRouter")

app.use(userRouter)
app.use(hostRouter)
  
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
