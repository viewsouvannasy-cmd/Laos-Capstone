import app from "./app.js";
import { connectDB } from "./config/database.js";
import { getEnv } from "./utils/getEnv.js";

const server = async () => {
  try {
    await connectDB();

    const port = getEnv("PORT") || 3000;

    app.listen(port, () => {
      console.log(`Mode = ${getEnv("NODE_ENV")}`);
      console.log(`Server is runing on port:${port}`);
    });
  } catch (error) {
    console.log("Server error", error);
  }
};

server();
