const express = require("express");
const cors = require("cors");
const router = require("./routers/note.router");
const { errorHandler } = require("./middleware/error.middleware");
const app = express();
const { PORT } = require("./config/env.config");

// Middleware
app.use(express.json());
app.use(cors());
app.use("/api", router);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});