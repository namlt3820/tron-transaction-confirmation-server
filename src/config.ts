import { config } from "dotenv";
import { TronEvent } from "./interfaces";

config();

let {
	NODE_ENV,
	SENTRY_DNS,
	KAFKA_BROKER,
	MONGO_URI,
	REDIS_HOST,
	REDIS_PORT,
	REDIS_PREFIX,
	NETWORK,
	TIME_VALIDATION_LIMIT,
	TRON_WEB_PRIVATE_KEY,
	BLOCK_VALIDATION_LIMIT,
	TIME_CLEANUP_TRANSACTION,
	SERVER_URL,
} = process.env;

[
	"NODE_ENV",
	"SENTRY_DNS",
	"KAFKA_BROKER",
	"MONGO_URI",
	"REDIS_HOST",
	"REDIS_PORT",
	"NETWORK",
	"TIME_VALIDATION_LIMIT",
	"BLOCK_VALIDATION_LIMIT",
	"TRON_WEB_PRIVATE_KEY",
	"TIME_CLEANUP_TRANSACTION",
	"SERVER_URL",
].forEach((el) => {
	if (!process.env[el]) {
		throw new Error(`${el} is required`);
	}
});

const KAFKA_TOPICS = {
	block: TronEvent.Block,
	transaction: TronEvent.Transaction,
};

export {
	NODE_ENV,
	SENTRY_DNS,
	KAFKA_BROKER,
	KAFKA_TOPICS,
	MONGO_URI,
	REDIS_HOST,
	REDIS_PORT,
	REDIS_PREFIX,
	NETWORK,
	TIME_VALIDATION_LIMIT,
	TRON_WEB_PRIVATE_KEY,
	BLOCK_VALIDATION_LIMIT,
	TIME_CLEANUP_TRANSACTION,
	SERVER_URL,
};
