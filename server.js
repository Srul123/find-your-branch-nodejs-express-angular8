const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect to Database

connectDB();

// init middleware

app.use(express.json({ extended: false }));



app.get('/', (req, respond) => respond.json({msg: 'Wellcome to find-your-branch API'}));

//Define Routes

// app.use("/api/branches", require("./routes/branches"));
app.use("/api/cities", require("./routes/cities"));
// app.use("/api/regions", require("./routes/regions"));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("express: ", PORT));



