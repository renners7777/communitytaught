import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const user = process.env.DB_USER;
const pass = process.env.DB_PASS;
const cluster = process.env.DB_CLUSTER;
const dbName = process.env.DB_NAME;
const url = `mongodb+srv://${user}:${pass}@${cluster}.58qh2.mongodb.net/${dbName}?retryWrites=true&w=majority`;

const connectDB = async () => {
	try {
		mongoose.set("strictQuery", true);
		const conn = await mongoose.connect(url, {});

		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
};

export default connectDB;
