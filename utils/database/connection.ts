import { connect, disconnect } from "mongoose";

export const connectToDatabase = async () => {
  const { MONGODB_URI } = process.env;
  if (!MONGODB_URI) throw new Error("Missing MONGODB_URI");
  await connect(MONGODB_URI);
};

export const disconnectFromDatabase = async () => {
  await disconnect();
  console.log("Disconnected from database");
};
