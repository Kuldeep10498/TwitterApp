import express from "express";
import { createTweet, getTweetById, getTweets } from "../../controller/tweetController.js";

const router = express.Router();


router.get("/", getTweets);

router.get("/:id",getTweetById);

router.post("/", createTweet);

export default router;

