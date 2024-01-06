const router = require("express").Router();

const {
  getUsers,
  getUserbyId,
  createNewUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");

// /api/users
router.route("/").get(getUsers).post(createNewUser);

// /api/users/:userId
router.route("/:userId").get(getUserbyId).put(updateUser).delete(deleteUser);

router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
