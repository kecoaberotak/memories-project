import express from "express";
// di node js kalo import file js harus pake .js
import { getPosts, createPost } from "../controllers/posts.js";

const router = express.Router();

// localhost:5000/posts
// getPosts dijalankan melalui posts.js controller
router.get('/', getPosts);
router.post('/', createPost);

export default router;