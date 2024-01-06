const {
  createThought,
  getAllThoughts,
  getThoughtbyId,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

const router = require("express").Router();

router.route("/").get(getAllThoughts).post(createThought);

router
  .route("/:thoughtId")
  .get(getThoughtbyId)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:thoughtId/reactions").post(addReaction);

router.route("/:thoughtId/reactions").delete(deleteReaction);

module.exports = router;
