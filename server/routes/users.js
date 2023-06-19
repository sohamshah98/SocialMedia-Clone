import express from "express";
import {
    getUser,
    getUserFriends,
    addRemoveFriend,
} from "../controllers/users.js"
import { verifyToken } from "../middleware/auth.js"
import  defaultMaxListeners  from "multer-gridfs-storage";

const router = express.Router();

/* Read */
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);

/* Update */
router.patch("/:id/:friendsID", verifyToken, addRemoveFriend);

export default router;

