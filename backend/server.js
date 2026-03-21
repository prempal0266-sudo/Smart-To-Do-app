// const cors = require("cors");
// const express = require("express");
// const app = express();
// app.use(cors());
// const PORT = 5000;

// app.use(express.json());

// app.get("/", (req, res) => {
//     res.send("Smart To-Do API is running 🚀");
// });

// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });
// const mongoose = require("mongoose");
// require("dotenv").config();

// mongoose.connect(process.env.MONGO_URI)
// .then(() => console.log("MongoDB Connected ✅"))
// .catch(err => console.log(err));

// const taskRoutes = require("./routes/taskRoutes");

// app.use("/api/tasks", taskRoutes);


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// MIDDLEWARE
app.use(cors());          // ✅ THIS FIXES YOUR ERROR
app.use(express.json());

// ROUTES
const taskRoutes = require("./routes/taskRoutes");
app.use("/api/tasks", taskRoutes);

// DB CONNECTION
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected ✅"))
.catch(err => console.log(err));

// TEST ROUTE
app.get("/", (req, res) => {
    res.send("Smart To-Do API is running 🚀");
});

// SERVER
app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});