const router = require("express").Router();

// TODO Unfinished, need to plan out controller that we will use
const {
  getUsers,
  getUserbyId,
  createNewUser,
} = require("../../controllers/userController");

// /api/users
router.route("/").get(getUsers).post(createNewUser);

// /api/users/:userId
router.route("/:userId").get(getUserbyId).put().delete();

router.route("/:userId/friends/:friendId").post().delete();

module.exports = router;
