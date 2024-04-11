const router = require("express").Router();

// Importing the relevant functions from the post controller
const {
  createPost,
  getAllPosts,
  getPostById,
  updatePostById,
  fetchAllCommentsForPost,
  postCommmentForPost,
  removeCommentFromPost,
  getAllPostWithDetails,
  getSinglePostWithDetails,
  getAllPostIdWithUserID,
  deletePostById,
  updateVisibility,
  updateVisibilityMembersList,
  clearVisibilityMembersList,
  searchPost,
  createMultiplePosts,
  getAllPostIDs,
} = require("../controller/post");

// Create new post
router.post("/", createPost);

//Extra end point 2. Create multiple posts
router.post("/multiple", createMultiplePosts);

// Get all posts
router.get("/", getAllPosts);

//Extra route
//Get all postIDs with UserIDs
router.get("/users/ids", getAllPostIdWithUserID);

//Search for a post
router.get("/search", searchPost);

// Get all posts with details
router.get("/details", getAllPostWithDetails);

// Get a single post with details
router.get("/details/:id", getSinglePostWithDetails);

// Fetch all comments for a post
router.get("/:id/comments", fetchAllCommentsForPost);

// Post a comment for a post
router.patch("/:id/comments", postCommmentForPost);

// Remove a comment from a post
router.patch("/:id/comments/delete", removeCommentFromPost);

// Get a post by ID
router.get("/:id", getPostById);

// Update a post by ID
router.patch("/:id", updatePostById);

//Delete a post by ID
router.delete("/:id", deletePostById);

//Get all Post IDS only
router.get("/ids", getAllPostIDs);

//update post visibility
router.patch("/:id/visibility", updateVisibility);

// Update visibility members list by post ID
router.patch("/:id/visibilityList", updateVisibilityMembersList);

// Clear visibility members list by post ID
router.patch("/:id/visibilityList/clear", clearVisibilityMembersList);

// Export router
module.exports = router;
