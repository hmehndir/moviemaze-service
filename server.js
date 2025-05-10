require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");


const app = express();

app.use(
  cors({
    origin: "https://moviemaze-ui.vercel.app", // your frontend domain
  })
);
app.use(express.json());


mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successful");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/user", userRoutes);

app.listen(4000, () => {
  console.log("server started on port 4000");
});