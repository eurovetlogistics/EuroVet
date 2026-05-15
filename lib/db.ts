import mongoose, { type Mongoose } from "mongoose";

declare global {
  // eslint-disable-next-line no-var
  var _mongoose: { conn: Mongoose | null; promise: Promise<Mongoose> | null } | undefined;
}

const cached =
  global._mongoose ?? (global._mongoose = { conn: null, promise: null });

export async function connectDB(): Promise<Mongoose | null> {
  const uri = process.env.MONGODB_URI;
  if (!uri) return null;
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(uri, {
      dbName: process.env.MONGODB_DB || "eurovet",
      bufferCommands: false,
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export function isDbAvailable() {
  return Boolean(process.env.MONGODB_URI);
}
