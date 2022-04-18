import { connectDb } from "./db.js";
import app from "./app.js";
import { PORT } from "./config.js";

//! Connect to MongoDB
connectDb()

//! Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
